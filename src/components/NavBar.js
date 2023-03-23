import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/navbar.css";
import { AiOutlineBars, AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import eCyclelogo from "../assets/img/eCycle-logo.png";
export default function NavBar() {
  const [Mobile, setMobile] = useState(false);
  const navigate = useNavigate();

  function handleClick(event) {
    navigate("/Login");
  }

  return (
    <nav className="navbar">
      <Link to="/">
        <img className="logo" src={eCyclelogo} />
      </Link>
      <ul
        className={Mobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setMobile(false)}
      >
        <Link to="/">
          <li className="nav-li">
            {" "}
            <AiFillHome /> Home
          </li>
        </Link>
        <Link to="/About">
          <li className="nav-li">
            {" "}
            <AiFillInfoCircle /> About
          </li>
        </Link>
        <Link to="/Services">
          <li className="nav-li">
            {" "}
            <BsFillBriefcaseFill /> Services
          </li>
        </Link>
        <Link to="/Contact">
          <li className="nav-li">
            {" "}
            <IoMdContact /> Contact
          </li>
        </Link>
        <button className="btn" type="buttom" onClick={handleClick}>
          Login
        </button>
        <Link to="/Signup">
          <li className="signup-li">Signup</li>
        </Link>
      </ul>
      <button
        className=" btn-mobile mobile-menu-icon"
        onClick={() => setMobile(!Mobile)}
      >
        {Mobile ? <ImCross /> : <AiOutlineBars />}
      </button>
    </nav>
  );
}
