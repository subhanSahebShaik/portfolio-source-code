import React from "react";

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

const ImageViewer = (props) => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-footer"
          style={{ display: "flex", alignItems: "flex-start" }}
        >
          <button type="button" className="btn btn-danger" data-dismiss="modal">
            X
          </button>
          <div className="modal-dialog">
            <div className="modal-body">
              <img src={digiMarketing} id="image" alt="Click on button" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-footer"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <button type="button" className="btn btn-danger" data-dismiss="modal">
            X
          </button>
          <div className="modal-dialog" role="document">
            <div className="modal-body">
              <img src={hackOverFlow2k23} id="image" alt="Click on button" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal3"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-footer"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <button type="button" className="btn btn-danger" data-dismiss="modal">
            X
          </button>
          <div className="modal-dialog" role="document">
            <div className="modal-body">
              <img src={sql} id="image" alt="Click on button" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal4"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-footer"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <button type="button" className="btn btn-danger" data-dismiss="modal">
            X
          </button>
          <div className="modal-dialog" role="document">
            <div className="modal-body">
              <img src={senseTheNonSense} id="image" alt="Click on button" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal5"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-footer"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <button type="button" className="btn btn-danger" data-dismiss="modal">
            X
          </button>
          <div className="modal-dialog" role="document">
            <div className="modal-body">
              <img src={edystPython} id="image" alt="Click on button" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal6"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-footer"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <button type="button" className="btn btn-danger" data-dismiss="modal">
            X
          </button>
          <div className="modal-dialog" role="document">
            <div className="modal-body">
              <img src={java} id="image" alt="Click on button" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal7"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-footer"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <button type="button" className="btn btn-danger" data-dismiss="modal">
            X
          </button>
          <div className="modal-dialog" role="document">
            <div className="modal-body">
              <img src={aws} id="image" alt="Click on button" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal8"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-footer"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <button type="button" className="btn btn-danger" data-dismiss="modal">
            X
          </button>
          <div className="modal-dialog" role="document">
            <div className="modal-body">
              <img src={hackOverFlow2k22} id="image" alt="Click on button" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal9"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-footer"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <button type="button" className="btn btn-danger" data-dismiss="modal">
            X
          </button>
          <div className="modal-dialog" role="document">
            <div className="modal-body">
              <img src={problemSolving} id="image" alt="Click on button" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal10"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-footer"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <button type="button" className="btn btn-danger" data-dismiss="modal">
            X
          </button>
          <div className="modal-dialog" role="document">
            <div className="modal-body">
              <img src={django} id="image" alt="Click on button" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal11"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-footer"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <button type="button" className="btn btn-danger" data-dismiss="modal">
            X
          </button>
          <div className="modal-dialog" role="document">
            <div className="modal-body">
              <img src={quizexa} id="image" alt="Click on button" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal12"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-footer"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <button type="button" className="btn btn-danger" data-dismiss="modal">
            X
          </button>
          <div className="modal-dialog" role="document">
            <div className="modal-body">
              <img src={python} id="image" alt="Click on button" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal13"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-footer"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <button type="button" className="btn btn-danger" data-dismiss="modal">
            X
          </button>
          <div className="modal-dialog" role="document">
            <div className="modal-body">
              <img src={pythonML} id="image" alt="Click on button" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal14"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-footer"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <button type="button" className="btn btn-danger" data-dismiss="modal">
            X
          </button>
          <div className="modal-dialog" role="document">
            <div className="modal-body">
              <img src={js} id="image" alt="Click on button" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal15"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-footer"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <button type="button" className="btn btn-danger" data-dismiss="modal">
            X
          </button>
          <div className="modal-dialog" role="document">
            <div className="modal-body">
              <img
                src={legacyGeeks}
                id="image"
                alt="Click on button"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageViewer;
