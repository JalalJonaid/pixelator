import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

export default function Nav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top border-bottom">
      <button className="navbar-toggler bg-light" type="button" onClick={toggleSidebar} style={{marginLeft:"20px"}}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <Link to="/" className="navbar-brand">
        <img
        className={`youtube-logo ${sidebarOpen ? "d-none" : ""}`}
          src="https://imgtr.ee/images/2023/09/12/2d64344c345cfddb766e7253a9827d33.png"
          alt="Pixel-ator"
          height="40"
          style={{marginLeft:"20px"}}
        />
      </Link>

      <div className={`collapse navbar-collapse ${sidebarOpen ? "show" : ""}`}
        id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/collections">Collections</Link>
          </li>
        </ul>
        <div className="ml-3">
          <i className="fas fa-video fa-lg mr-2"></i>
          <i className="fas fa-th fa-lg mr-2"></i>
          <i className="fas fa-bell fa-lg mr-2"></i>
          <i className="fas fa-user-circle fa-lg"></i>
        </div>
      </div>
    </nav>
  );
}
