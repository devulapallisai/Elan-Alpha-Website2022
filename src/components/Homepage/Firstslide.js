import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import RightTop from "../../images/Homepage/corners_copy.png";
import RightBot from "../../images/Homepage/corners_copyrightbot.png";
import LeftBot from "../../images/Homepage/corners_copyleftbot.png";
import LeftTop from "../../images/Homepage/corners_copyrighttop.png";
import styles from "../../css/Homepage1.module.css";
import Themeimg from "../../images/Homepage/Theme_final.png";
import Logo from "../../images/elannvision.png";
import Chakra from "../../images/Homepage/Halfchakra.png";
function Firstslide() {
  const [chakra, setchakra] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="w-screen h-screen"
      style={{
        background: "linear-gradient(180deg, #1E0735 76.65%, #943066 166.99%)",
      }}
    >
      {!chakra ? (
        <div className="first transition duration-800 ease-in-out">
          <div className="absolute bottom-0 w-full">
            <img
              src={Chakra}
              className={`mx-auto cursor-pointer z-50 ${styles.chakra}`}
              alt="Imae"
              onClick={() => setTimeout(() => {
                setchakra((prev) => !prev)
              }, 1000)}
            />
          </div>
          <div
            className={`absolute top-12 left-1 fade-right-down ${
              chakra ? "fade-left-up" : "fade-right-down"
            }`}
          >
            <img src={RightTop} alt="Imag" className={styles.img} />
          </div>
          <div
            className={`absolute bottom-1 left-1 ${
              chakra ? "fade-left-down" : "fade-right-up"
            }`}
          >
            <img src={LeftBot} alt="Imag" className={styles.img} />
          </div>
          <div
            className={`absolute top-12 right-1 ${
              chakra ? "fade-right-up" : "fade-left-down"
            }`}
          >
            <img src={LeftTop} alt="Imag" className={styles.img} />
          </div>
          <div
            className={`absolute bottom-1 right-1 ${
              chakra ? "fade-right-down" : "fade-left-up"
            }`}
          >
            <img src={RightBot} alt="Imag" className={styles.img} />
          </div>
          <div className="absolute">
            <div
              className={`${styles.backgr} flex justify-content-center`}
            >
              <img
                src={Logo}
                alt="Logo"
                className="my-auto"
                style={{ maxHeight: "60%",maxWidth:'60%', display: "flex", margin: "auto" }}
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            className={`absolute top-0 ${styles.zorae} flex justify-center h-screen`}
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img
              src={Themeimg}
              alt="Theme Imag"
              className={`${styles.themeimg}`}
            />
          </div>
          <div className="absolute bottom-0 w-full">
            <img
              src={Chakra}
              className={`mx-auto cursor-pointer z-50 ${styles.chakra}`}
              alt="Imag"
            />
          </div>
        </>
      )}
      <div className={`hidden md:block ${chakra ? styles.active1 : styles.nonactive1}`}>
        <div
          className={`${chakra ? styles.active2 : styles.nonactive2}`}
          onClick={() => {
            setTimeout(() => {
              setTimeout(() => {
                setchakra(false)
              }, 1000);
            }, 1000);
          }}
        ></div>
      </div>
    </div>
  );
}

export default Firstslide;
