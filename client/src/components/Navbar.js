import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <h2 className="text-xl">Steelo Image Generator</h2>
          <h3 className="text-center text-xs mt-1">Powered by OPEN AI</h3>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="https://beta.openai.com/docs">Open AI Docs</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
