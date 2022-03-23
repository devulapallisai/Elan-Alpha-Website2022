import React, { useState } from "react";
import styles from "../css/sponsors.module.css";
import Halfchakra from "../images/SocialCause/Halfchakra.png";
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
import ub from "../images/sponsors/union bank.png";
import vedana from "../images/sponsors/vedana.png";
import Sponsors2022 from "../components/sponsors/Sponsorsdata";
import vm from "../images/sponsors/vishumoney.png";
import wiley from "../images/sponsors/wiley logo black.png";
import yocket from "../images/sponsors/yocket.png";
import yi from "../images/sponsors/youth incorporated.png";
import Hero from "../images/sponsors/2022/Hero.png";
function Sponsors() {
  const [year, setyear] = useState("2022");
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
          <h1 className="font-heading absolute bottom-[5.5rem] text-center lg:bottom-72 w-full d-flex text-3xl sm:bottom-48 md:text-6xl text-white">
            {year === "2021" ? "2021" : ""} Sponsors
          </h1>
          <h1 className="font-text font-black absolute bottom-4 text-center w-full d-flex text-lg sm:bottom-18 sm:text-xl md:text-3xl lg:bottom-28 text-white">
            {year === "2022" ? (
              <img
                src={Hero}
                alt="Imag"
                style={{ width: "35vw", margin: "auto" }}
              />
            ) : (
              <img
                src={lnt}
                alt="Imag"
                style={{ width: "35vw", margin: "auto" }}
              />
            )}
            {/* <br /> */}
            Title Sponsor
          </h1>
        </div>
        <br />
        {/* Here comes the sponsors part */}
        <div className="sponsors max-w-[70vw] mx-auto justify-center items-center">
          <div className="block">
            <button
              className={`border-2 border-white py-3 px-5 font-text text-xl md:text-3xl bg-compButton focus:outline-none text-white`}
              onClick={() => {
                year === "2022" ? setyear("2021") : setyear("2022");
              }}
            >
              Sponsors - {year}
            </button>
          </div>
          {year === "2022" ? (
            <>
              {Sponsors2022.map((item) => (
                <Sponsorcard
                  Role={item.Role}
                  Description={item.Description}
                  Image={item.Image}
                  Website={item.Website}
                  Facebook={item.Facebook}
                  Instagram={item.Instagram}
                  Twitter={item.Twitter}
                  Linkedin={item.Linkedin}
                />
              ))}
            </>
          ) : (
            <>
              <Sponsorcard
                Role="arcesium"
                // Description="Sample Descritption"
                Image={arsecium}
              />
              <Sponsorcard
                Role="celebr8"
                // Description="Sample Descritption"
                Image={celebr8}
              />
              <Sponsorcard
                Role="SBI"
                // Description="Sample Descritption"
                Image={sbi}
              />
              <Sponsorcard
                Role="Honeywell"
                // Description="Sample Descritption"
                Image={honeywell}
              />
              <Sponsorcard
                Role="NTPC"
                // Description="Sample Descritption"
                Image={ntpc}
              />
              <Sponsorcard
                Role="Airmeet"
                // Description="Sample Descritption"
                Image={airmeet}
              />
              <Sponsorcard
                Role="Big FM"
                // Description="Sample Descritption"
                Image={bigfm}
              />
              <Sponsorcard
                Role="Campus Comedy Club"
                // Description="Sample Descritption"
                Image={ccc}
              />
              <Sponsorcard
                Role="Canara BAnk"
                // Description="Sample Descritption"
                Image={canera}
              />
              <Sponsorcard
                Role="Campus Events"
                // Description="Sample Descritption"
                Image={ces}
              />
              <Sponsorcard
                Role="Chromatics"
                // Description="Sample Descritption"
                Image={chromatics}
              />
              <Sponsorcard
                Role="Clustera"
                // Description="Sample Descritption"
                Image={clustera}
              />
              <Sponsorcard
                Role="Code for Cause"
                // Description="Sample Descritption"
                Image={cfc}
              />
              <Sponsorcard
                Role="Coding Ninjas"
                // Description="Sample Descritption"
                Image={cn}
              />
              <Sponsorcard
                Role="Coolwinks"
                // Description="Sample Descritption"
                Image={coolwinks}
              />
              <Sponsorcard
                Role="DU Beats"
                // Description="Sample Descritption"
                Image={dubeats}
              />
              <Sponsorcard
                Role="DU Express"
                // Description="Sample Descritption"
                Image={duexp}
              />
              <Sponsorcard
                Role="Eleation"
                // Description="Sample Descritption"
                Image={eleation}
              />
              <Sponsorcard
                Role="The Esports India"
                // Description="Sample Descritption"
                Image={esports}
              />
              <Sponsorcard
                Role="Fanclash"
                // Description="Sample Descritption"
                Image={fanclash}
              />
              <Sponsorcard
                Role="Fashion Herald"
                // Description="Sample Descritption"
                Image={fh}
              />
              <Sponsorcard
                Role="Fore"
                // Description="Sample Descritption"
                Image={fore}
              />
              <Sponsorcard
                Role="Foxmula"
                // Description="Sample Descritption"
                Image={foxmula}
              />
              <Sponsorcard
                Role="Give My Certificate"
                // Description="Sample Descritption"
                Image={gmc}
              />
              <Sponsorcard
                Role="Grabon"
                // Description="Sample Descritption"
                Image={grabon}
              />
              <Sponsorcard
                Role="Hans India"
                // Description="Sample Descritption"
                Image={hansind}
              />
              <Sponsorcard
                Role="Indinoir"
                // Description="Sample Descritption"
                Image={indinoir}
              />
              <Sponsorcard
                Role="Internshala"
                // Description="Sample Descritption"
                Image={internshala}
              />
              <Sponsorcard
                Role="Kaploths"
                // Description="Sample Descritption"
                Image={kaploths}
              />
              <Sponsorcard
                Role="Notice Board"
                // Description="Sample Descritption"
                Image={notice}
              />
              <Sponsorcard
                Role="Qwerty Thoughts"
                // Description="Sample Descritption"
                Image={QT}
              />
              <Sponsorcard
                Role="Celebrity School"
                // Description="Sample Descritption"
                Image={school}
              />
              <Sponsorcard
                Role="Shubang"
                // Description="Sample Descritption"
                Image={shubang}
              />
              <Sponsorcard
                Role="Skolar"
                // Description="Sample Descritption"
                Image={skolar}
              />
              <Sponsorcard
                Role="Summachar"
                // Description="Sample Descritption"
                Image={summachar}
              />
              <Sponsorcard
                Role="Talking Timber"
                // Description="Sample Descritption"
                Image={tt}
              />
              <Sponsorcard
                Role="Techienest"
                // Description="Sample Descritption"
                Image={techienest}
              />
              <Sponsorcard
                Role="Union Bank"
                // Description="Sample Descritption"
                Image={ub}
              />
              <Sponsorcard
                Role="Vedana"
                // Description="Sample Descritption"
                Image={vedana}
              />
              <Sponsorcard
                Role="Vishu Money"
                // Description="Sample Descritption"
                Image={vm}
              />
              <Sponsorcard
                Role="Wiley"
                // Description="Sample Descritption"
                Image={wiley}
              />
              <Sponsorcard
                Role="Yocket"
                // Description="Sample Descritption"
                Image={yocket}
              />
              <Sponsorcard
                Role="Youth Incorporated"
                // Description="Sample Descritption"
                Image={yi}
              />
            </>
          )}
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
