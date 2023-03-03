import React from "react";
import Certificates from "../Certificates/Certificates";
import Connect from "../Connect/Connect";
import Education from "../Education/Education";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";
import Thanku from "../Thanku/Thanku";

const Content = (props) => {
  return (
    <>
      <div id="profile">
        <Profile />
      </div>
      <div id="edu">
        <Education />
      </div>
      <div id="certifications">
        <Certificates />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="connect">
        <Connect />
      </div>
      <div id="thank-u">
        <Thanku />
      </div>
    </>
  );
};

export default Content;
