import React from "react";
import styles from "../css/sponsors.module.css";
import Halfchakra from "../images/SocialCause/Halfchakra.png";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Contactsection from "../components/sponsors/contactsection";
import Sponsorcard from "../components/sponsors/Sponsorcard";
import lnt from "../images/sponsors/L&T.png";
import arsecium from "../images/sponsors/Arcesium - Copy.png";
import sbi from "../images/sponsors/SBI.png";
import honeywell from "../images/sponsors/Honeywell.png";
import ntpc from "../images/sponsors/ntpc.png";
import celebr8 from "../images/sponsors/celebr8 - Copy.png";
import airmeet from "../images/sponsors/airmeet - Copy.png";
import bigfm from "../images/sponsors/Big Fm 92 - Copy.png";
import ccc from "../images/sponsors/Campus Comedy Club - Copy.png";
import canera from "../images/sponsors/canera bank - Copy.png";
import ces from "../images/sponsors/ces - Copy.png";
import chromatics from "../images/sponsors/chromatics - Copy.png";
import clustera from "../images/sponsors/clustera - Copy.png";
import cfc from "../images/sponsors/code for cause - Copy.png";
import cn from "../images/sponsors/coding ninjas - Copy.png";
import coolwinks from "../images/sponsors/coolwinks - Copy.png";
import dubeats from "../images/sponsors/DUBEATS - Copy.png";
import duexp from "../images/sponsors/DUExpress - Copy.png";
import eleation from "../images/sponsors/eleation - Copy.png";
import esports from "../images/sponsors/esports - Copy.png";
import fanclash from "../images/sponsors/fanclash - Copy.png";
import fh from "../images/sponsors/FASHION HERALD LOGO black - Copy.png";
import fore from "../images/sponsors/fore - Copy.png";
import foxmula from "../images/sponsors/foxmula.png";
import gmc from "../images/sponsors/GMC.png";
import grabon from "../images/sponsors/GrabOn.png";
import hansind from "../images/sponsors/hans india.png";
import indinoir from "../images/sponsors/Indinoir Logo (2).png";
import internshala from "../images/sponsors/internshala.png";
import kaploths from "../images/sponsors/kaploths.jpg";
import notice from "../images/sponsors/Noticebard.png";
import QT from "../images/sponsors/Qwerty thoughts.png";
import school from "../images/sponsors/school.png";
import shubang from "../images/sponsors/Shubang.jpg";
import skolar from "../images/sponsors/SKOLAR.png";
import summachar from "../images/sponsors/summachar.png";
import tt from "../images/sponsors/talking timber.png";
import techienest from "../images/sponsors/techienest.png";
// import tei from "../images/sponsors/the esports india.png";
import ub from "../images/sponsors/union bank.png";
import vedana from "../images/sponsors/vedana.png";
import vm from "../images/sponsors/vishumoney.png";
import wiley from "../images/sponsors/wiley logo black.png";
import yocket from "../images/sponsors/yocket.png";
import yi from "../images/sponsors/youth incorporated.png";
function Sponsors() {
  // let { width, height } = useWindowDimensions();
  return (
    <>
      <div
        className={`${styles.colorit} overflow-x-hidden w-100`}
        style={{ overflowX: "hidden" }}
      >
        <div className={`relative ${styles.colorit}`}>
          <div
            className={`container z-10 mx-auto w-5/6 lg:w-3/4  ${styles.resizeit}`}
            // style={{ width: width < 300 ? "100vw" : "" }}
          >
            <img
              alt="img"
              src={Halfchakra}
              className={styles.flipimageit}
              style={{ filter: "brightness(150%)" }}
            />
          </div>
          <h1 className="font-heading absolute bottom-20 text-center lg:bottom-72 w-full d-flex text-3xl sm:bottom-48 md:text-6xl text-white">
            2021 Sponsors
          </h1>
          <h1 className="font-text font-black absolute bottom-4 text-center w-full d-flex text-lg sm:bottom-20 sm:text-xl md:text-3xl lg:bottom-28 text-white">
            <img
              src={lnt}
              alt="Imag"
              style={{ width: "35vw", margin: "auto" }}
            />
            {/* <br /> */}
            Title Sponsor
          </h1>
        </div>
        <br />
        {/* Here comes the sponsors part */}
        <div className="sponsors max-w-[70vw] mx-auto justify-center items-center">
          <Sponsorcard
            Title="Arcesium"
            // Description="Sample Descritption"
            Image={arsecium}
          />
          <Sponsorcard
            Title="celebr8"
            // Description="Sample Descritption"
            Image={celebr8}
          />
          <Sponsorcard
            Title="SBI"
            // Description="Sample Descritption"
            Image={sbi}
          />
          <Sponsorcard
            Title="Honeywell"
            // Description="Sample Descritption"
            Image={honeywell}
          />
          <Sponsorcard
            Title="NTPC"
            // Description="Sample Descritption"
            Image={ntpc}
          />
          <Sponsorcard
            Title="Airmeet"
            // Description="Sample Descritption"
            Image={airmeet}
          />
          <Sponsorcard
            Title="Big FM"
            // Description="Sample Descritption"
            Image={bigfm}
          />
          <Sponsorcard
            Title="Campus Comedy Club"
            // Description="Sample Descritption"
            Image={ccc}
          />
          <Sponsorcard
            Title="Canara BAnk"
            // Description="Sample Descritption"
            Image={canera}
          />
          <Sponsorcard
            Title="Campus Events"
            // Description="Sample Descritption"
            Image={ces}
          />
          <Sponsorcard
            Title="Chromatics"
            // Description="Sample Descritption"
            Image={chromatics}
          />
          <Sponsorcard
            Title="Clustera"
            // Description="Sample Descritption"
            Image={clustera}
          />
          <Sponsorcard
            Title="Code for Cause"
            // Description="Sample Descritption"
            Image={cfc}
          />
          <Sponsorcard
            Title="Coding Ninjas"
            // Description="Sample Descritption"
            Image={cn}
          />
          <Sponsorcard
            Title="Coolwinks"
            // Description="Sample Descritption"
            Image={coolwinks}
          />
          <Sponsorcard
            Title="DU Beats"
            // Description="Sample Descritption"
            Image={dubeats}
          />
          <Sponsorcard
            Title="DU Express"
            // Description="Sample Descritption"
            Image={duexp}
          />
          <Sponsorcard
            Title="Eleation"
            // Description="Sample Descritption"
            Image={eleation}
          />
          <Sponsorcard
            Title="The Esports India"
            // Description="Sample Descritption"
            Image={esports}
          />
          <Sponsorcard
            Title="Fanclash"
            // Description="Sample Descritption"
            Image={fanclash}
          />
          <Sponsorcard
            Title="Fashion Herald"
            // Description="Sample Descritption"
            Image={fh}
          />
          <Sponsorcard
            Title="Fore"
            // Description="Sample Descritption"
            Image={fore}
          />
          <Sponsorcard
            Title="Foxmula"
            // Description="Sample Descritption"
            Image={foxmula}
          />
          <Sponsorcard
            Title="Give My Certificate"
            // Description="Sample Descritption"
            Image={gmc}
          />
          <Sponsorcard
            Title="Grabon"
            // Description="Sample Descritption"
            Image={grabon}
          />
          <Sponsorcard
            Title="Hans India"
            // Description="Sample Descritption"
            Image={hansind}
          />
          <Sponsorcard
            Title="Indinoir"
            // Description="Sample Descritption"
            Image={indinoir}
          />
          <Sponsorcard
            Title="Internshala"
            // Description="Sample Descritption"
            Image={internshala}
          />
          <Sponsorcard
            Title="Kaploths"
            // Description="Sample Descritption"
            Image={kaploths}
          />
          <Sponsorcard
            Title="Notice Board"
            // Description="Sample Descritption"
            Image={notice}
          />
          <Sponsorcard
            Title="Qwerty Thoughts"
            // Description="Sample Descritption"
            Image={QT}
          />
          <Sponsorcard
            Title="Celebrity School"
            // Description="Sample Descritption"
            Image={school}
          />
          <Sponsorcard
            Title="Shubang"
            // Description="Sample Descritption"
            Image={shubang}
          />
          <Sponsorcard
            Title="Skolar"
            // Description="Sample Descritption"
            Image={skolar}
          />
          <Sponsorcard
            Title="Summachar"
            // Description="Sample Descritption"
            Image={summachar}
          />
          <Sponsorcard
            Title="Talking Timber"
            // Description="Sample Descritption"
            Image={tt}
          />
          <Sponsorcard
            Title="Techienest"
            // Description="Sample Descritption"
            Image={techienest}
          />
          <Sponsorcard
            Title="Union Bank"
            // Description="Sample Descritption"
            Image={ub}
          />
          <Sponsorcard
            Title="Vedana"
            // Description="Sample Descritption"
            Image={vedana}
          />
          <Sponsorcard
            Title="Vishu Money"
            // Description="Sample Descritption"
            Image={vm}
          />
          <Sponsorcard
            Title="Wiley"
            // Description="Sample Descritption"
            Image={wiley}
          />
          <Sponsorcard
            Title="Yocket"
            // Description="Sample Descritption"
            Image={yocket}
          />
          <Sponsorcard
            Title="Youth Incorporated"
            // Description="Sample Descritption"
            Image={yi}
          />
        </div>
      </div>
      <div
        className={`${styles.colorit} contactsectioninpage relative bottom-0 w-full`}
      >
        <br />
        <br />
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
