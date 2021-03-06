import React from "react";
import styles from "../css/events.module.css";
import Card from "../components/events/event-card";
import line from "../images/events/line gols 9.png";
import lineHz from "../images/events/line gols 8.png";
import Zakir from "../images/events/Coming Soon (1).png";
import Footer from "../components/common/Footer";
import Workshops from "../images/events/workshops.jpg";
import Proshows from "../images/events/proshows.jpg";

function Events() {
  return (
    <div className="Events min-h-screen bg-events text-white">
      <div className={styles.padit}>
        <h1 className="font-heading text-white text-4xl md:text-6xl text-center pt-11">
          EVENTS
        </h1>
        {/* <br /> */}
        <div className="hidden md:block">
          <div className={`container mx-auto grid md:grid-cols-12 mt-6`}>
            {/* <Card
              type="col-span-3 mx-0"
              text="TBA"
              button={true}
              image={Zakir}
              buttonText="PROSHOWS"
            />
            <img
              src={line}
              alt="imagehere"
              className="my-auto mx-auto col-span-1 hidden md:block"
            ></img> */}

            <Card
              type="col-span-4 mx-0"
              text="Take a break from the grind and witness amazing shows brought to you at home for free! Fun and Enjoyment has no end! Register for an exhilarating experience now!"
              button={true}
              image={Proshows}
              buttonText="PROSHOWS"
              hlink="/proshows"
            />
            <img
              src={line}
              alt="imagehere"
              className="my-auto mx-auto col-span-1 hidden md:block"
            ></img>

            <Card
              type="col-span-4 mx-0"
              text="Learning should never stop, and it's time to get at par with all those people showing off their technical skills. Join our Workshop Series to sharpen your skills and keep yourself updated with the latest developments in technology."
              button={true}
              image={Workshops}
              buttonText="WORKSHOPS"
              a={true}
            />
          </div>
        </div>
        {/* Mobile Part begins */}
        <div className="md:hidden overflow-hidden mx-10">
          <div className="grid grid-cols-1 mx-auto">
            <Card
              type="col-span-3 mx-0"
              text="Take a break from the grind and witness amazing shows brought to you at home for free! Fun and Enjoyment has no end! Register for an exhilarating experience now!"
              button={true}
              image={Proshows}
              buttonText="PROSHOWS"
              hlink="/proshows"
            />
          </div>
          <img
            src={lineHz}
            alt="imagehere"
            className="my-3 mx-auto col-span-1  md:hidden"
          ></img>
          <div className="grid grid-cols-1 mx-auto">
            <Card
              type="col-span-3 mx-0"
              text="Learning should never stop, and it's time to get at par with all those people showing off their technical skills. Join our Workshop Series to sharpen your skills and keep yourself updated with the latest developments in technology."
              button={true}
              image={Workshops}
              buttonText="WORKSHOPS"
              a={true}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Events;
