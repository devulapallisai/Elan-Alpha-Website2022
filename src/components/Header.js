import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/elannvision.png";
import styles from "../css/Header.module.css";
function Header() {
  const routes = [
    ["Schedule", "/"],
    ["Events", "/events"],
    ["Competitions", "/competitions"],
    ["CA portal", "http://ca.elan.org.in"],
    ["Team", "/team"],
    ["Social Cause", "/socialcause"],
    ["Sponsors", "/sponsors"],
    ["Contact us", "/contact"],
  ];
  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-b from-blue-100 to-transparent">
      <div className="flex justify-between py-4">
        <div className="imgsrc my-auto px-4">
          <Link to="/">
            <img src={Logo} className={styles.logo} alt="Logo" />
          </Link>
        </div>
        <div className="hidden flex-row-reverse justify-between my-auto text-white list-none w-5/6 md:flex px-5">
          {routes.reverse().map((route) => (
            <Link
              to={route[1]}
              className="cursor-pointer font-heading text-xl"
            >
              {route[0].toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
