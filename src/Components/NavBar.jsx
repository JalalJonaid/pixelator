import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function Nav() {
  return (
    <nav class="menu-container">
      <a href="#home" class="menu-logo">
        <img
          src="https://imgtr.ee/images/2023/09/12/2d64344c345cfddb766e7253a9827d33.png"
          alt="Pixel-ator"
        />
      </a>

      <div class="menu">
        <ul>
          <li>
            <Link to="/">
            <a href="#home">Home</a>
            </Link>
          </li>
          <li>
            <Link to="/About">
            <a href="#about">About</a>
            </Link>
          </li>
        </ul>
        <ul></ul>
      </div>
    </nav>
  );
}
