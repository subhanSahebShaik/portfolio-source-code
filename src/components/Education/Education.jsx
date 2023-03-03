import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="eduContainer">
      <div className="degree">
        <p>
          I'm pursuing <span> B.Tech</span> in the department of
          <span>Computer Science and Engineering</span>
          at <span> Sri Vasavi Engineering College</span>, Tadepalligudem
        </p> <br /><br />
      </div>
      <div className="inter">
        <p>
          Completed <span> +2</span> qualification in the stream of
          <span> MPC</span> at <span> Sri Chaitanya Boys Jr. College</span>,
          Vijayawada
        </p> <br /><br />
      </div>
      <div className="ssc">
        <p>
          <span>Secondary Schooling</span> at <span>MSRZP High school</span>,
          Ananthapalli
        </p>
      </div>
    </div>
  );
};

export default Education;
