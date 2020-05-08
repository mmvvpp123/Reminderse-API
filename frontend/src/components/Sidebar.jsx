import React from "react";
import { push as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { FaHome, FaPlusCircle, FaThList } from "react-icons/fa";

export default (props) => {
  return (
    <>
      <div className="sidebar">
        <div className="intro">
          <h3 className="sidebar-title">Reminderse</h3>
          <p>Hello mmvvpp123!</p>
        </div>
        <Link className="menu-item" to="/">
          <FaHome /> <span>Home</span>
        </Link>
        <Link className="menu-item" to="/entries">
          <FaThList /> <span>Entries</span>
        </Link>
        <Link className="menu-item" to="/add">
          <FaPlusCircle /> <span>Add Entry</span>
        </Link>
      </div>
    </>
  );
};
