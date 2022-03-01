import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LazyLoadImage from 'react-lazy-load-image-component'
// import RightBot from "../../images/Homepage/corners_copyrightbot.png";
// import LeftTop from "../../images/Homepage/corners_copyrighttop.png";
import styles from "../../css/Homepage1.module.css";
// import Themeimg from "../../images/Homepage/Theme_final.png";
// import Logo from "../../images/elannvision.png";
// import Chakra from "../../images/Homepage/Halfchakra.png";
// import Textbox from "../../images/Homepage/Textbox.png";
function Firstslide({ chakra, setchakra, scrollDirection, secondslideref }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [dispnot, setdispnot] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setdispnot(false);
    }, 2000);
  }, []);
  return (
    <div
      className="w-screen h-screen z-40"
      style={{
        background: "linear-gradient(180deg, #1E0735 76.65%, #943066 166.99%)",
      }}
    >
      {!chakra ? (
        <div className="first transition duration-800 ease-in-out overflow-y-hidden">
          <div className="absolute  z-[5000] bottom-0 w-full">
            <img
              src="https://ik.imagekit.io/sai1975d/Homepage/Halfchakra_iC0BoQejKKVN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162345351"
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
                  src="https://ik.imagekit.io/sai1975d/Homepage/Textbox_e9P2os9EKP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162357277"
                  className={`pl-10 cursor-pointer z-50`}
                  alt="Imae"
                  data-aos="zoom-in-up"
                  data-aos-duration="1400"
                  style={{ height: 120, marginLeft: "50vw" }}
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
              src="https://ik.imagekit.io/sai1975d/Homepage/corners_copy_v4afQOlnB.png"
              alt="Imag"
              className={`${styles.img} z-[20]`}
            />
          </div>
          <div
            className={`absolute bottom-1 left-1 ${
              chakra ? "fade-left-down" : "fade-right-up"
            }`}
          >
            <img src="https://ik.imagekit.io/sai1975d/Homepage/corners_copyleftbot_m1fUpUH2RCmdA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162343848" alt="Imag" className={`${styles.img}  z-[20]`} />
          </div>
          <div
            className={`absolute top-12 right-1 ${
              chakra ? "fade-right-up" : "fade-left-down"
            }`}
          >
            <img src="https://ik.imagekit.io/sai1975d/Homepage/corners_copyrighttop_-P71J84d1W.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162343861" alt="Imag" className={`${styles.img}  z-[20]`} />
          </div>
          <div
            className={`absolute bottom-1 right-1 ${
              chakra ? "fade-right-down" : "fade-left-up"
            }`}
          >
            <img src="https://ik.imagekit.io/sai1975d/Homepage/corners_copyrightbot_Hb3DBSZQKkxG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162343879" alt="Imag" className={`${styles.img} z-[20]`} />
          </div>
          <div className="absolute">
            <div className={`${styles.backgr} flex justify-content-center`}>
              <img
                src="https://ik.imagekit.io/sai1975d/elannvision_m-ZykeIdB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162487717"
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
            className={`absolute top-0 ${styles.zorae} flex justify-center h-screen overflow-y-hidden`}
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img
              src="https://ik.imagekit.io/sai1975d/Homepage/Theme_final_VYd-YxKCK64x.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162359270"
              alt="Theme Imag"
              className={`${styles.themeimg}`}
            />
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
