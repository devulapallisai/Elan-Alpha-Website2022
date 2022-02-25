import React, { useEffect } from "react";
import Skyline1 from "../../images/Homepage/Skyline 1.png";
import Skyline3 from "../../images/Homepage/Skyline 3.png";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Chakra from "../../images/Homepage/chakra.png";
import BackgroundI from "../../images/Homepage/window_webcopy.png";
import styles from "../../css/Homepage4.module.css";
import Footer from "../common/Footer.js";
import Tag from "../../images/Homepage/Tag.png";
import Hom from "../../images/Homepage/Hom.png";
import Cal from "../../images/Homepage/Cal.png";
import User from "../../images/Homepage/User.png";
function FourthSlide({ forward, setforward, dispf, setdispf }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  useEffect(() => {
    gsap.from(".chakra", {
      x: 550,
      y: 500,
      duration: 3,
      rotation: 180,
    });
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
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      // window.location.href = "/fourth";
      if (
        event.keyCode === 38 ||
        event.key === "ArrowUp" ||
        event.key === "PageUp"
      ) {
        setforward(false);
        setdispf(false);
      }
    });
    window.addEventListener("wheel", (event) => {
      // window.location.href = "/fourth";

      if (event.deltaY < 0) {
        setdispf(false);
        setforward(false);
      }
    });
  });
  return (
    <div
      className={`Back relative flex justify-center h-screen w-screen overflow-hidden ${styles.bgit}`}
      id="fourthslide"
    >
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
          13th Edition of Elan & ηVision
        </h1>
        <p className="mt-10 Para2f text-white text-lg text-center">
          <div class="grid grid-cols-4 gap-4">
            <div className="text-center text-lg font-text font-bold">
              <div className="img mb-5">
                <img
                  src={Hom}
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
                  src={Tag}
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
                  src={Cal}
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
                  src={User}
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
          style={{ maxWidth: 400, zIndex: 10000, cursor: "pointer" }}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <a href="/contact" target="_blank">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-white text-5xl"
            />
          </a>
          <a href="/contact" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white text-5xl"
            />
          </a>
          <a href="/contact" target="_blank">
            <FontAwesomeIcon icon={faYoutube} className="text-white text-5xl" />
          </a>
          <a href="/contact" target="_blank">
            <FontAwesomeIcon icon={faTwitter} className="text-white text-5xl" />
          </a>
        </div>
      </div>
      <div className="bottom-0  skyline3 absolute overflow-hidden">
        <img src={Skyline3} className=" w-screen" alt="img"></img>
      </div>
      <div className="skyline1 absolute bottom-0 overflow-hidden">
        <img src={Skyline1} className="w-screen" alt="img"></img>
      </div>
      <div className="chakra1 absolute w-[120px] z-[11] left-16 top-20 mx-auto">
        <img src={Chakra} alt="img" />
      </div>
      <div className="absolute footer container bottom-4 mx-auto">
        <Footer />
      </div>
    </div>
  );
}

export default FourthSlide;
