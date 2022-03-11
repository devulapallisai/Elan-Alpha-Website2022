import React from "react";
import styles from "../css/cryptex.module.css";
// import stylessponsor from "../css/sponsors.module.css";
import logo from "../images/cryptex/tex logo.png";
import stylesevents from "../css/events.module.css";
import Contact from "../components/cryptex/cryptexcontact";

function Cryptex() {
  return (
    <div className="Events  bg-events text-white">
      <div className={styles.padit}>
        <h1 className="font-heading text-white text-4xl md:text-6xl text-center pt-12 mb-3">
          Cryptex
        </h1>
      </div>
      <div className="container lg:w-3/4 md:4/5 mx-auto my-auto">
        <div
          className={`ml-2 mr-2 my-auto mb-5 pb-5 xl:ml-40 xl:mr-40 ${styles.borderitim}`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-5 mx-auto lg:flex">
            <div className="md:col-span-1 lg:col-span-2 mx-auto p-4 py-4 lg:pr-0 lg:pl-0 lg:py-6 my-auto ">
              <img src={logo} alt="cryptex"></img>
            </div>
            <div className=" md:col-span-1 lg:col-span-3 mx-auto p-4 py-4 lg:pr-6 lg:pl-0 lg:py-6 my-auto text-center font-text">
              <span className="font-bold font-text md:text-2xl text-lg">
                {" "}
                Mark your calendars for April 1, 2022!{" "}
              </span>
              <br />
              <br />
              Cryptex is one of India’s largest Online Treasure Hunts (OTH),
              conducted annually by the students of IIT-Hyderabad. <br />
              The participants go through gruelling puzzles designed to test
              their deduction skills and intuition over a period of 54 hours.
              The questions are a series of cryptic images/videos/audio clips
              (any file, really). Head on over to our Instagram page for some
              example questions.
              <br /> <br />
              The first three players to beat all the levels are announced as
              the winners of the event.
              <br />
              Clear your calendars and put your thinking caps on for this
              intense but fun weekend! <br />
              You can pre-register for the event at: cryptex.elan.org.in <br />
              ps. Prizes worth 30,000 INR are up for grabs <br />
            </div>
          </div>
          <div className={`${stylesevents.merchbutton} m-2`}>
            <a
              href="https://cryptex.elan.org.in"
              target="_blank"
              rel="noreferrer"
              className={`${stylesevents.button} font-text mt-3 text-white`}
            >
              Register Here
            </a>
          </div>
        </div>
      </div>
      <div className={` contactsectioninpage relative bottom-0 w-full`}>
        <br />
        <br />
        <div className="text-white font-text font-black text-xl md:text-4xl text-center">
          Contact Us
        </div>
        <br />
        <Contact />
      </div>
    </div>
  );
}

export default Cryptex;
