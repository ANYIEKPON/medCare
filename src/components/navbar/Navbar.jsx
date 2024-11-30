import React, { useEffect, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdContact, IoMdClose, IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showSide, setShowSide] = useState(true);

  const windowWidth = window.screen.width;
  console.log(windowWidth);

  const openMenu = () => {
    setMenu((prev) => !prev);
  };

  const responsive = () => {
    if (windowWidth > 981) {
      setShowSide(false);
    } else {
      setShowSide(true);
    }
  };

  useEffect(() => {
    window.addEventListener("load", responsive);
    window.addEventListener("resize", responsive);
  }, []);

  useEffect(() => {
    if (windowWidth > 981) {
      setShowSide(false);
    } else {
      setShowSide(true);
    }
  }, [windowWidth]);

  return (
    <div className="navbar">
      <div className="container">
        <div className="leftSide">
          <Link to="/" className="link">
            <p>MedSave</p>
          </Link>
        </div>
        <div className="rightSide">
          <div className="menuIcon" onClick={openMenu}>
            <RiMenu3Fill size={25} />
          </div>

          <div className="menu">
            <ul>
              <Link to="/" className="link">
                <li>Home</li>
              </Link>
              <li>Find a Doctor</li>
              <li>About us</li>
            </ul>
            <Link to="/clients" className="link">
              <button>Clients</button>
            </Link>
          </div>

          <div className={menu ? "navMenu" : "noMenu"}>
            <div className="subMenu">
              <ul>
                <Link onClick={openMenu} to="/" className="link">
                  <li>Home</li>
                </Link>
                <li onClick={openMenu}>Find a Doctor</li>
                <li onClick={openMenu}>About us</li>
              </ul>
              <button onClick={openMenu}>
                <Link to="/clients" className="link">
                  Clients
                </Link>
              </button>
            </div>
            <div onClick={openMenu} className="close">
              <IoMdClose />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
