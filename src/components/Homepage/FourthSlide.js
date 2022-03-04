import React, { useEffect } from "react";
// import Skyline1 from "../../images/Homepage/Skyline 1.png";
// import Skyline3 from "../../images/Homepage/Skyline 3.png";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import Chakra from "../../images/Homepage/chakra.png";
import styles from "../../css/Homepage4.module.css";
import Footer from "../common/Footer.js";
// import Tag from "../../images/Homepage/Tag.png";
// import Hom from "../../images/Homepage/Hom.png";
// import Cal from "../../images/Homepage/Cal.png";
// import User from "../../images/Homepage/User.png";
function FourthSlide({ forward, setforward, dispf, setdispf }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  useEffect(() => {
    // gsap.from(".chakra", {
    //   x: 550,
    //   y: 500,
    //   duration: 3,
    //   rotation: 180,
    // });
    gsap.to(".Para1", {
      opacity: 0,
      x: -100,
      duration: 2,
    });
    gsap.from(".Para2h", {
      x: 200,
      y: -100,
      duration: 3,
    });
    gsap.from(".Para2f", {
      x: 200,
      y: 50,
      duration: 3,
    });
    gsap.to(".skyline3", {
      opacity: 0,
      y: 100,
      duration: 3,
    });
    gsap.to(".skyline1", {
      opacity: 0,
      y: 200,
      duration: 3,
    });

    gsap.to(".chakra1", {
      css: {
        width: "65%",
        top: "-67vh",
        left: "17.5vw",
        opacity: 0.5,
        margin: "auto",
        transform: "rotate(170deg)",
      },
      duration: 3,
      rotation: 150,
    });
    gsap.from(".Back", {
      css: {
        background:
          " linear-gradient(180deg, #943066 -7.97%, #943166 -7.94%, #F5C470 108.26%);",
      },
      duration: 3,
    });
  }, []);
  const settothird = (event) => {
    setforward(false);
    setdispf(false);
  };
  return (
    <div
      className={`Back relative flex justify-center h-screen w-screen overflow-hidden ${styles.bgit}`}
      id="fourthslide"
    >
      <div className="z-[120000] absolute w-[50px] h-full right-2 flex items-center">
        <div className="h-[100px] w-[50px] z-[120000]">
          <div className="flex flex-col justify-around h-[100px] z-[120000]">
            <div className="flex justify-center align-center items-center">
              <img
                src="https://ik.imagekit.io/sai1975d/Homepage/arrow_up_6vVwCQvCd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646391413079"
                alt="Ima"
                width={40}
                onClick={settothird}
                style={{ color: "black", cursor: "pointer" }}
                className="text-black text-3xl mx-auto"
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="Para1 absolute w-2/3 mx-auto top-[15vh]">
        <h1 className="font-heading text-white text-4xl z-[10000]">About Us</h1>
        <br />
        <p className="text-white text-lg z-[10000]">
          Elan and ηVision is the annual techno-cultural fest of IIT Hyderabad
          and is one of the largest fests in South India. It is entirely
          organized by IITH students. Elan refers to the cultural part and
          ηVision cites the technological part of the fest. This festival
          features several professional and semi-professional crowd-pulling
          events and promises to be a grand event showcasing the best of
          cultural performances, technical solutions, and student community
          advances
        </p>
      </div>
      <div className="Para2 absolute w-2/3 justify-center mx-auto top-[16vh] z-[1222]">
        <h1 className="Para2h text-white font-black text-center text-5xl font-text">
          13th Edition of Elan &{" "}
          <span className="Para2h text-white font-light text-center">
            &eta;
          </span>
          Vision
        </h1>
        <p className="mt-10 Para2f text-white text-lg text-center">
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center text-lg font-text font-bold">
              <div className="img mb-5">
                <img
                  src="https://ik.imagekit.io/sai1975d/Homepage/Hom_frwlgM5pR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162342566"
                  alt="Im"
                  style={{ width: 100, height: 100 }}
                  className="mx-auto z-[120000]"
                />
              </div>
              400+ colleges
            </div>
            <div className="text-center text-lg font-text font-bold">
              <div className="img mb-5">
                <img
                  src="https://ik.imagekit.io/sai1975d/Homepage/Tag_0emHuttNblyd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162357295"
                  alt="Im"
                  style={{ width: 120, height: 110 }}
                  className="mx-auto z-[120000]"
                />
              </div>
              40+ events
            </div>
            <div className="text-center text-lg font-text font-bold">
              <div className="img mb-5">
                <img
                  src="https://ik.imagekit.io/sai1975d/Homepage/Cal_M-xuJ4WtcdIn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162341371"
                  alt="Im"
                  style={{ width: 120, height: 100 }}
                  className="mx-auto z-[120000]"
                />
              </div>
              3 days
            </div>
            <div className="text-center text-lg font-text font-bold">
              <div className="img mb-5">
                <img
                  src="https://ik.imagekit.io/sai1975d/Homepage/User_TxcUNWtbf4kcf.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162357316"
                  alt="Im"
                  style={{ width: 170, height: 110 }}
                  className="mx-auto z-[120000]"
                />
              </div>
              10k+ audience
            </div>
          </div>
        </p>
        <div
          className="mt-10 flex justify-between mx-auto"
          style={{ maxWidth: 500, zIndex: 10000, cursor: "pointer" }}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="flex flex-col">
            <a
              rel="noreferrer"
              href="https://www.facebook.com/elan.iithyderabad/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-white text-5xl"
              />
            </a>
            <p className="font-text text-center font-bold text-lg mt-4">
              41k+ likes
            </p>
          </div>
          <div className="flex flex-col">
            <a
              rel="noreferrer"
              href="https://www.instagram.com/elan_nvision.iith/?hl=en"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white text-5xl"
              />
            </a>
            <p className="font-text text-center font-bold text-lg mt-4">
              3.1k+ followers
            </p>
          </div>
          <div className="flex flex-col">
            <a
              rel="noreferrer"
              href="https://www.youtube.com/channel/UC-D08t2esBoVTVOjlXUOxHA"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-white text-5xl"
              />
            </a>
            <p className="font-text text-center font-bold text-lg mt-4">
              77k+ views
            </p>
          </div>
          <div className="flex flex-col">
            <a
              rel="noreferrer"
              href="https://twitter.com/elan_nvision?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-white text-5xl"
              />
            </a>
            <p className="font-text text-center font-bold text-lg mt-4">
              1.1k+ followers
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-0  skyline3 absolute overflow-hidden">
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
      <div className="chakra1 absolute w-[120px] z-[11] left-16 top-20 mx-auto">
        <img
          src="https://ik.imagekit.io/sai1975d/Homepage/chakra_Mv5H8QKGjH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162345910"
          alt="img"
        />
      </div>
      <div className="absolute footer container bottom-4 mx-auto">
        <Footer />
      </div>
    </div>
  );
}

export default FourthSlide;
