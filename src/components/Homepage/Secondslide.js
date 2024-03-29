import React, { useEffect, useState } from "react";
// import Chakra from "../../images/Homepage/chakra.png";
import styles from "../../css/Homepage2.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
// import Lanterntop from "../../images/Lantern1.png";
// import Lant from "../../images/Homepage/Lanterntop.png";
// import Skyline from "../../images/Homepage/Skyline3copy.png";
// import BackgroundI from "../../images/Homepage/window_webcopy.png";
import style from "../../css/Homepage1.module.css";
import ThirdSlide from "./ThirdSlide";
import { useNavigate } from "react-router-dom";
import Thirdslidemobile from "./Thirdslidemobile";
import Fourthslidemobile from "./Fourthslidemobile";
import { gsap } from "gsap";
function Secondslide({ initialVal, scrollDirection, secondslideref }) {
  const navigate = useNavigate();
  const [thirdslide, setthirdslide] = useState(false);
  const scrollintoviewthird = (event) => {
    // navigate("/third");
    setthirdslide(true);
  };
  const setslidefirst = (event) => {
    document
      .getElementById("firstslide")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {thirdslide ? (
        <ThirdSlide thirdslide={thirdslide} setthirdslide={setthirdslide} />
      ) : (
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
              data-aos="fade-down"
              className={`${initialVal >= 1.002 ? "absolute" : "fixed"} ${
                initialVal >= 1.002
                  ? "top-[128vh] sm:top-[135vh] md:top-[125vh] 2xl:top-[184vh]"
                  : "top-[28vh] sm:top-[35vh] md:top-[25vh] 2xl:top-[35vh]"
              } text-sm flex justify-center ${styles.texthere}`}
              data-aos-duration="1000"
            >
              <div className="flex flex-col text-white">
                <div className="  font-heading text-3xl 2xl:text-5xl text-center pb-2">
                  OUR THEME
                </div>
                <div className="text-justify font-text">
                  <p className="m-1">
                    They ask me, <br />
                    "How are you so sure you'll enjoy tomorrow?" <br />
                    <p className="text-center font-bold text-[18px]">
                      "Sunrise"
                    </p>
                  </p>

                  <p className="m-1">
                    We present you this year's theme:{" "}
                    <p className="text-center font-bold text-[18px]">
                      Zora-e-Sukoon
                    </p>
                    Zora-e-Sukoon translates to the peaceful feeling we get at
                    the rise of dawn. It depicts the joyful feeling we get after
                    overcoming adversity in our lives. No matter how dark your
                    life may seem, Elan & ηVision will be your break of dawn,
                    your Sunrise, your Sukoon.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Window Part */}
          <div className={`absolute top-[100vh] w-screen-h-screen -z-[111]`}>
            <div
              className={`${styles.Slide} h-screen w-screen -z-[11111]`}
            ></div>
          </div>
          <div className="block lg:hidden absolute top-[100vh] w-screen h-screen z-[10]">
            <img
              src="https://ik.imagekit.io/lc4zhdkrtsr/Home/window_with_lantern_mobile_copy_pxHFwAUTW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647603531548"
              alt="Imag"
              style={{ width: "100vw", height: "100vh" }}
            />
          </div>
          <div className="block lg:hidden relative top-[100vh]">
            <div className="absolute bottom-0">
              <img
                src="https://ik.imagekit.io/lc4zhdkrtsr/Home/Skyline3copy_65vQJqeDS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647603572078"
                alt="Imag"
                style={{ width: "100vw", minHeight: 140 }}
              />
            </div>
          </div>
          <div
            id="secondslide"
            ref={secondslideref}
            className={`h-screen w-screen hidden lg:block -z-[1] overflow-hidden`}
          >
            <img
              src="https://ik.imagekit.io/lc4zhdkrtsr/Home/window_webcopy_Yw7QaG-ZU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647603652858"
              className={`backgr ${styles.imagebackgr}`}
              style={{ zIndex: 46 }}
              alt="Imag"
              width="100vw"
              height="100vh"
            />

            <div className="absolute top-[100vh] w-screen h-screen">
              <div className="absolute top-14 right-24">
                <img
                  src="https://ik.imagekit.io/lc4zhdkrtsr/Home/Lantern1_sHrLhheomo_a3t_UG3fE.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647604602891"
                  alt="Imag"
                  className={styles.img}
                />
              </div>
              <div className="absolute top-0 right-40 2xl:right-48">
                <img
                  src="https://ik.imagekit.io/lc4zhdkrtsr/Home/Lantern1_sHrLhheomo_a3t_UG3fE.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647604602891"
                  alt="Imag"
                  className={styles.img1}
                />
              </div>
              <div className="absolute w-[50px] h-full right-2 flex items-center">
                <div className="h-[100px] w-[50px]">
                  <div className="flex justify-center align-center items-center">
                    <img
                      src="https://ik.imagekit.io/lc4zhdkrtsr/Home/arrow_up_6vVwCQvCd_EqgpmqvKn.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647605097198"
                      alt="Ima"
                      width={40}
                      onClick={() => setslidefirst(false)}
                      style={{ color: "black", cursor: "pointer" }}
                      className="text-black text-3xl mx-auto"
                      height={40}
                    />
                  </div>
                  <div className="flex justify-center align-center items-center">
                    <img
                      src="https://ik.imagekit.io/lc4zhdkrtsr/Home/arrow_down_tCfbfiNJI_g5Z3PKqsa.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647605097239"
                      alt="Ima"
                      width={40}
                      onClick={scrollintoviewthird}
                      style={{ color: "black", cursor: "pointer" }}
                      className="text-black text-3xl mx-auto"
                      height={40}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute left-16 top-40">
                <img
                  src="https://ik.imagekit.io/lc4zhdkrtsr/Home/739809170sst1647891060-min_v2d7ZD-Vs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647897545933"
                  alt="Imag"
                  className={styles.img2}
                />
              </div>
              <div className="absolute left-28 top-16 2xl:left-32">
                <img
                  src="https://ik.imagekit.io/lc4zhdkrtsr/Home/739809170sst1647891060-min_v2d7ZD-Vs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647897545933"
                  alt="Imag"
                  className={styles.img3}
                />
              </div>
              <div className="absolute left-48 top-28 2xl:left-52">
                <img
                  src="https://ik.imagekit.io/lc4zhdkrtsr/Home/739809170sst1647891060-min_v2d7ZD-Vs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647897545933"
                  alt="Imag"
                  className={styles.img4}
                />
              </div>
              <div className={`${styles.zInde} w-screen absolute bottom-0`}>
                <img
                  src="https://ik.imagekit.io/lc4zhdkrtsr/Home/Skyline3copy_65vQJqeDS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647603572078"
                  alt="Imag"
                  className={styles.zoomimg}
                />
              </div>
            </div>
          </div>
          <div
            className="flex justify-center"
            style={{
              height: "auto",
              zIndex: initialVal > 0 ? -1 : 0,
              opacity: 1,
            }}
          >
            <img
              src="https://ik.imagekit.io/lc4zhdkrtsr/Home/chakra-min_PV3hfN1lW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647600813517"
              alt="chakra"
              style={{
                zIndex: initialVal > 0 ? -11 : 0,
                marginLeft:
                  initialVal <= 1.1
                    ? initialVal * 40
                    : initialVal >= 1.1 && initialVal <= 2.1
                    ? -initialVal * 80
                    : 0,
                bottom: initialVal >= 0.01 ? 0 : -70,
                transform:
                  initialVal >= 2.1 ? `scale(${initialVal * 1})` : "scale(1)",
                visibility: initialVal >= 2.12 ? "hidden" : "visible",
              }}
              className={`${
                initialVal >= 1.4 && initialVal <= 2.1
                  ? `absolute top-[228vh]`
                  : "fixed"
              } ${style.chakra} ${
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
      )}
      <Thirdslidemobile
        initialVal={initialVal}
        scrollDirection={scrollDirection}
      />
      <Fourthslidemobile
        initialVal={initialVal}
        scrollDirection={scrollDirection}
      />
    </div>
  );
}

export default Secondslide;
