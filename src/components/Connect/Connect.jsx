import React from "react";
import "./Connect.css";

const Connect = () => {
  return (
    <>
      <div
        className="connectContainer"
        style={{ fontFamily: "Playfair Display SC" }}
      >
        <p>My networks through</p>
        <br />
        <br />
        <br />
        <div className="icons">
          <a href="tel:+919848693918">
            <i className="fa-solid fa-phone"></i>
          </a>
          <a href="mailto:shaiksubhansaheb609@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/subhan-saheb-shaik-185721240/" target="blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/subhanSahebShaik" target="blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Connect;
