import React from "react";
import { gsap } from "gsap";
import styles from "../../css/Homepage2.module.css";
import Lanterntop from "../../images/Lantern1.png";
import Lant from "../../images/Homepage/Lanterntop.png";
import Skyline from "../../images/Homepage/Skyline3copy.png";
import BackgroundI from "../../images/Homepage/window_webcopy.png";
function Secondslide() {
  return (
    <>
      <div
        className={`${styles.Slide} relative z-0 h-screen w-screen hidden md:block z-50`}
      >
        <img
          src={BackgroundI}
          className={`${styles.imagebackgr} z-20`}
          alt="Imag"
          width="100vw"
          height="100vh"
        />
        <div className="absolute top-14 right-24">
          <img src={Lanterntop} alt="Imag" className={styles.img} />
        </div>
        <div className="absolute top-0 right-40">
          <img src={Lanterntop} alt="Imag" className={styles.img1} />
        </div>
        <div className="absolute left-16 top-40">
          <img src={Lant} alt="Imag" className={styles.img2} />
        </div>
        <div className="absolute left-28 top-16">
          <img src={Lant} alt="Imag" className={styles.img3} />
        </div>
        <div className="absolute left-48 top-28">
          <img src={Lant} alt="Imag" className={styles.img4} />
        </div>
        <div className={`${styles.zInde} w-screen absolute bottom-0`}>
          <img src={Skyline} alt="Imag" className={styles.zoomimg} />
        </div>
        <div className="flex justify-center">
          <div
            className={`absolute top-40 xl:top-48 text-sm flex justify-center ${styles.texthere}`}
          >
            <div className="flex flex-col">
              <div className="font-heading text-3xl 2xl:text-5xl text-center pb-2">Heading</div>
              <div className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo libero commodi voluptatem ad tenetur aspernatur, molestiae veritatis maxime, iure earum est. Eligendi explicabo beatae, doloribus tenetur ea velit rem magnam laborum laboriosam sit sapiente alias nihil aliquid eveniet, tempora a officiis dolore ullam rerum quam commodi labore vero! Magnam modi non eos, ipsa sed omnis laboriosam numquam iure architecto aperiam voluptatum laborum atque dolor aliquid ad quae quaerat. Consequuntur molestiae deserunt ipsam porro quas laboriosam sed unde placeat. Odit earum accusamus, recusandae exercitationem, dolorem aliquam, dolor similique harum dolores dignissimos aspernatur mollitia ab sint. Dignissimos, facilis nemo. Magnam, quam ut!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Secondslide;
