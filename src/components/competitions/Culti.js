import React from "react";
import styles from "../../css/events.module.css";
import Card from "./CCard";
import line from "../../images/events/line gols 9.png";
import lineHz from "../../images/events/line gols 8.png";
import { groupedcomp } from "./Cultidata";
import { groupedcompmob } from "./Cultidatamob";
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
                    learnmore={item[0]["rules"]}
                    submit={item[0]["sublink"]}
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
                    submit={item[1]["sublink"]}
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
                    submit={item[2]["sublink"]}
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
        {groupedcompmob.map((item) => (
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
    </div>
  );
}

export default Culti;
