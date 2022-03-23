import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import LazyLoadImage from "react-lazy-load-image-component";
// import RightBot from "../../images/Homepage/corners_copyrightbot.png";
// import LeftTop from "../../images/Homepage/corners_copyrighttop.png";
import styles from "../../css/Homepage1.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import Finalmerch from "../../images/Homepage/Finalmerch.webp";
import Finalcrypt from "../../images/Homepage/finalcryptex.webp";
import { Link } from "react-router-dom";
// import Themeimg from "../../images/Homepage/Theme_final.png";
// import Logo from "../../images/elannvision.png";
// import Chakra from "../../images/Homepage/Halfchakra.png";
// import Textbox from "../../images/Homepage/Textbox.png";
function Firstslide({ chakra, setchakra, scrollDirection, secondslideref }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const scrollintoviewsec = (event) => {
    document
      .getElementById("secondslide")
      .scrollIntoView({ behavior: "smooth" });
  };
  const [dispnot, setdispnot] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setdispnot(false);
    }, 3000);
  }, []);
  return (
    <div
      className="w-screen h-screen z-40"
      style={{
        background: "linear-gradient(180deg, #1E0735 76.65%, #943066 166.99%)",
      }}
      id="firstslide"
    >
      {!chakra ? (
        <div className="first transition duration-800 ease-in-out overflow-y-hidden">
          <div className="absolute  z-[5000] bottom-0 w-full">
            <img
              src="https://ik.imagekit.io/lc4zhdkrtsr/Home/Halfchakra-min_slX8RoVTq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647602648645"
              className={`mx-auto cursor-pointer z-[5000] ${styles.chakra} ${styles.transform}`}
              alt="Imae"
              onClick={
                () =>
                  // setTimeout(() => {
                  setchakra((prev) => !prev)
                // }, 1000)
              }
            />
          </div>
          {/* Display that textbox to indicate button clicking */}
          {dispnot ? (
            <div className="absolute top-0 z-[500] w-screen h-screen bg-[#000000b5] opacity-80">
              <div className="absolute bottom-6 w-full">
                <img
                  src="https://ik.imagekit.io/lc4zhdkrtsr/Home/Click_Here__iw82QbDdi_SHkEU7VrQ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647605463217"
                  className={`pl-10 cursor-pointer z-50 md:ml-[50vw] ml-[2vw]`}
                  alt="Imae"
                  data-aos="zoom-in"
                  data-aos-duration="1400"
                  style={{ height: 120 }}
                />
              </div>
            </div>
          ) : (
            ""
          )}
          <div
            className={`absolute top-12 left-1 fade-right-down ${
              chakra ? "fade-left-up" : "fade-right-down"
            }`}
          >
            <img
              src="https://ik.imagekit.io/lc4zhdkrtsr/Home/corners_copy-min_E4uHrIYXC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647602705725"
              alt="Imag"
              className={`${styles.img} z-[20]`}
            />
          </div>
          <div
            className={`absolute bottom-1 left-1 ${
              chakra ? "fade-left-down" : "fade-right-up"
            }`}
          >
            <img
              src="https://ik.imagekit.io/lc4zhdkrtsr/Home/corners_copyleftbot-min_r_2DJdXqU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647602705530"
              alt="Imag"
              className={`${styles.img}  z-[20]`}
            />
          </div>
          <div
            className={`absolute top-12 right-1 ${
              chakra ? "fade-right-up" : "fade-left-down"
            }`}
          >
            <img
              src="https://ik.imagekit.io/lc4zhdkrtsr/Home/corners_copyrighttop-min_YG6If1ZOE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647602706275"
              alt="Imag"
              className={`${styles.img}  z-[20]`}
            />
          </div>
          <div
            className={`absolute bottom-1 right-1 ${
              chakra ? "fade-right-down" : "fade-left-up"
            }`}
          >
            <img
              src="https://ik.imagekit.io/lc4zhdkrtsr/Home/corners_copyrightbot-min_zE5Xq3Z-f.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647602706056"
              alt="Imag"
              className={`${styles.img} z-[20]`}
            />
          </div>
          {/* <div className="hidden md:flex z-[20000000] absolute left-0 h-full items-center ml-[6vw]">
            <Link to="/merch">
              <img
                src={Finalmerch}
                alt="Im"
                data-aos="zoom-in"
                data-aos-delay="5000"
                data-aos-duration="2000"
                className={`${styles.sizeit}  my-auto cursor-pointer mb-[25vh]`}
              />
            </Link>
          </div> */}
          {/* <div className="z-[20000000] md:hidden absolute flex top-0 w-full mt-[15vh] justify-center">
            <Link to="/merch">
              <img
                src={Finalmerch}
                alt="Im"
                data-aos="zoom-in"
                data-aos-delay="5000"
                data-aos-duration="2000"
                className={`${styles.sizeit} cursor-pointer`}
              />
            </Link>
          </div>
          <div className="z-[20000000]  absolute md:flex hidden right-0 h-full items-center mr-[6vw]">
            <Link to="/cryptex">
              <img
                src={Finalcrypt}
                alt="Im"
                data-aos="zoom-in"
                data-aos-delay="5000"
                data-aos-duration="2000"
                className={`${styles.sizeit}  my-auto cursor-pointer mb-[25vh]`}
              />
            </Link>
          </div> */}
          <div className="z-[20000000] md:hidden absolute flex bottom-0 w-full mb-[20vh] justify-center">
            <Link to="/cryptex">
              <img
                src={Finalcrypt}
                alt="Im"
                data-aos="zoom-in"
                data-aos-delay="5000"
                data-aos-duration="2000"
                className={`${styles.sizeit} cursor-pointer`}
              />
            </Link>
          </div>
          <div className="absolute">
            <div className={`${styles.backgr} flex justify-content-center`}>
              <img
                src="https://ik.imagekit.io/lc4zhdkrtsr/Home/ELAN_2022_white_non_transparent__HMIbr9xU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648045446412"
                alt="Logo"
                className="my-auto"
                style={{
                  maxHeight: "60%",
                  maxWidth: "60%",
                  display: "flex",
                  margin: "auto",
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            className={`absolute top-0 ${styles.zorae} flex justify-center h-screen`}
          >
            <img
              src="https://ik.imagekit.io/lc4zhdkrtsr/Home/Theme_final-min_f7bz_7Mhm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647602999447"
              alt="Theme Imag"
              data-aos="zoom-in"
              data-aos-duration="1000"
              className={`${styles.themeimg} z-20`}
            />
          </div>
          <div className="hidden lg:flex absolute w-[50px] h-full right-2 items-center">
            <div className="h-[100px] w-[50px]">
              <div className="flex flex-col justify-around h-[100px]">
                <div className="flex justify-center align-center items-center">
                  <img
                    src="https://ik.imagekit.io/lc4zhdkrtsr/Home/arrow_up_6vVwCQvCd_EqgpmqvKn.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647605097198"
                    alt="Ima"
                    width={40}
                    onClick={() => setchakra(false)}
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
                    onClick={scrollintoviewsec}
                    style={{ color: "black", cursor: "pointer" }}
                    className="text-black text-3xl mx-auto"
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* <div className={`hidden md:block ${chakra ? styles.active1 : styles.nonactive1}`}>
        <div
          className={`${chakra ? styles.active2 : styles.nonactive2}`}
          onClick={() => {
              // setTimeout(() => {
                setchakra(false)
              // }, 1000);
          }}
        ></div>
      </div> */}
    </div>
  );
}

export default Firstslide;
