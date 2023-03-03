import React from "react";
import "./Certificates.css";

import aws from "../../images/AWS-Subhan Saheb Shaik-Brain O Vision.png";
import edystPython from "../../images/Basics of Python-Subhan Saheb Shaik-Edyst.png";
import django from "../../images/Django-Subhan Saheb Shaik-APSSDC.png";
import hackOverFlow2k22 from "../../images/HackOverFlow2k22-Subhan Saheb Shaik-SVEC.png";
import hackOverFlow2k23 from "../../images/HackOverFlow2k23-Subhan Saheb Shaik-SVEC.png";
import java from "../../images/Java(Basic)-Subhan Saheb Shaik-HackerRank.png";
import js from "../../images/JS & React-Subhan Saheb Shaik-ShapeAI.png";
import legacyGeeks from "../../images/Legacy Geeks-Subhan Saheb Shaik-JNTUK.jpg";
import problemSolving from "../../images/Problem Solving(Basic)-Subhan Saheb Shaik-HackeRank.png";
import pythonML from "../../images/Python & ML-Subhan Saheb Shaik-ShapeAI.png";
import python from "../../images/Python(Basic)-Subhan Saheb Shaik-HackerRank.png";
import quizexa from "../../images/Quizexa-Subhan Saheb Shaik-JNTUK.png";
import senseTheNonSense from "../../images/Sense the NonSense-Subhan Saheb Shaik-SVEC.png";
import sql from "../../images/SQL(Basic)-Subhan Saheb Shaik-HackerRank.png";
import digiMarketing from "../../images/The Fundamentas of Digital Marketing-Subhan Saheb Shaik-Google.png";

import ImageViewer from "../ImageViewer/ImageViewer";

const Certificates = () => {
  return (
    <>
      <ImageViewer />
      <div className="certificatesContainer">
        <div className="images">
          <div>
            <img
              src={digiMarketing}
              alt="logo1"
              data-toggle="modal"
              data-target="#exampleModal1"
            />
            <img
              src={hackOverFlow2k23}
              alt="logo1"
              data-toggle="modal"
              data-target="#exampleModal2"
            />
            <img
              src={sql}
              alt="logo1"
              data-toggle="modal"
              data-target="#exampleModal3"
            />
            <img
              src={senseTheNonSense}
              alt="logo1"
              data-toggle="modal"
              data-target="#exampleModal4"
            />
            <img
              src={edystPython}
              alt="logo1"
              data-toggle="modal"
              data-target="#exampleModal5"
            />
          </div>
          <div>
            <img
              src={java}
              alt="logo1"
              data-toggle="modal"
              data-target="#exampleModal6"
            />
            <img
              src={aws}
              alt="logo1"
              data-toggle="modal"
              data-target="#exampleModal7"
            />
            <img
              src={hackOverFlow2k22}
              alt="logo1"
              data-toggle="modal"
              data-target="#exampleModal8"
            />
            <img
              src={problemSolving}
              alt="logo1"
              data-toggle="modal"
              data-target="#exampleModal9"
            />
            <img
              src={django}
              alt="logo1"
              data-toggle="modal"
              data-target="#exampleModal10"
            />
          </div>
          <div>
            <img
              src={quizexa}
              alt="logo1"
              data-toggle="modal"
              data-target="#exampleModal11"
            />
            <img
              src={python}
              alt="logo1"
              data-toggle="modal"
              data-target="#exampleModal12"
            />
            <img
              src={pythonML}
              alt="logo1"
              data-toggle="modal"
              data-target="#exampleModal13"
            />
            <img
              src={js}
              alt="logo1"
              data-toggle="modal"
              data-target="#exampleModal14"
            />
            <img
              src={legacyGeeks}
              alt="logo1"
              data-toggle="modal"
              data-target="#exampleModal15"
            />
          </div>
        </div>
        <div className="text">
          <p>I've certified in</p>
          <ul>
            <li>
              <b>The Fundamentals of Digital Marketing</b> by <b>Google</b> on
              <b>28-Jan-2023</b>
            </li>
            <li>
              <b>Hack Over Flow 2k23</b> by
              <b>Sri Vasavi Engineering College</b> on <b>7-Jan-2023</b>
            </li>
            <li>
              <b>SQL(Basic)</b> by <b>HackerRank</b> on <b>01-Jun-2022</b>
            </li>
            <li>
              <b>Sense The Non Sense</b> by
              <b>Sri Vasavi Engineering College</b> on <b>15-Sep-2022</b>
            </li>
            <li>
              <b>Basics of Python</b> by <b>Edyst</b> on <b>15-Aug-2022</b>
            </li>
            <li>
              <b>Java(Basic)</b> by <b>HackerRank</b> on <b>02-Jul-2022</b>
            </li>
            <li>
              <b>Amazon Web Services Cloud Computing</b> by
              <b>Brain O Vision</b> on <b>25-Jun-2022</b>
            </li>
            <li>
              <b>Hack Over Flow 2k22</b> by <b>Sri Vasavi Enginering College</b>
              on <b>30-Apr-2022</b>
            </li>
            <li>
              <b>Problem Solving(Basic)</b> by <b>HackerRank</b> on
              <b>01-Apr-2022</b>
            </li>
            <li>
              <b>Web Development Using Django</b> by <b>APSSDC</b> on
              <b>22-Jan-2022</b>
            </li>
            <li>
              <b>Quizexa</b> by <b>JNTUK Vizianagaram</b> on <b>19-Dec-2021</b>
            </li>
            <li>
              <b>Python(Basic)</b> by <b>HackerRank</b> on <b>19-Sep-2021</b>
            </li>
            <li>
              <b>Python and Machine Learning Bootcamp</b> by <b>Shape AI</b> on
              <b> 06-Jun-2021</b>
            </li>
            <li>
              <b>JS and React Bootcamp</b> by <b>Shape AI</b> on
              <b> 06-Jun-2021</b>
            </li>
            <li>
              <b>Legacy Geeks</b> by <b>JNTUK Vizianagaram</b> on
              <b>30-May-2021</b>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Certificates;
