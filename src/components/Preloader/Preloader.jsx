import React from "react";
import "./preloader.css";
import logo from "../../images/OBBC_LOGO.svg";
function Preloader() {
  return (
    <div className="loading-icon-div">
      <img src={logo} alt="loading" className="loading-icon animate-flicker" />
    </div>
  );
}

export default Preloader;
