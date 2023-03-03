import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="navBar">
        <span
          className="navImage"
          onClick={() => document.getElementById("profile").scrollIntoView()}
        >
          <i className="fa-solid fa-house"></i>
          <p>Profile</p>
        </span>
        <span
          className="navImage"
          onClick={() => document.getElementById("edu").scrollIntoView()}
        >
          <i className="fa-solid fa-graduation-cap"></i>
          <p>Education</p>
        </span>
        <span
          className="navImage"
          onClick={() =>
            document.getElementById("certifications").scrollIntoView()
          }
        >
          <i className="fa-solid fa-award"></i>
          <p>Activities & Achievements</p>
        </span>
        <span
          className="navImage"
          onClick={() => document.getElementById("projects").scrollIntoView()}
        >
          <i className="fa-solid fa-code"></i>
          <p>Projects</p>
        </span>
        <span
          className="navImage"
          onClick={() => document.getElementById("connect").scrollIntoView()}
        >
          <i className="fa-regular fa-handshake"></i>
          <p>Connect</p>
        </span>
      </div>
    </>
  );
};

export default Header;
