import React from "react";
import styles from "../css/sponsors.module.css";
import Halfchakra from '../images/SocialCause/Halfchakra.png'
import useWindowDimensions from '../hooks/useWindowDimensions'
import Contactsection from "../components/sponsors/contactsection";
function Sponsors() {
  let {width,height}=useWindowDimensions()
  return (
    <div className={`${styles.colorit} overflow-x-hidden`}>
      <div className={`relative ${styles.colorit}`}>
        <div className={`container z-10 mx-auto w-5/6 lg:w-3/4  ${styles.resizeit}`} style={{width:width<300?"100vw":''}}>
          <img src={Halfchakra} alt="" className={styles.flipimageit} style={{filter:'brightness(150%)'}} />
        </div>
        <h1 className="font-heading absolute bottom-12 text-center lg:bottom-48 w-full d-flex text-3xl sm:bottom-28 md:text-8xl text-white">Our Sponsors</h1>
        <h1 className="font-text font-black absolute bottom-4 text-center w-full d-flex text-xl sm:bottom-16 md:text-4xl lg:bottom-32 text-white">Title Sponsor</h1>
      </div>
      <br />
      <div className="contactsectioninpage">
            <div className="text-white font-text font-black text-xl md:text-4xl text-center">Contact Us</div>
            <br />
            <Contactsection/>
      </div>
    </div>
  );
}

export default Sponsors;
