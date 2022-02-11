import React from "react";
import styles from "../css/sponsors.module.css";
import Halfchakra from '../images/Homepage/Halfchakra.png'
function Sponsors() {
  return (
    <div className={`${styles.colorit}`}>
      <div className={`relative ${styles.colorit}`}>
        <div className="container z-10 mx-auto w-5/6 lg:w-3/4">
          <img src={Halfchakra} alt="" className={styles.flipimageit} />
        </div>
        <h1 className="font-heading absolute bottom-12 text-center md:bottom-48 w-full d-flex text-2xl md:text-8xl text-white">Our Sponsors</h1>
        <h1 className="font-text font-bold absolute bottom-4 text-center w-full d-flex text-xl md:text-4xl md:bottom-32 text-white">Title Sponsor</h1>
      </div>
      <br />
      <div className="contactsectioninpage">
            <div className="text-white font-text font-extrabold text-xl md:text-4xl text-center">Contact Us</div>
      </div>
    </div>
  );
}

export default Sponsors;
