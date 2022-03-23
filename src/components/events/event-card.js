import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/events.module.css";

function Card({ image, text, type, button, buttonText, a, title, hlink, textclass }) {
  if (button === true) {
    return (
      <div className={` ${type}`}>
        <div className={` ${styles.border} flex flex-col justify-around`}>
          <img
            className={styles.imageBox}
            src={image}
            alt="imag"
            loading="lazy"
          />

          <div
            className={`text-white ${styles.textBox} font-text md:font-lg font-sm`}
          >
            {text}
          </div>

          {a ? (
            // return
            <>
              <br />
              <a
                href="https://www.meraevents.com/event/elan-nvision-workshop-2022?ucode=organizer"
                target="_blank"
                rel="noreferrer"
                className={`${styles.button} font-text mt-3 text-white`}
              >
                {buttonText}
              </a>
            </>
          ) : hlink ? (
            <Link to={hlink}>
              <button className={`${styles.button} font-text mt-3 text-white`}>
                {buttonText}
              </button>
            </Link>
          ) : (
            <button className={`${styles.button} font-text mt-3 text-white`}>
              {buttonText}
            </button>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className={` ${type}`}>
        <div className={` ${styles.border}`}>
          <img
            className={styles.imageBox}
            loading="lazy"
            src={image}
            alt="imag"
          />
          <h1 className="font-heading m-2 text-center text-lg md:text-2xl text-white">
            {title}
          </h1>
          <div
            className={`text-white ${styles.textBox} font-text md:font-lg font-sm ${textclass}`}
          >
            {text}
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
