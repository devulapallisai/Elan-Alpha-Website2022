import React, { useEffect, useState } from "react";
// import Skyline1 from "../../images/Homepage/Skyline 1.png";
// import Skyline3 from "../../images/Homepage/Skyline 3.png";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
// import Chakra from "../../images/Homepage/chakra.png";
import BackgroundI from "../../images/Homepage/window_webcopy.png";
import styles from "../../css/Homepage3.module.css";
import style from "../../css/Homepage1.module.css";
import FourthSlide from "./FourthSlide";
import BThirdSlide from "./BThirdSlide";
function ThirdSlide({thirdslide,setthirdslide}) {
  const [dispf, setdispf] = useState(false);
  const [forward, setforward] = useState(true);
  useEffect(() => {
    gsap.from(".chakra", {
      x: 550,
      y: 500,
      duration: 3,
      rotation: 120,
    });
    gsap.from(".Para", {
      opacity: 0,
      x: -100,
      yoyo: true,
      duration: 1,
    });
    gsap.from(".skyline3", {
      y: 100,
      duration: 2,
    });
    gsap.from(".skyline1", {
      opacity: 0,
      y: 200,
      duration: 3,
    });
    gsap.from(".Back", {
      duration: 3,
    });
  }, []);
  const settosecond = (event) => {
    // document.getElementById("secondslide").scrollIntoView();
    setthirdslide(false)
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
              className={`Back relative flex justify-center h-screen w-screen ${styles.bgit}`}
              id="thirdslide"
            >
              <div className="z-[120000] absolute w-[50px] h-full right-2 flex items-center">
                <div className="h-[100px] w-[50px] z-[120000]">
                  <div className="flex flex-col justify-around h-[100px] z-[120000]">
                    <div className="flex justify-center align-center items-center">
                      <FontAwesomeIcon
                        icon={faArrowCircleUp}
                        // onClick={()=>setchakra(false)}
                        onClick={settosecond}
                        className="text-black text-3xl mx-auto z-[120000]"
                        style={{ color: "black", cursor: "pointer" }}
                      />
                    </div>
                    <div className="flex justify-center align-center items-center">
                      <FontAwesomeIcon
                        icon={faArrowCircleDown}
                        onClick={settofourth}
                        className="text-black text-3xl mx-auto  z-[120000]"
                        style={{ color: "black", cursor: "pointer" }}
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
                  src="https://ik.imagekit.io/sai1975d/Homepage/Skyline_3_O7QErCOKx2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162357286"
                  className=" w-screen"
                  alt="img"
                ></img>
              </div>
              <div className="skyline1 absolute bottom-0 overflow-hidden">
                <img
                  src="https://ik.imagekit.io/sai1975d/Homepage/Skyline_1_VwK4ZUis_xoz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162346061"
                  className="w-screen"
                  alt="img"
                ></img>
              </div>
              <div className="chakra absolute left-16 top-20">
                <img
                  src="https://ik.imagekit.io/sai1975d/Homepage/chakra_Mv5H8QKGjH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162345910"
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
