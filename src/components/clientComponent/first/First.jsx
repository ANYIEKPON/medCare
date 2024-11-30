import React, { useState } from "react";
import patient from "../../../img/doc_img.jpg";
import "./first.scss";

const First = () => {
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="div_first_container">
      <div className="div_first_wraper">
        <div className="immg">
          <img src={patient} alt="patient" />
        </div>
        <h2>John Stone</h2>
        <span>30 years, male </span>
        <div className="infoDiv">
          <h3>General info</h3>
          <div className="dateDiv">
            <p>Date of birth</p>
            <span>13/08/2024</span>
          </div>
          <div className="dateDiv">
            <p>Date of birth</p>
            <span>13/08/2024</span>
          </div>
        </div>
        <div className={show ? "disorderDiv" : "notDisplayed"}>
          <h3>Disorders</h3>
          <div className="disDiv">
            <span className="arythmia">Arythmia</span>
            <span className="anxiety">Anxiety</span>
            <span className="presure">High blood pressure</span>
          </div>
        </div>
        <div className={show ? "lastChecked" : "notDisplayed"}>
          <h3>Last check up</h3>
          <div className="chcked">
            <h4>12/09/2024 !</h4>
            <span>
              It has been over year already since your last medical check-up you
              should book an appointment with your dentist
            </span>
          </div>
        </div>
        <span className="showmore" onClick={handleShow}>
          {show ? <p>Show less...</p> : <p>Show more...</p>}
        </span>
      </div>
    </div>
  );
};

export default First;
