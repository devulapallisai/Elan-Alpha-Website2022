import React, { useEffect, useState } from "react";
import Card from "../components/proshows/Proshow-card";
import Zakir from "../images/events/zakir.jpeg";
// import styles from '../css/proshow.module.css'
import MCard from "../components/proshows/Mobile-card";
import Mandala from "../images/proshows/Mandala.png";

import { gsap } from "gsap";
import { rotate } from "tailwindcss/defaultTheme";
function ProshowList() {
  const [num, setnum] = useState(0);
  function FirstCLick() {
    console.log(num);
    if (num === 0) {
      gsap.to(".Mand", {
        css: {
          bottom: "0vh",
          left: "-25vw",
          transform: "rotate(-170deg)",
        },
        duration: 3,
        rotation: 170,
      });
    }
    if (num === 1) {
      gsap.to(".Mand", {
        css: {
          bottom: "-50vh",
          left: "25vw",
          transform: "rotate(90deg)",
        },
        duration: 3,
        rotation: 170,
      });
    } else if (num === 2) {
      gsap.to(".Mand", {
        css: {
          left: "75vw",
          bottom: "0vh",
          transform: "rotate(-170deg)",
        },
        duration: 3,
        rotation: 170,
      });
    } else if (num === 3) {
      gsap.to(".Mand", {
        css: {
          bottom: "50vh",
          left: "25vw",
          transform: "rotate(170deg)",
        },
        duration: 3,
        rotation: 170,
      });
    }
  }
  return (
    <>
      <div className="hidden md:block ">
        <div className=" fixed Proshow flex justify-center overflow:hidden items-center h-screen w-full bg-events m:0 z-2">
          <div className="Mand absolute w-[100vh] overflow:hidden  -left-[25vw] -z-1">
            <img
              src={Mandala}
              alt=""
              onClick={() => {
                let t;
                t = (num + 1) % 4;
                setnum(t);
                FirstCLick();
              }}
            />
          </div>

          <Card
            image={Zakir}
            description="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image.  "
          />
        </div>
      </div>
      {/* // Mobile view */}
      <div className=" md:hidden fixed Proshow flex justify-center overflow:hidden items-center h-screen bg-events">
        <MCard
          image={Zakir}
          description="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image.  "
        />
      </div>
    </>
  );
}

export default ProshowList;
