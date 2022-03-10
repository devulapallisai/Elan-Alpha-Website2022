import React from "react";
import styles from "../../css/events.module.css";
import line from "../../images/events/line gols 9.png";
import lineHz from "../../images/events/line gols 8.png";
// import Zakir from "../../images/events/Coming Soon (1).png";
import { TechyData } from "./TechyData";
import {mTechyData} from "./Techydatamob"
import enig from "../../images/competitions/enigmaa.jpg";
import app from "../../images/competitions/appdev.jpg";
import Card from "./CCard";
function Techy() {
  return (
    <>
      <div className="hidden md:block ">
        <div
          className={`container mx-auto grid md:grid-cols-11 ${styles.gridcont}`}
        >
          {/* <Card
            type="col-span-3 mx-0"
            text="Find the mysterious secret techniques to decrypt the given texts/messages. Clear all the levels in the allotted time to become the ultimate cryptacker. It's a pen and paper event. Each team has to decode a series of crypted messages."
            title="Engima"
            image={enig}
            learnmore={
              "https://docs.google.com/document/d/1wzHGJylOVHgLyCJRqWtxTvXHdsSQmRS9vXzJYL_5YOw/edit?usp=sharing"
            }
            visibility="hidden"
            // submit={item[0]["sublink"]}
            // register={item[0]["reglink"]}
          />
          <img
            src={line}
            alt="imagehere"
            loading="lazy"
            className="my-auto mx-auto col-span-1 hidden md:block"
          ></img>
          <Card
            type="col-span-3 mx-0"
            text="Find the mysterious secret techniques to decrypt the given texts/messages. Clear all the levels in the allotted time to become the ultimate cryptacker. It's a pen and paper event. Each team has to decode a series of crypted messages."
            title="Engima"
            image={enig}
            learnmore={
              "https://docs.google.com/document/d/1wzHGJylOVHgLyCJRqWtxTvXHdsSQmRS9vXzJYL_5YOw/edit?usp=sharing"
            }
            // submit={item[0]["sublink"]}
            // register={item[0]["reglink"]}
          />
          <img
            src={line}
            alt="imagehere"
            loading="lazy"
            className="my-auto mx-auto col-span-1 hidden md:block"
          ></img>
          <Card
            type="col-span-3 mx-0"
            text="This competition challenges participants to create innovative applications on mobile platforms - Android, iOS and Windows Phone. Grab the chance to Influence with creativity and innovation by designing a peculiar app."
            title="App Developement"
            image={app}
            learnmore="https://docs.google.com/document/d/1ie-VxbSXJKeCgXwReFTGrON45q6yJkiJgXBOpd4J-ls/edit?usp=sharing"
            // submit={item[0]["sublink"]}
            // register={item[0]["reglink"]}
          /> */}
          {TechyData.map((item) => (
            <>
              {item[0] && (
                <>
                  <Card
                    type="col-span-3 mx-0"
                    text={item[0]["details"]}
                    title={item[0]["name"]}
                    image={item[0]["img"]}
                    learnmore={item[0]["rules"]}
                    // submit={item[0]["sublink"]}
                    register={item[0]["reglink"]}
                  />
                  <img
                    src={line}
                    alt="imagehere"
                    loading="lazy"
                    className="my-auto mx-auto col-span-1 hidden md:block"
                  ></img>
                </>
              )}
              {item[1] && (
                <>
                  <Card
                    type="col-span-3 mx-0"
                    text={item[1]["details"]}
                    title={item[1]["name"]}
                    image={item[1]["img"]}
                    learnmore={item[1]["rules"]}
                    // submit={item[1]["sublink"]}
                    register={item[1]["reglink"]}
                  />
                  <img
                    src={line}
                    alt="imagehere"
                    loading="lazy"
                    className="my-auto mx-auto col-span-1 hidden md:block"
                  ></img>
                </>
              )}
              {item[2] && (
                <>
                  <Card
                    type="col-span-3 mx-0"
                    text={item[2]["details"]}
                    learnmore={item[2]["rules"]}
                    // submit={item[2]["sublink"]}
                    register={item[2]["reglink"]}
                    title={item[2]["name"]}
                    image={item[2]["img"]}
                  />
                </>
              )}
            </>
          ))}
        </div>
      </div>
      {/* Mobile Part begins */}
      <div className="md:hidden overflow-hidden mx-10 ">
        {mTechyData.map((item) => (
          <>
            <div className="grid grid-cols-1 mx-auto">
              <Card
                type="col-span-3 mx-0"
                text={item[0]["details"]}
                title={item[0]["name"]}
                image={item[0]["img"]}
                learnmore={item[0]["rules"]}
                submit={item[0]["sublink"]}
                register={item[0]["reglink"]}
              />
            </div>
            <img
              src={lineHz}
              alt="imagehere"
              className="my-3 mx-auto col-span-1  md:hidden"
            ></img>
          </>
        ))}
      </div>
    </>
  );
}

export default Techy;
