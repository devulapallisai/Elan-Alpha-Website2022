import React, { useEffect } from "react";
import styles from "../../css/sponsors.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Sponsorcard({ Title, Description, Image }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div
        class={`${styles.container1}`}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div class={`${styles.content}`}>
          <div class={`${styles.contentOverlay}`}></div>
          <img alt="img" class={`${styles.contentImage}`} src={Image} />
          <div class={`${styles.fadeInTop} ${styles.contentDetails}`}>
            <h3 className="font-heading text-lg">{Title}</h3>
            <p className="font-text text-sm">{Description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sponsorcard;
