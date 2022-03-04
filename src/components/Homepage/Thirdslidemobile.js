import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../../css/Homepage3.module.css";
// import style from "../../css/Homepage2.module.css";
function Thirdslidemobile({ initialVal, scrollDirection }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className={`block lg:hidden absolute top-[200vh] text-black w-screen h-screen ${styles.bgit} z-[-111111]`}
    >
      <div
        className="Para mt-[20vh] pl-[90px] z-[111]"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h1 className="font-heading text-white text-2xl text-center">
          About Us
        </h1>
        <br />
        <p className="text-white text-sm font-text text-left">
          Elan and ηVision is the annual techno-cultural fest of IIT Hyderabad
          and is one of the largest fests in South India. It is entirely
          organized by IITH students.
        </p>
      </div>
      <div
        className="Para mt-[2vh] p-2 z-[111]"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <br />
        <p className="text-white text-sm font-text text-left">
          Elan refers to the cultural part and ηVision cites the technological
          part of the fest. This festival features several professional and
          semi-professional crowd-pulling events and promises to be a grand
          event showcasing the best of cultural performances, technical
          solutions, and student community advances
        </p>
      </div>
      <div
        className="bottom-0 skyline3 absolute overflow-hidden"
        data-aos="fade-up"
      >
        <img
          src="https://ik.imagekit.io/sai1975d/Homepage/Skyline_3_O7QErCOKx2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162357286"
          className="min-h-[220px] w-screen"
          alt="img"
          style={{ transform: "scale(2.2)" }}
        />
      </div>
      <div
        className="skyline1 absolute bottom-0 overflow-hidden"
        data-aos="fade-up"
      >
        <img
          src="https://ik.imagekit.io/sai1975d/Homepage/skylinemobile_d9UXa9s2-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646389191469"
          className="w-screen min-h-[160px]"
          alt="img"
        />
      </div>
    </div>
  );
}

export default Thirdslidemobile;
