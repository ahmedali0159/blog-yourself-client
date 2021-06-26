import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Sidebar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHome, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
  return (
    <div>
        <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className = {click ? "side-menu active" : "side"}>
        <li>
          <Link to="/dashboard" className="text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faPlus} /> <span>Add Post</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="text-white">
            <FontAwesomeIcon icon={faTrash} /> <span>Manage Post</span>
          </Link>
        </li>
      </ul>
      <div className="nav-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </div>
    </div>
  );
}
