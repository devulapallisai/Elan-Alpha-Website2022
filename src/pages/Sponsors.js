import React from "react";
import styles from "../css/sponsors.module.css";
import Halfchakra from "../images/SocialCause/Halfchakra.png";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Contactsection from "../components/sponsors/contactsection";
function Sponsors() {
  let { width, height } = useWindowDimensions();
  return (
    <>
      <div className={`${styles.colorit} overflow-x-hidden`}>
        <div className={`relative ${styles.colorit}`}>
          <div
            className={`container z-10 mx-auto w-5/6 lg:w-3/4  ${styles.resizeit}`}
            style={{ width: width < 300 ? "100vw" : "" }}
          >
            <img
              alt="img"
              src={Halfchakra}
              className={styles.flipimageit}
              style={{ filter: "brightness(150%)" }}
            />
          </div>
          <h1 className="font-heading absolute bottom-12 text-center lg:bottom-48 w-full d-flex text-3xl sm:bottom-28 md:text-8xl text-white">
            Our Sponsors
          </h1>
          <h1 className="font-text font-black absolute bottom-4 text-center w-full d-flex text-xl sm:bottom-16 md:text-4xl lg:bottom-32 text-white">
            Title Sponsor
          </h1>
        </div>
        <br />
        {/* Here comes the sponsors part */}
        <div className="sponsors w-screen">
          <div class={`${styles.container1}`}>
            <div class={`${styles.content}`}>
              <div class={`${styles.contentOverlay}`}></div>
              <img
                alt="img"
                class={`${styles.contentImage}`}
                src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"
              />
              <div class={`${styles.fadeInTop} ${styles.contentDetails}`}>
                <h3>This is a title</h3>
                <p>This is a short description</p>
              </div>
            </div>
          </div>
          <div class={`${styles.container1}`}>
            <div class={`${styles.content}`}>
              <div class={`${styles.contentOverlay}`}></div>
              <img
                alt="img"
                class={`${styles.contentImage}`}
                src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"
              />
              <div class={`${styles.fadeInTop} ${styles.contentDetails}`}>
                <h3>This is a title</h3>
                <p>This is a short description</p>
              </div>
            </div>
          </div>
          <div class={`${styles.container1}`}>
            <div class={`${styles.content}`}>
              <div class={`${styles.contentOverlay}`}></div>
              <img
                alt="img"
                class={`${styles.contentImage}`}
                src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"
              />
              <div class={`${styles.fadeInTop} ${styles.contentDetails}`}>
                <h3>This is a title</h3>
                <p>This is a short description</p>
              </div>
            </div>
          </div>
          <div class={`${styles.container1}`}>
            <div class={`${styles.content}`}>
              <div class={`${styles.contentOverlay}`}></div>
              <img
                alt="img"
                class={`${styles.contentImage}`}
                src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"
              />
              <div class={`${styles.fadeInTop} ${styles.contentDetails}`}>
                <h3 className="font-heading text-lg">This is a title</h3>
                <p className="font-text text-sm overflow-y-scroll">
                  This is a short description Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Voluptatem quisquam ad alias
                  distinctio accusamus qui at adipisci illum illo expedita
                  aspernatur, culpa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.colorit} contactsectioninpage relative bottom-0 w-full`}
      >
        <div className="text-white font-text font-black text-xl md:text-4xl text-center">
          Contact Us
        </div>
        <br />
        <Contactsection />
      </div>
    </>
  );
}

export default Sponsors;
