import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top border-bottom">
      <div className="container-fluid" >
        <div className="d-flex align-items-center">
          <Link to="/" className="menu-logo">
            <img
              src="https://imgtr.ee/images/2023/09/12/2d64344c345cfddb766e7253a9827d33.png"
              alt="Pixel-ator"
            />
          </Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/collections">
                Collections
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
