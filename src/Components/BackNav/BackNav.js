import React from "react";
import { Link } from "react-router-dom";
import "./BackNav.css";
import BackNavArrow from "./BackNav.svg";

const BackNav = ({ route }) => {
  return (
    <Link to={route.url} className="BackNav-link">
      <img src={BackNavArrow} alt="Back arrow" className="BackNav-arrow" />

      <span className="BackNav-text">{route.name}</span>
    </Link>
  );
};

export default BackNav;
