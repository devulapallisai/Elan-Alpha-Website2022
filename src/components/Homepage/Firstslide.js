import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import RightTop from "../../images/Homepage/corners_copy.png";
import RightBot from "../../images/Homepage/corners_copyrightbot.png";
import LeftBot from "../../images/Homepage/corners_copyleftbot.png";
import LeftTop from "../../images/Homepage/corners_copyrighttop.png";
import Box from "../../images/Homepage/box_copy.png";
import styles from "../../css/Homepage1.module.css";
import Themeimg from "../../images/Homepage/Theme_final.png";
import Logo from "../../images/elannvision.png";
import Chakra from "../../images/Homepage/Halfchakra.png";
function Firstslide() {
  const [chakra, setchakra] = useState(false);
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
              alt="Image"
              onClick={() => setchakra((prev) => !prev)}
            />
          </div>
          <div className="absolute top-12 left-0 fade-right-down">
            <img src={RightTop} alt="Image" className={styles.img} />
          </div>
          <div className="absolute bottom-0 left-0 fade-right-up">
            <img src={LeftBot} alt="Image" className={styles.img} />
          </div>
          <div className="absolute top-12 right-0 fade-left-down">
            <img src={LeftTop} alt="Image" className={styles.img} />
          </div>
          <div className="absolute bottom-0 right-0 fade-left-up">
            <img src={RightBot} alt="Image" className={styles.img} />
          </div>
          <div className="absolute">
            <div
              className="backgr flex justify-content-center"
              style={{
                width: "70vw",
                height: "60vh",
                marginLeft: "15vw",
                marginTop: "20vh",
                background: `url(${Box})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img
                src={Logo}
                alt="Logo"
                className="my-auto"
                style={{ height: "60%", display: "flex", margin: "auto" }}
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className={`absolute top-0 ${styles.zorae}`} data-aos="zoom-in" data-aos-duration="1000">
            <img
              src={Themeimg}
              alt="Theme Image"
              className={`${styles.themeimg}`}
            />
          </div>
          <div className="absolute bottom-0 w-full">
            <img
              src={Chakra}
              className={`mx-auto cursor-pointer z-50 ${styles.chakra}`}
              alt="Image"
            />
          </div>
        </>
      )}
      <div className={`${chakra ? styles.active1 : styles.nonactive1}`}>
        <div className={`${chakra ? styles.active2 : styles.nonactive2}`} onClick={()=>{setchakra(false)}}></div>
      </div>
    </div>
  );
}

export default Firstslide;
