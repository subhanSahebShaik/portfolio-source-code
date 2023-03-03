import React from "react";
import avatar from "../../images/Subhan Saheb Shaik.png";
import './Profile.css';

const Profile = () => {
  return (
    <>
    <div className="profileContainer">
      <div className="details">
        <p>
          <span id="hello">Hello, I'm </span><br />
          <span id="name">SUBHAN SAHEB SHAIK</span>
          <br />A COMPUTER SCIENCE STUDENT
        </p>
      </div>
      <div className="photo">
        <img src={avatar} alt="" />
      </div>
    </div>
    </>
  );
};

export default Profile;
