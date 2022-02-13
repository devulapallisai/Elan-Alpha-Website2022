import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/elannvision_wide.png";
import styles from "../../css/Header.module.css";
import style from "../../css/Hamburger.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Header({ path,block }) {
  const [hamburger, sethamburger] = useState(false);
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
  const [color, setcolor] = useState('rgb(21,5,37)');
  const colors = {
    "team": "#350F3E",
    "": "rgb(21,5,37)",
    "events": "#80295D",
    "sponsors": "#CD846C",
    "competitions": block==='culti'?'#1E0735':'#943066',
    "contact": '#F5C470',
    "socialcause": '#A64C68',
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setcolor(colors[path])
  }, []);
  return (
    <>
      <div className={`bg-gradient-to-b from-${color} to-transparent fixed top-0 left-0 right-0 z-50`} style={{ background: `linear-gradient(to bottom,${colors[`${path}`]} 45%,transparent)` }}>
        <div className="hidden lg:flex justify-between">
          <div className={`h-auto`}>
            <div className="imgsrc pl-6 inline-block py-2">
              <Link to="/">
                <img src={Logo} className={`${styles.logo}`} alt="Logo" />
              </Link>
            </div>
          </div>
          <span
            className={`${styles.stylit}`}
          ></span>
          {/* <div className="hidden lg:w-0 lg:flex bg-gradient-to-b from-blue-100 to-transparent"></div> */}
          <div className={`hidden flex-row-reverse justify-between list-none lg:w-3/4 w-5/6 lg:flex pr-5`}>
            {routes.reverse().map((route) => (
              <Link
                to={route[1]}
                className={`cursor-pointer font-heading text-headerwhite my-auto ${styles.hoverinbac}`}
              >
                {route[0].toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
        {/* Mobile part begins now */}
        <div className="w-full lg:hidden">
          <div className={`h-auto`}>
            <div className="imgsrc pl-4 inline-block py-2">
              <Link to="/">
                <img src={Logo} className={`${styles.logo}`} alt="Logo" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse lg:hidden">
          <div
            className={
              hamburger
                ? `${style.btn1} ${style.active} z-50 fixed top-0 right-0`
                : `${style.btn1} ${style.notActive} z-50 fixed top-0 right-0`
            }
            onClick={() => sethamburger((prev) => !prev)}
          >
            <span className={style.span1}></span>
            <span className={style.span1}></span>
            <span className={style.span1}></span>
          </div>
        </div>
        {hamburger ? (
          <div
            className={`fixed right-0 top-0 flex flex-col text-white lg:hidden z-2 content-end m-2 pt-8  ${style.animateit}`}
            style={{
              borderBottomLeftRadius: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              border: "2px solid rgb(166,76,104)",
              background: "rgb(166,76,104)",
            }}
            data-aos="fade-left"
            data-aos-duration="400"
          >
            <div className="flex flex-col list-none mr-3 mt-2 ml-16 w-200 mb-3">
              {routes.reverse().map((route) => (
                <Link
                  to={route[1]}
                  className="cursor-pointer font-heading font-light tracking-wider my-auto z-0 p-2 text-xs flex flex-row-reverse"
                >
                  {route[0].toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Header;
