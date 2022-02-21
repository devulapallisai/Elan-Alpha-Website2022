import React, { useEffect, useRef, useState } from "react";
import Chakra from "../../images/Homepage/chakra.png";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "../../css/Homepage2.module.css";
import Lanterntop from "../../images/Lantern1.png";
import Lant from "../../images/Homepage/Lanterntop.png";
import Skyline from "../../images/Homepage/Skyline3copy.png";
import BackgroundI from "../../images/Homepage/window_webcopy.png";
import style from "../../css/Homepage1.module.css";
function Secondslide({ initialVal, scrollDirection }) {
  const textref = useRef();
  const { width, height } = useWindowDimensions();
  return (
    <>
    {/* Text Part */}
      <div
        className={`flex justify-center`}
        style={{
          opacity: initialVal,
          display: `${initialVal === 0 ? "hidden" : "flex"}`,
        }}
      >
        <div
          className={`fixed top-44 2xl:top-84 text-sm flex justify-center ${
            styles.texthere
          }`}
          ref={textref}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="flex flex-col">
            <div className="font-heading text-3xl 2xl:text-5xl text-center pb-2">
              OUR THEME
            </div>
            <div className="text-center font-text">
              This year Elan and ηvision celebrates childhood - the most
              important phase, capable of shaping and moulding lives. While most
              of us are in our late teens or early twenties, we help you to
              relax a bit to take a jog down your memory lane. Fables of a
              Moppet, our theme will help you to rejoice those times when we hid
              Roald Dahl's books in textbooks, when a popsicle could make us
              happy and when stress was just a physics term.
            </div>
          </div>
        </div>
      </div>
      {/* Window Part */}
      <div
        className={`${styles.Slide} relative h-screen w-screen hidden lg:block z-0`}
      >
        <img
          src={BackgroundI}
          className={`${styles.imagebackgr}`}
          style={{ zIndex: 46 }}
          alt="Imag"
          width="100vw"
          height="100vh"
        />
        <div className="absolute top-14 right-24">
          <img src={Lanterntop} alt="Imag" className={styles.img} />
        </div>
        <div className="absolute top-0 right-40 2xl:right-48">
          <img src={Lanterntop} alt="Imag" className={styles.img1} />
        </div>
        <div className="absolute left-16 top-40">
          <img src={Lant} alt="Imag" className={styles.img2} />
        </div>
        <div className="absolute left-28 top-16 2xl:left-32">
          <img src={Lant} alt="Imag" className={styles.img3} />
        </div>
        <div className="absolute left-48 top-28 2xl:left-52">
          <img src={Lant} alt="Imag" className={styles.img4} />
        </div>
        <div className={`${styles.zInde} w-screen absolute bottom-0`}>
          <img src={Skyline} alt="Imag" className={styles.zoomimg} />
        </div>
      </div>
      <div
        className="flex justify-center"
        style={{
          height: "auto",
          zIndex: scrollDirection === "down" ? 11 : 11,
          opacity: 1,
        }}
      >
        <img
          src={Chakra}
          alt="chakra"
          style={{
            zIndex: scrollDirection === "down" ? 11 : 11,
            marginLeft: initialVal <= 1.4 ? initialVal *40 : 0,
            bottom: initialVal >= 0.01 ? 0 : -70,
          }}
          className={`fixed ${style.chakra} ${
            scrollDirection === "down"
              ? initialVal <= 0.97
                ? `${styles.rotateclock}`
                : ""
              : initialVal >= 0.01
              ? `${styles.rotateanti}`
              : ""
          }`}
        />
      </div>
    </>
  );
}

export default Secondslide;
