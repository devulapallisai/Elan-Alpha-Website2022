import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../../css/team.module.css";
import Goldenbox from "../../images/Golden Box.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
function Card({ name, position, image, type, phone }) {
  return (
    <div className={`m-4`}>
      <div className={`${styles.card}`} data-aos="flip-up">
        <div
          className={`${styles.box} d-flex justify-center mx-auto relative ${type}`}
        >
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
        <div className="text-center font-text text-xl  text-white">
          <FontAwesomeIcon icon={faPhoneSquare} className="mr-1" />
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
