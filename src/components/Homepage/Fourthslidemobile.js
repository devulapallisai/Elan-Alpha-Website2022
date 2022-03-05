import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from "../../css/Homepage4.module.css";
import Footer from "../common/Footer";
function Fourthslidemobile({ initialVal, scrollDirection }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className={`${styles.bgitmobile} block lg:hidden w-screen h-screen absolute top-[300vh] z-[-1111111]`}
    >
      {/* Hello Peter */}
      <div
        className="absolute top-0 w-full"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <img
          src="https://ik.imagekit.io/sai1975d/Homepage/Halfchakra_iC0BoQejKKVN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162345351"
          alt="Topmage"
          className="w-5/6 mx-auto"
          style={{ transform: "scaleY(-1)" }}
        />
      </div>
      <div className="mt-[15vh]">
        <h1
          className="text-center text-xl font-heading"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          13th Edition of Elan &{" "}
          <span className="text-2xl text-white font-bold text-center">
            &eta;
          </span>
          Vision
        </h1>
      </div>
      <div className="container mx-auto mt-5 max-w-[240px]">
        {/* <div className="max-w-[240px] mx-auto flex"></div> */}
        <div className="grid grid-cols-2 gap-2">
          <div className="text-center text-sm font-text font-bold">
            <div
              className="img mb-5"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <img
                src="https://ik.imagekit.io/sai1975d/Homepage/Hom_frwlgM5pR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162342566"
                alt="Im"
                style={{ width: 50, height: 50 }}
                className="mx-auto z-[120000]"
              />
            </div>
            400+ colleges
          </div>
          <div className="text-center text-sm font-text font-bold">
            <div
              className="img mb-5"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <img
                src="https://ik.imagekit.io/sai1975d/Homepage/Tag_0emHuttNblyd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162357295"
                alt="Im"
                style={{ width: 60, height: 55 }}
                className="mx-auto z-[120000]"
              />
            </div>
            40+ events
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-5  max-w-[240px]">
        <div className="grid grid-cols-2 gap-2">
          <div className="text-center text-sm font-text font-bold">
            <div
              className="img mb-5"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <img
                src="https://ik.imagekit.io/sai1975d/Homepage/Cal_M-xuJ4WtcdIn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162341371"
                alt="Im"
                style={{ width: 60, height: 50 }}
                className="mx-auto z-[120000]"
              />
            </div>
            3 days
          </div>
          <div className="text-center text-sm font-text font-bold">
            <div
              className="img mb-5"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <img
                src="https://ik.imagekit.io/sai1975d/Homepage/User_TxcUNWtbf4kcf.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162357316"
                alt="Im"
                style={{ width: 85, height: 55 }}
                className="mx-auto z-[120000]"
              />
            </div>
            10k+ audience
          </div>
        </div>
      </div>
      <div className="flex container mx-auto mt-5 px-2 max-w-[360px]">
        <div
          className="flex flex-col"
          data-aos="zoom-in-up"
          data-aos-duration="1400"
        >
          <a
            rel="noreferrer"
            href="https://www.facebook.com/elan.iithyderabad/"
            target="_blank"
            className="flex justify-center items-center"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-white text-3xl"
            />
          </a>
          <p className="font-text text-center font-bold text-lg mt-4">
            41k+ likes
          </p>
        </div>
        <div
          className="flex flex-col"
          data-aos="zoom-in-up"
          data-aos-duration="1400"
        >
          <a
            rel="noreferrer"
            href="https://www.instagram.com/elan_nvision.iith/?hl=en"
            target="_blank"
            className="flex justify-center items-center"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white text-3xl"
            />
          </a>
          <p className="font-text text-center font-bold text-lg mt-4">
            3.1k+ followers
          </p>
        </div>
        <div
          className="flex flex-col"
          data-aos="zoom-in-up"
          data-aos-duration="1400"
        >
          <a
            rel="noreferrer"
            href="https://www.youtube.com/channel/UC-D08t2esBoVTVOjlXUOxHA"
            target="_blank"
            className="flex justify-center items-center"
          >
            <FontAwesomeIcon icon={faYoutube} className="text-white text-3xl" />
          </a>
          <p className="font-text text-center font-bold text-lg mt-4">
            77k+ views
          </p>
        </div>
        <div
          className="flex flex-col"
          data-aos="zoom-in-up"
          data-aos-duration="1400"
        >
          <a
            rel="noreferrer"
            href="https://twitter.com/elan_nvision?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            target="_blank"
            className="flex justify-center items-center"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-white text-3xl" />
          </a>
          <p className="font-text text-center font-bold text-lg mt-4">
            1.1k+ followers
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Fourthslidemobile;
