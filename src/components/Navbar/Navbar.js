import React from "react";
import "./navbar.css";
import reactIcon from "../../img/react-icon.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="title-sidebar">React Kanban</span>
      <img src={reactIcon} alt="plus" className="react" />
    </nav>
  );
}
