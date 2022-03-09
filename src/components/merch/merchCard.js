import React from "react";
import styles from "../../css/merch.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function merchCard({  image, type }) {
  return (
    <div className={`m-4`}>
      <div className={`${styles.card}`} data-aos="flip-up">
        <div
          className={`${styles.box} d-flex justify-center mx-auto relative ${type}`}
        >
          <LazyLoadImage
            src={image}
            className={`${styles.box}`}
            // effect="blur"
            alt="ImageHere"
          />
          <div className={`absolute top-2 left-2 ${styles.box}`}>
            {/* <LazyLoadImage src={Goldenbox} alt="ImageHere" /> */}
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default merchCard;
