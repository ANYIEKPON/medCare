import React from "react";
import whiteMaled from "../../img/whiteMaled.jpg";
import dentist from "../../img/dentist.ico";
import medical from "../../img/medical.ico";
import head from "../../img/head.ico";
import neuro from "../../img/neuro.ico";
import { CgArrowLongRight } from "react-icons/cg";
import "./fortdiv.scss";

const FortDiv = () => {
  return (
    <div className="fortDiv">
      <div className="fortWraper">
        <div className="leftDiv">
          <div className="img">
            <img src={whiteMaled} alt="imageDiv" />
          </div>
          <div className="sideSluh">
            <div className="icon">icon</div>
            <div className="div">
              <h4>Sign up now</h4>
              <p>for your regular check up!</p>
            </div>
          </div>
          <div className="sideSluhS">
            <div className="icon">icon</div>
            <div className="div">
              <h4>Dr Shaw cellene</h4>
            </div>
          </div>
        </div>
        <div className="rigtDiv">
          <h3>We offer a wide range of specialists for your health</h3>
          <ul>
            <li>
              <div className="div">
                <div className="ico">
                  <img src={dentist} alt="dentst" />
                </div>
                <span>Dentistry</span>
              </div>
            </li>
            <li>
              <div className="div">
                <div className="head">
                  <img src={head} alt="dentst" />
                </div>
                <span>Psychiatry</span>
              </div>
            </li>
            <li>
              <div className="div">
                <div className="neuro">
                  <img src={neuro} alt="dentst" />
                </div>
                <span>Neurology</span>
              </div>
            </li>
            <li>
              <div className="div">
                <div className="health">
                  <img src={medical} alt="dentst" />
                </div>
                <span>General Health</span>
              </div>
            </li>
          </ul>
          <span>
            Show more <CgArrowLongRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FortDiv;
