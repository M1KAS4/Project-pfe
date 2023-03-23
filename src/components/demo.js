import React from "react";
import "../assets/css/style.css"
import {Link} from "react-router-dom"
export default function Navbar () {
  return (
    <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href="" className="navbar-brand p-0">
          <h1 className="m-0">
            <i className="fa fa-search me-2"></i>SEO
            <span className="fs-5">Master</span>
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/About" className="nav-item nav-link">
              About
            </Link>
            <Link to="/Services" className="nav-item nav-link">
              Service
            </Link>
            <Link to="contact.html" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <butaton
            type="button"
            className="btn text-secondary ms-3"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <i className="fa fa-search"></i>
          </butaton>
          <Link
            to="/Login"
            className="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3"
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
}
