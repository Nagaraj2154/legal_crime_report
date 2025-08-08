import React from "react";

export default function About() {
  return (
    <>
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
            Empowering Justice Through Awareness
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            <strong>NyaySathi</strong> is a digital platform designed to promote{" "}
            <span className="font-semibold text-indigo-700">legal awareness</span> and provide access to justice for all.
            Our goal is to ensure that everyone — especially the underrepresented and vulnerable — understands their rights
            and knows how to seek legal support when needed.
          </p>

          <h3 className="text-2xl font-semibold text-indigo-700 mt-10 mb-4">What is SDG 16?</h3>
          <ul className="list-disc list-inside text-gray-700 ml-4 mb-4">
            <li>Promote peaceful and inclusive societies</li>
            <li>Ensure access to justice for all</li>
            <li>Build effective, accountable institutions</li>
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Achieving SDG 16 is vital for reducing inequality, ensuring human rights, and fostering sustainable peace and development.
          </p>

          <h3 className="text-2xl font-semibold text-indigo-700 mt-10 mb-4">Why Legal Awareness Matters</h3>
          <ul className="list-disc list-inside text-gray-700 ml-4 mb-4">
            <li>Understand their rights and duties</li>
            <li>Prevent exploitation or injustice</li>
            <li>Access legal remedies and support systems</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Especially in rural or marginalized communities, legal awareness is the first step towards creating a fair and inclusive society.
          </p>

          <h3 className="text-2xl font-semibold text-indigo-700 mt-10 mb-4">Our Mission</h3>
          <p className="text-gray-700 mb-6">
            At <strong>NyaySathi</strong>, we believe technology can bridge the gap between citizens and justice.
            Whether it's through legal bots, simplified documents, or anonymous reporting — our mission is to make justice more accessible, understandable, and actionable for everyone.
          </p>

          {/* ✅ Our Team Section */}
          <h3 className="text-2xl font-semibold text-indigo-700 mt-10 mb-4 text-center">Meet Our Team – Code Thrives</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-bold text-indigo-800">Sri Harsha</h4>
              <p>Team Leader</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-bold text-indigo-800">Sai Chandra</h4>
              <p>Chatbot Developer</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-bold text-indigo-800">Preethi</h4>
              <p>Backend Developer</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-bold text-indigo-800">Nagaraju</h4>
              <p>Frontend Developer</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-bold text-indigo-800">Nithesh</h4>
              <p>Documentation & Presentation</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-bold text-indigo-800">Akhilesh</h4>
              <p>Documentation & Presentation</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href="docs.html"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Explore Legal Resources
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t mt-10">
        <div className="max-w-7xl mx-auto py-6 px-4 flex flex-col md:flex-row justify-between items-center text-gray-600">
          <p>© 2025 NyaySathi. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with ❤️ by Team Code Thrives</p>
        </div>
      </footer>
    </>
  );
}
