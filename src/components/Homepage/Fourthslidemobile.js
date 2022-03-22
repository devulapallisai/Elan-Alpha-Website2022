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
          src="https://ik.imagekit.io/lc4zhdkrtsr/Home/Halfchakra-min_slX8RoVTq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647602648645"
          alt="Topmage"
          className="w-5/6 mx-auto"
          style={{ transform: "scaleY(-1)" }}
        />
      </div>
      <div className="mt-[15vh] text-white">
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
          <div className="text-center text-sm font-text font-bold text-white ">
            <div
              className="img mb-5 "
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <img
                src="https://ik.imagekit.io/lc4zhdkrtsr/Home/Hom_pMwTV2zMm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647606408732"
                alt="Im"
                style={{ width: 50, height: 50 }}
                className="mx-auto z-[120000] "
              />
            </div>
            400+ colleges
          </div>
          <div className="text-center text-sm font-text font-bold text-white">
            <div
              className="img mb-5 "
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <img
                src="https://ik.imagekit.io/lc4zhdkrtsr/Home/Tag_X8IyJUxq4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647603132317"
                alt="Im"
                style={{ width: 60, height: 55 }}
                className="mx-auto z-[120000] "
              />
            </div>
            40+ events
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-5  max-w-[240px]">
        <div className="grid grid-cols-2 gap-2">
          <div className="text-center text-sm font-text font-bold text-white">
            <div
              className="img mb-5 "
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <img
                src="https://ik.imagekit.io/lc4zhdkrtsr/Home/Cal_zfvmTnBh_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647603168724"
                alt="Im"
                style={{ width: 60, height: 50 }}
                className="mx-auto z-[120000] "
              />
            </div>
            3 days
          </div>
          <div className="text-center text-sm font-text font-bold text-white">
            <div
              className="img mb-5 "
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <img
                src="https://ik.imagekit.io/lc4zhdkrtsr/Home/User_DEfRudrCQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647603168708"
                alt="Im"
                style={{ width: 85, height: 55 }}
                className="mx-auto z-[120000] "
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
          <p className="font-text text-center font-bold text-lg mt-4 text-white">
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
          <p className="font-text text-center font-bold text-lg mt-4 text-white">
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
          <p className="font-text text-center font-bold text-lg mt-4 text-white">
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
          <p className="font-text text-center font-bold text-lg mt-4 text-white">
            1.1k+ followers
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 w-full text-white">
        <Footer />
      </div>
    </div>
  );
}

export default Fourthslidemobile;
