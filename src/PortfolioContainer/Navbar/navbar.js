import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-dark" to="/">
            Portfolio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link active text-dark"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-secondary" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-secondary" to="/resume">
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-secondary" to="/interest">
                  Interest
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-secondary" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="icons mx-4 pl-2">
              <a href="#">
                <i className="fab fa-twitter p-1"></i>
              </a>
              <a href="">
                <i className="fab fa-facebook p-1 facebook"></i>
              </a>
              <a href="">
                <i className="fab fa-instagram p-1 insta"></i>
              </a>
              <a href="">
                <i className="fab fa-linkedin facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
