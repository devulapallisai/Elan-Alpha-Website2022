import React, { useEffect, useState } from "react";
// import Skyline1 from "../../images/Homepage/Skyline 1.png";
// import Skyline3 from "../../images/Homepage/Skyline 3.png";
import { gsap, Power2 } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
// import Chakra from "../../images/Homepage/chakra.png";
import BackgroundI from "../../images/Homepage/window_webcopy.png";
import styles from "../../css/Homepage3.module.css";
import style from "../../css/Homepage1.module.css";
import FourthSlide from "./FourthSlide";
import BThirdSlide from "./BThirdSlide";
function ThirdSlide({ thirdslide, setthirdslide }) {
  const [dispf, setdispf] = useState(false);
  const [forward, setforward] = useState(true);
  useEffect(() => {
    gsap.from(".chakra", {
      x: 550,
      y: 500,
      duration: 3,
      ease: Power2.easeInOut,
      rotation: 120,
    });
    gsap.from(".Para", {
      opacity: 0,
      x: 200,
      delay: 1.5,
      duration: 2,
    });
    gsap.from(".skyline3", {
      y: 270,
      duration: 3,
    });
    gsap.from(".skyline1", {
      opacity: 0,
      y: 200,
      duration: 3,
    });
    gsap.to(".backgr", {
      css: {
        transform: "translateZ(50px) perspective(50px)",
        transition: "4s",
      },
    });
    gsap.from(".Back", {
      css: {
        background:
          "linear-gradient(180deg,#170735 -10.41%,#943066 65.44%,#f5c470 122.95%)",
      },
      duration: 1,
    });
  }, []);
  const settosecond = (event) => {
    // document.getElementById("secondslide").scrollIntoView();
    setthirdslide(false);
  };
  const settofourth = (event) => {
    setdispf(true);
    setforward(true);
  };
  return (
    <div>
      {dispf ? (
        <FourthSlide
          forward={forward}
          setforward={setforward}
          dispf={dispf}
          setdispf={setdispf}
        />
      ) : (
        <>
          {forward ? (
            <div
              className={`Back overflow-hidden relative flex justify-center h-screen w-screen ${styles.bgit}`}
              id="thirdslide"
            >
              <img
                src="https://ik.imagekit.io/lc4zhdkrtsr/Home/window_webcopy_Yw7QaG-ZU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647603652858"
                className={`backgr ${styles.imagebackgr}`}
                style={{ zIndex: 46 }}
                alt="Imag"
                width="100vw"
                height="100vh"
              />

              <div className="z-[120000] absolute w-[50px] h-full right-2 flex items-center">
                <div className="h-[100px] w-[50px] z-[120000]">
                  <div className="flex flex-col justify-around h-[100px] z-[120000]">
                    <div className="flex justify-center align-center items-center">
                      <img
                        src="https://ik.imagekit.io/lc4zhdkrtsr/Home/arrow_up_6vVwCQvCd_EqgpmqvKn.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647605097198"
                        alt="Ima"
                        width={40}
                        onClick={settosecond}
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
                        onClick={settofourth}
                        style={{ color: "black", cursor: "pointer" }}
                        className="text-black text-3xl mx-auto"
                        height={40}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="z-[100000] Para absolute w-2/3 mx-auto top-[15vh]">
                <h1 className="font-heading text-white text-4xl z-[10000]">
                  About Us
                </h1>
                <br />
                <p className="text-white text-lg z-[10000] font-text">
                  Elan and ηVision is the annual techno-cultural fest of IIT
                  Hyderabad and is one of the largest fests in South India. It
                  is entirely organized by IITH students. Elan refers to the
                  cultural part and ηVision cites the technological part of the
                  fest. This festival features several professional and
                  semi-professional crowd-pulling events and promises to be a
                  grand event showcasing the best of cultural performances,
                  technical solutions, and student community advances
                </p>
              </div>
              <div className="bottom-0 skyline3 absolute overflow-hidden">
                <img
                  src="https://ik.imagekit.io/lc4zhdkrtsr/Home/Skyline_3_hNO62SCOV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647600855457"
                  className=" w-screen"
                  alt="img"
                ></img>
              </div>
              <div className="skyline1 absolute bottom-0 overflow-hidden">
                <img
                  src="https://ik.imagekit.io/lc4zhdkrtsr/Home/Skyline_1_P-qKtQ_5u.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647600855088"
                  className="w-screen"
                  alt="img"
                ></img>
              </div>
              <div className="chakra absolute left-16 top-28">
                <img
                  src="https://ik.imagekit.io/lc4zhdkrtsr/Home/chakra-min_PV3hfN1lW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647600813517"
                  alt="absolute"
                  className={`${style.chakra}`}
                />
              </div>
            </div>
          ) : (
            <BThirdSlide
              forward={forward}
              setforward={setforward}
              dispf={dispf}
              setdispf={setdispf}
              thirdslide={thirdslide}
              setthirdslide={setthirdslide}
            />
          )}
        </>
      )}
    </div>
  );
}

export default ThirdSlide;
