import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../../css/team.module.css";
import Goldenbox from '../../images/Golden Box.png'
function Card({name,position,image,type,phone}) {
  return (
    <div className={`m-4`}>
      <div className={`${styles.card}` } data-aos="flip-up">
        <div className={`${styles.box} d-flex justify-center mx-auto relative ${type}`}>
          <img src={image} className={`${styles.box}`} alt="ImageHere" />
          <div className={`absolute top-2 left-2 ${styles.box}`}>
            <img src={Goldenbox} alt="ImageHere" />
          </div>
        </div>
        <div className="text-center font-text text-2xl mt-4 text-white font-bold ">
          {name}
        </div>
        <div className="text-center font-text text-2xl  text-white">
          {position}
        </div>
        <div className="text-center font-text text-2xl  text-white">
        
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
