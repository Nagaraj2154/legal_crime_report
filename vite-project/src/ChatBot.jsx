import React, { useState, useEffect, useRef } from "react";

// Optional: Basic Message Bubble
const Message = ({ sender, text }) => (
  <div
    style={{
      alignSelf: sender === "user" ? "flex-end" : "flex-start",
      backgroundColor: sender === "user" ? "#dcf8c6" : "#f1f0f0",
      padding: "10px",
      borderRadius: "10px",
      maxWidth: "70%",
      margin: "5px 0",
    }}
  >
    <strong>{sender === "user" ? "You" : "Bot"}:</strong> {text}
  </div>
);

// Optional: Input and Send Button
const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      onSend(input);
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div style={{ display: "flex", padding: "10px", borderTop: "1px solid #ccc" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type a message..."
        style={{ flex: 1, padding: "10px", borderRadius: "5px", border: "1px solid #ccc"  ,color: "white" }}
      />
      <button onClick={handleSend} style={{ marginLeft: "10px", padding: "10px 20px" , color: "white" }}>
        Send
      </button>
    </div>
  );
};

// Optional: Typing Indicator
const TypingIndicator = ({ visible }) =>
  visible ? <div style={{ padding: "10px", fontStyle: "italic" }}>Bot is typing...</div> : null;

// Main ChatBot Component
export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const systemPrompt =
    "You are a helpful and knowledgeable AI assistant. Keep responses clear, safe, and informative.";

  // Welcome message
  useEffect(() => {
    const welcomeMessage =
      "I am an AI assistant, not a lawyer. The information I provide is for educational purposes only.";
    addMessage("bot", welcomeMessage);
  }, []);

  // Scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const handleSend = async (userInput) => {
    addMessage("user", userInput);
    setChatHistory((prev) => [
      ...prev,
      { role: "user", parts: [{ text: userInput }] },
    ]);
    setIsTyping(true);

    try {
      const botResponse = await callGeminiApi([
        ...chatHistory,
        { role: "user", parts: [{ text: userInput }] },
      ]);
      addMessage("bot", botResponse);
      setChatHistory((prev) => [
        ...prev,
        { role: "model", parts: [{ text: botResponse }] },
      ]);
    } catch (error) {
      console.error("Gemini API error:", error);
      addMessage("bot", "Sorry, something went wrong. Please try again.");
    } finally {
      setIsTyping(false);
    }
  };

  const callGeminiApi = async (updatedChatHistory) => {
    const apiKey = "AIzaSyCR-NfS7tvg9ssWacvwQwx_T8KnCOIh7Mc"; // Replace with your Gemini API Key
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const payload = {
      contents: updatedChatHistory,
      system_instruction: {
        parts: [{ text: systemPrompt }],
      },
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error: ${errorText}`);
    }

    const result = await response.json();

    if (
      result.candidates &&
      result.candidates[0].content &&
      result.candidates[0].content.parts &&
      result.candidates[0].content.parts.length > 0
    ) {
      return result.candidates[0].content.parts[0].text;
    }

    return "I couldn't generate a response. Please try again.";
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        display: "flex",
        flexDirection: "column",
        height: "80vh",
        backgroundColor: "#fff",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          padding: "15px",
          backgroundColor: "#333",
          color: "#fff",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        AI ChatBot
      </div>

      <div
        style={{
          flex: 1,
          padding: "15px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender} text={msg.text} />
        ))}
        <div ref={messagesEndRef} />
        <TypingIndicator visible={isTyping} />
      </div>

      <ChatInput onSend={handleSend} />
    </div>
  );
}
