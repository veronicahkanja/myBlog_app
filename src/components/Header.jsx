import React from 'react';
import { Link } from "react-router-dom";

function Header() {
   const headerStyle = {
    padding: "15px 30px",
    backgroundColor: "#222",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const navStyle = {
    display: "flex",
    gap: "20px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  };

  return (
    <header style={headerStyle}>
      <h2>My Blog</h2>

      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/new" style={linkStyle}>Create Post</Link>
      </nav>
    </header>
  )
}

export default Header
