import React from "react";
import styles from "../../css/events.module.css";
import Card from "../../components/events/event-card";
import line from "../../images/events/line gols 9.png";
import lineHz from "../../images/events/line gols 8.png";
import Zakir from "../../images/events/Coming Soon (1).png";
import { groupedcomp } from "./Cultidata";
function Culti() {
  return (
    <div>
      <div className="hidden md:block ">
        <div
          className={`container mx-auto grid md:grid-cols-11 ${styles.gridcont}`}
        >
          {groupedcomp.map((item) => (
            <>
              {item[0] && (
                <>
                  <Card
                    type="col-span-3 mx-0"
                    text={item[0]["details"]}
                    title={item[0]["name"]}
                    image={item[0]["img"]}
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
        <div className="grid grid-cols-1 mx-auto">
          <Card type="col-span-3 mx-0" text="TBA" image={Zakir} />
        </div>
        <img
          src={lineHz}
          alt="imagehere"
          className="my-3 mx-auto col-span-1  md:hidden"
        ></img>
        <div className="grid grid-cols-1 mx-auto">
          <Card type="col-span-3 mx-0" text="TBA" image={Zakir} />
        </div>
        <img
          src={lineHz}
          alt="imagehere"
          className="my-3 mx-auto col-span-1  md:hidden"
        ></img>
        <div className="grid grid-cols-1 mx-auto">
          <Card type="col-span-3 mx-0" text="TBA" image={Zakir} />
        </div>
      </div>
    </div>
  );
}

export default Culti;
