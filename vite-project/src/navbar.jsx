import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
      <nav className="bg-white shadow-md  top-0 left-0 w-full z-1000 margin-bottom-2">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">NyaySathi</h1>
        <ul className="flex space-x-6 font-medium">
          <li className="hover:text-indigo-600">
            <Link to="/"  className="text-decoration-none">Home</Link>
          </li>
          <li className="hover:text-indigo-600  " >
            <Link to="/Docs"  className="text-decoration-none">Doc's</Link>
          </li>
          <li className="hover:text-indigo-600">
            <Link to="/report"  className="text-decoration-none">Add Report</Link>
          </li>
          <li className="hover:text-indigo-600">
            <Link to="/services"  className="text-decoration-none">Chat Bot</Link>
          </li>
          <li className="hover:text-indigo-600">
            <Link to="/about"  className="text-decoration-none">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#333',
    padding: '0.5rem 1rem',
    zIndex: 1000,
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  li: {
    marginRight: '1.5rem',
  },
  a: {
    color : 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '0.5rem',
    borderRadius: '4px',
  }
};
