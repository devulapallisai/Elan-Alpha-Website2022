import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../../css/team.module.css";
function Card({name,position,image}) {
  return (
    <div className={`m-4`}>
      <div className={styles.card} data-aos="flip-up">
        <div className={`${styles.box} d-flex justify-center mx-auto relative`}>
          <img src={image} alt="Image Here" />
          <div className={`absolute top-2 left-2 ${styles.box} `}>
            <img src={image} alt="" />
          </div>
        </div>
        <div className="text-center font-text text-2xl mt-4 text-white font-bold ">
          {name}
        </div>
        <div className="text-center font-text text-2xl text-white">
          {position}
        </div>
      </div>
    </div>
  );
}

export default Card;
