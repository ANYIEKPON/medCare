import React from "react";
import First from "../../components/clientComponent/first/First";
import { PiStethoscopeBold, PiUserSoundBold } from "react-icons/pi";
import { CiForkAndKnife } from "react-icons/ci";
import { TbDental } from "react-icons/tb";
import {
  MdOutlineShareLocation,
  MdOutlineMedication,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { GiMapleLeaf } from "react-icons/gi";
import { FaTablets, FaVirusCovid, FaConfluence } from "react-icons/fa6";
import { FaLungs } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

import "./clientzone.scss";

const ClientZone = () => {
  return (
    <div className="clienZoneContainer">
      <div className="clientZoneWrapper">
        <div className="firstDiv">
          <First />
        </div>
        <div className="sccnd">
          <div className="medicatn">
            <h3>Your medications</h3>
            <div className="drugs">
              <div className="drug">
                <div className="drugIcon">
                  <MdOutlineMedication />
                </div>
                <span> Paracethamol</span>
              </div>
              <div className="drug">
                <div className="drugIcon">
                  <MdOutlineMedication />
                </div>
                <span> Ibuprofen</span>
              </div>
              <div className="drug">
                <div className="drugIcon">
                  <GiMapleLeaf />
                </div>
                <span> Green Tea Extract</span>
              </div>
              <div className="drug">
                <div className="drugIcon">
                  <FaTablets />
                </div>
                <span> Vitamin C</span>
              </div>
              <div className="drug">
                <div className="drugIcon">
                  <MdOutlineMedication />
                </div>
                <span> Tylenol</span>
              </div>
              <div className="drug">
                <div className="drugIcon">
                  <FaTablets />
                </div>
                <span> Vitamin D</span>
              </div>
            </div>
          </div>
          <div className="scnDiv">
            <h3>Upcoming appointments</h3>
            <div className="check">
              <div className="icn">
                <PiStethoscopeBold />
                <span>General check-up</span>
              </div>
              <h5>Aug 12</h5>
            </div>
            <div className="check">
              <div className="icn">
                <CiForkAndKnife className="iconn" />
                <span>Nutritionist check-up</span>
              </div>
              <h5>Aug 28</h5>
            </div>
          </div>
          <div className="thirdDiv">
            <h3>Recently booked appointments</h3>
            <div className="check">
              <div className="icn">
                <TbDental />
                <span>Dentist</span>
              </div>
              <h5>Aug 13</h5>
            </div>
            <div className="check apoint">
              <div className="icn">
                <MdOutlineShareLocation className="iconn" />
                <span>Nutritionist check-up</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thrrrd">
          <div className="diagnosis">
            <h3>Your diagnoses</h3>
            <div className="eachDiag">
              <div className="diagnose">
                <div className="all">
                  <div className="diagIcon">
                    <FaLungs />
                  </div>
                  <div className="deseDiv">
                    <h3>Pneunomia</h3>
                    <span>2 weeks ago</span>
                  </div>
                </div>
                <div className="arowIcon">
                  <MdOutlineKeyboardArrowRight />
                </div>
              </div>
              <div className="diagnose">
                <div className="all">
                  <div className="diagIcon">
                    <PiUserSoundBold />
                  </div>
                  <div className="deseDiv">
                    <h3>Hay fever</h3>
                    <span>3 weeks ago</span>
                  </div>
                </div>
                <div className="arowIcon">
                  <MdOutlineKeyboardArrowRight />
                </div>
              </div>
              <div className="diagnose">
                <div className="all">
                  <div className="diagIcon">
                    <FaVirusCovid />
                  </div>
                  <div className="deseDiv">
                    <h3>Covid-19</h3>
                    <span>2 years ago</span>
                  </div>
                </div>
                <div className="arowIcon">
                  <MdOutlineKeyboardArrowRight />
                </div>
              </div>
              <div className="diagnose">
                <div className="all">
                  <div className="diagIcon">
                    <FaConfluence />
                  </div>
                  <div className="deseDiv">
                    <h3>Seasonal Flu</h3>
                    <span>3 years ago</span>
                  </div>
                </div>
                <div className="arowIcon">
                  <MdOutlineKeyboardArrowRight />
                </div>
              </div>
            </div>
          </div>
          <div className="doctors">
            <h3>Your doctors</h3>
            <div className="eachDiag">
              <div className="diagnose">
                <div className="all">
                  <div className="docImg">
                    <FaLungs />
                  </div>
                  <div className="deseDiv">
                    <h3>John Raily</h3>
                    <span>Dentist</span>
                  </div>
                </div>
                <div className="dotIcon">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="diagnose">
                <div className="all">
                  <div className="docImg">
                    <FaLungs />
                  </div>
                  <div className="deseDiv">
                    <h3>John Raily</h3>
                    <span>Dentist</span>
                  </div>
                </div>
                <div className="dotIcon">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="diagnose">
                <div className="all">
                  <div className="docImg">
                    <FaLungs />
                  </div>
                  <div className="deseDiv">
                    <h3>John Raily</h3>
                    <span>Dentist</span>
                  </div>
                </div>
                <div className="dotIcon">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="diagnose">
                <div className="all">
                  <div className="docImg">
                    <FaLungs />
                  </div>
                  <div className="deseDiv">
                    <h3>John Raily</h3>
                    <span>Dentist</span>
                  </div>
                </div>
                <div className="dotIcon">
                  <BsThreeDotsVertical />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientZone;
