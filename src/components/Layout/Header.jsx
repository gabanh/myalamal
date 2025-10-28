// src/components/Layout/Header.jsx
import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  padding: "8px 12px",
  textDecoration: "none",
  fontWeight: 600,
  borderRadius: 8,
  display: "inline-block",
  marginRight: 8,
  background: isActive ? "#eef2ff" : "transparent"
});

export default function Header() {
  return (
    <header style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 20px",
      borderBottom: "1px solid #eee",
      background: "#f7f9fc"
    }}>
      <div style={{ fontSize: 20, fontWeight: 700 }}>Alamal</div>
      <nav>
        <NavLink to="/" style={linkStyle} end>Home</NavLink>
        <NavLink to="/about" style={linkStyle}>About</NavLink>
        <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
      </nav>
    </header>
  );
}
