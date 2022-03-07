import React from "react";
import styles from "../../css/events.module.css";

function Card({ image, text, type, button, buttonText, a }) {
  if (button === true) {
    return (
      <div className={` ${type}`}>
        <div className={` ${styles.border}`}>
          <img className={styles.imageBox} src={image} alt="imag" />

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
          <img className={styles.imageBox} src={image} alt="imag" />

          <div
            className={`text-white ${styles.textBox} font-text md:font-lg font-sm`}
          >
            {text}
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
