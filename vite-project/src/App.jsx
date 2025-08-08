import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import ChatBot from './ChatBot';
import Docs from './Docs';
import AddReport from './AddReport';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: '60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/report" element={<AddReport />} />
          <Route path="/services" element={<ChatBot />} />
          <Route path="/Docs" element={<Docs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
