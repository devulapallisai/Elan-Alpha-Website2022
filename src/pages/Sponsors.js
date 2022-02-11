import React from "react";
import styles from "../css/sponsors.module.css";
import Halfchakra from '../images/Homepage/Halfchakra.png'
function Sponsors() {
  return (
    <div className={styles.colorit}>
        <div className="container z-10 mx-auto w-3/4">
            <img src={Halfchakra} alt="" className={styles.flipimageit}/>
        </div>
        <div className="absolute top-24 font-heading text-center text-4xl md:text-6xl">Hello Prag</div>
    </div>
  );
}

export default Sponsors;
