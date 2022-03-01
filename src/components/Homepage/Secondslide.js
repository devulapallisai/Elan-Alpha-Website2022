import React, { useRef } from "react";
// import Chakra from "../../images/Homepage/chakra.png";
import styles from "../../css/Homepage2.module.css";
// import Lanterntop from "../../images/Lantern1.png";
// import Lant from "../../images/Homepage/Lanterntop.png";
// import Skyline from "../../images/Homepage/Skyline3copy.png";
// import BackgroundI from "../../images/Homepage/window_webcopy.png";
import style from "../../css/Homepage1.module.css";
// import ThirdSlide from "./ThirdSlide";
import { useNavigate } from "react-router-dom";
function Secondslide({ initialVal, scrollDirection, secondslideref }) {
  const textref = useRef();
  const navigate = useNavigate();
  // const [thirdslide, setthirdslide] = useState(false);
  const keyev = (event) => {
    if (
      (event.keyCode === 34 ||
        event.key === "ArrowDown" ||
        event.key === "PageDown") &&
      initialVal >= 0.98
    ) {
      // setthirdslide(true);
      navigate("/third");
    }
  };
  const wheelused = (event) => {
    console.log("Hello");
    if (event.deltaY < 0) {
      navigate("/third");
    }
  };
  return (
    <div>
      {/* Text Part */}
      <div
        className={`flex justify-center`}
        style={{
          opacity: initialVal,
          display: `${initialVal === 0 ? "hidden" : "flex"}`,
        }}
      >
        <div
          className={`fixed top-[25vh] 2xl:top-84 text-sm flex justify-center ${styles.texthere}`}
          ref={textref}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="flex flex-col">
            <div className="font-heading text-3xl 2xl:text-5xl text-center pb-2">
              OUR THEME
            </div>
            <div className="text-justify font-text">
              <p className="m-1">
                They ask me, <br />
                "How are you so sure you'll enjoy tomorrow?" <br />
                <p className="text-center font-bold text-[18px]">"Sunrise"</p>
              </p>

              <p className="m-1">
                We present you this year's theme:{" "}
                <p className="text-center font-bold text-[18px]">
                  Zora-e-Sukoon
                </p>
                Zora-e-Sukoon translates to the peaceful feeling we get at the
                rise of dawn. It depicts the joyful feeling we get after
                overcoming adversity in our lives. No matter how dark your life
                may seem, Elan & ηVision will be your break of dawn, your
                Sunrise, your Sukoon.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Window Part */}
      <div className={`absolute top-[100vh] w-screen-h-screen -z-[111]`}>
        <div className={`${styles.Slide} h-screen w-screen -z-[11111]`}></div>
      </div>
      <div
        id="secondslide"
        ref={secondslideref}
        onWheel={wheelused}
        onKeyDown={keyev}
        tabIndex={0}
        className={`h-screen w-screen hidden lg:block -z-[1]`}
      >
        <img
          src="https://ik.imagekit.io/sai1975d/Homepage/window_webcopy_CmhsixF_NsfNU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162357667"
          className={`${styles.imagebackgr}`}
          style={{ zIndex: 46 }}
          alt="Imag"
          width="100vw"
          height="100vh"
        />
        <div className="absolute top-[100vh] w-screen h-screen">
          <div className="absolute top-14 right-24">
            <img
              src="https://ik.imagekit.io/sai1975d/Lantern1_sHrLhheomo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162490003"
              alt="Imag"
              className={styles.img}
            />
          </div>
          <div className="absolute top-0 right-40 2xl:right-48">
            <img
              src="https://ik.imagekit.io/sai1975d/Lantern1_sHrLhheomo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162490003"
              alt="Imag"
              className={styles.img1}
            />
          </div>
          <div className="absolute left-16 top-40">
            <img
              src="https://ik.imagekit.io/sai1975d/Homepage/Lanterntop_ElMfEjYvzo1B.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162346668"
              alt="Imag"
              className={styles.img2}
            />
          </div>
          <div className="absolute left-28 top-16 2xl:left-32">
            <img
              src="https://ik.imagekit.io/sai1975d/Homepage/Lanterntop_ElMfEjYvzo1B.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162346668"
              alt="Imag"
              className={styles.img3}
            />
          </div>
          <div className="absolute left-48 top-28 2xl:left-52">
            <img
              src="https://ik.imagekit.io/sai1975d/Homepage/Lanterntop_ElMfEjYvzo1B.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162346668"
              alt="Imag"
              className={styles.img4}
            />
          </div>
          <div className={`${styles.zInde} w-screen absolute bottom-0`}>
            <img
              src="https://ik.imagekit.io/sai1975d/Homepage/Skyline3copy_1Gtxl7GfPnZGl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162357682"
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
          src="https://ik.imagekit.io/sai1975d/Homepage/chakra_Mv5H8QKGjH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162345910"
          alt="chakra"
          style={{
            zIndex: initialVal > 0 ? -11 : 0,
            marginLeft: initialVal <= 1.4 ? initialVal * 40 : 0,
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
    </div>
  );
}

export default Secondslide;
