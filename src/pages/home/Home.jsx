import React from "react";
import FirstDiv from "../../components/firstDiv/FirstDiv";
import FortDiv from "../../components/fortDiv/FortDiv";
import SecndDiv from "../../components/secdDiv/SecndDiv";
import ThidDiv from "../../components/thrdDiv/ThidDiv";
import "./home.scss";

const Home = () => {
  return (
    <div className="HomeWraper">
      <div className="Homecontainer">
        <div className="firstDiv">
          <FirstDiv />
        </div>
        <div className="secndDiv">
          <SecndDiv />
        </div>
        <div className="thirdDiv">
          <ThidDiv />
        </div>
        <div className="fortDiv">
          <FortDiv />
        </div>
      </div>
    </div>
  );
};

export default Home;
