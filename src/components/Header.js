import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/elannvision.png";
import styles from "../css/Header.module.css";
import style from "../css/Hamburger.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Header() {
  const [hamburger, sethamburger] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
    <>
      <div className="fixed top-0 left-0 right-0 z-100">
        <div className="hidden lg:flex justify-between">
          <div className="bg-gradient-to-b from-blue-100 to-transparent h-auto">
            <div className="imgsrc pl-4 inline-block py-2">
              <Link to="/">
                <img src={Logo} className={`${styles.logo}`} alt="Logo" />
              </Link>
            </div>
          </div>
          <span
            className={`bg-gradient-to-b from-blue-100 to-transparent ${styles.stylit}`}
          ></span>
          {/* <div className="hidden lg:w-0 lg:flex bg-gradient-to-b from-blue-100 to-transparent"></div> */}
          <div className="hidden flex-row-reverse justify-between text-white list-none lg:w-5/6 xl:w-3/4 lg:flex pr-5 bg-gradient-to-b from-blue-100 to-transparent">
            {routes.reverse().map((route) => (
              <Link
                to={route[1]}
                className="cursor-pointer font-heading my-auto"
              >
                {route[0].toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
        {/* Mobile part begins now */}
        <div className="w-full">
          <div className="bg-gradient-to-b from-blue-100 to-transparent h-auto">
            <div className="imgsrc pl-4 inline-block py-4">
              <Link to="/">
                <img src={Logo} className={`${styles.logo}`} alt="Logo" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`fixed right-0 top-0 flex flex-col top-0 text-white right-0 lg:hidden z-2 content-end m-2  ${style.animateit}`}
          style={{
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            border: hamburger ? "2px solid yellow" : "none",
            background: hamburger ? "yellow" : "none",
          }} 
        >
          <div className="flex flex-row-reverse">
            <div
              className={
                hamburger
                  ? `${style.btn1} ${style.active} z-50`
                  : `${style.btn1} ${style.notActive} z-50`
              }
              onClick={() => sethamburger((prev) => !prev)}
            >
              <span className={style.span1}></span>
              <span className={style.span1}></span>
              <span className={style.span1}></span>
            </div>
          </div>
          {hamburger ? (
            <div className="flex flex-col list-none mr-5 ml-2 w-200 mb-2" data-aos="fade-left" data-aos-duration="400">
              {routes.reverse().map((route) => (
                <Link
                  to={route[1]}
                  className="cursor-pointer font-heading my-auto inline-block z-0 p-0.5"
                >
                  {route[0].toUpperCase()}
                </Link>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
