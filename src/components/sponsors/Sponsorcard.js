import React, { useEffect } from "react";
import styles from "../../css/sponsors.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
function Sponsorcard({
  Role,
  Description,
  Image,
  Website,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
}) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div
        className={`${styles.container1}`}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className={`${styles.content}`}>
          <div className={`${styles.contentOverlay}`}></div>
          <img alt="img" className={`${styles.contentImage}`} src={Image} />
          <div className={`${styles.fadeInTop} ${styles.contentDetails}`}>
            <p className="font-text text-sm">{Description}</p>

            <div className="flex justify-around pt-4 px-6">
              {Website && (
                <a href={Website} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className={`text-white text-xl  ${styles.hoveraction} cursor-pointer`}
                  />
                </a>
              )}
              {Facebook && (
                <a href={Facebook} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    className={`text-white text-xl  ${styles.hoveraction} cursor-pointer`}
                  />
                </a>
              )}
              {Instagram && (
                <a href={Instagram} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className={`text-white text-xl  ${styles.hoveraction} cursor-pointer`}
                  />
                </a>
              )}
              {Twitter && (
                <a href={Twitter} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className={`text-white text-xl  ${styles.hoveraction} cursor-pointer`}
                  />
                </a>
              )}
              {Linkedin && (
                <a href={Linkedin} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className={`text-white text-xl  ${styles.hoveraction} cursor-pointer`}
                  />
                </a>
              )}
            </div>
          </div>
          <h3 className="font-heading text-lg text-center text-white">
            {Role}
          </h3>
        </div>
      </div>
    </>
  );
}

export default Sponsorcard;
