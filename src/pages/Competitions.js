import React, { useState, createContext, useContext } from "react";
import styles from "../css/events.module.css";
import Card from "../components/events/event-card";
import line from "../images/events/line gols 9.png";
import lineHz from "../images/events/line gols 8.png";
import Zakir from "../images/events/elan_logo_w.jpeg";
import Footer from "../components/common/Footer";
function Competitions({ block, setblock }) {
  return (
    <div
      id="Comp"
      className="Competitions text-white"
      style={{ background: block === "culti" ? "#1E0735" : "#943066" }}
    >
      <div className={styles.padit}>
        <br />
        <h1 className="font-heading text-white text-4xl md:text-6xl text-center pt-11">
          COMPETITIONS
        </h1>
        <br />
        <div className="flex justify-center align-center m-5">
          <button
            id="Culti"
            className={`border-2 border-white py-3 px-5 font-text text-xl md:text-3xl ${
              block === "culti" ? "bg-compButton" : "none"
            } focus:outline-none`}
            onClick={() => setblock("culti")}
          >
            Culti
          </button>
          <button
            id="Techy"
            className={`border-2 border-white py-3 text-xl md:text-3xl px-5 font-text none  ${
              block === "techy" ? "bg-compButton" : "none"
            } focus:outline-none`}
            onClick={() => setblock("techy")}
          >
            Techy
          </button>
        </div>
        {block === "culti" ? (
          <div id="CultiBlocks">
            <div className="hidden md:block ">
              <div
                className={`container mx-auto grid md:grid-cols-11 ${styles.gridcont}`}
              >
                <Card
                  type="col-span-3 mx-0"
                  text="To be Announced....."
                  image={Zakir}
                />
                <img
                  src={line}
                  alt="imagehere"
                  className="my-auto mx-auto col-span-1 hidden md:block"
                ></img>

                <Card
                  type="col-span-3 mx-0"
                  text="To be Announced....."
                  image={Zakir}
                />
                <img
                  src={line}
                  alt="imagehere"
                  className="my-auto mx-auto col-span-1 hidden md:block"
                ></img>

                <Card
                  type="col-span-3 mx-0"
                  text="To be Announced....."
                  image={Zakir}
                />
              </div>
              <div
                className={`container mx-auto grid md:grid-cols-11 ${styles.gridcont}`}
              >
                <Card
                  type="col-span-3 mx-0"
                  text="To be Announced....."
                  image={Zakir}
                />
                <img
                  src={line}
                  alt="imagehere"
                  className="my-auto mx-auto col-span-1 hidden md:block"
                ></img>

                <Card
                  type="col-span-3 mx-0"
                  text="To be Announced....."
                  image={Zakir}
                />
                <img
                  src={line}
                  alt="imagehere"
                  className="my-auto mx-auto col-span-1 hidden md:block"
                ></img>

                <Card
                  type="col-span-3 mx-0"
                  text="To be Announced....."
                  image={Zakir}
                />
              </div>
              <div
                className={`container mx-auto grid md:grid-cols-11 ${styles.gridcont}`}
              >
                <Card
                  type="col-span-3 mx-0"
                  text="To be Announced....."
                  image={Zakir}
                />
                <img
                  src={line}
                  alt="imagehere"
                  className="my-auto mx-auto col-span-1 hidden md:block"
                ></img>

                <Card
                  type="col-span-3 mx-0"
                  text="To be Announced....."
                  image={Zakir}
                />
                <img
                  src={line}
                  alt="imagehere"
                  className="my-auto mx-auto col-span-1 hidden md:block"
                ></img>

                <Card
                  type="col-span-3 mx-0"
                  text="To be Announced....."
                  image={Zakir}
                />
              </div>
            </div>
            {/* Mobile Part begins */}
            <div className="md:hidden overflow-hidden mx-10 ">
              <div className="grid grid-cols-1 mx-auto">
                <Card
                  type="col-span-3 mx-0"
                  text="To be Announced....."
                  image={Zakir}
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
                  text="To be Announced....."
                  image={Zakir}
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
                  text="To be Announced....."
                  image={Zakir}
                />
              </div>
              <img
                src={lineHz}
                alt="imagehere"
                className=" my-3 mx-auto col-span-1  md:hidden"
              ></img>
              <div className="grid grid-cols-1 mx-auto">
                <Card
                  type="col-span-3 mx-0"
                  text="To be Announced....."
                  image={Zakir}
                />
              </div>
              <img
                src={lineHz}
                alt="imagehere"
                className=" my-3 mx-auto col-span-1  md:hidden"
              ></img>
              <div className="grid grid-cols-1 mx-auto">
                <Card
                  type="col-span-3 mx-0"
                  text="To be Announced....."
                  image={Zakir}
                />
              </div>
              <img
                src={lineHz}
                alt="imagehere"
                className=" my-3 mx-auto col-span-1  md:hidden"
              ></img>
              <div className="grid grid-cols-1 mx-auto">
                <Card
                  type="col-span-3 mx-0"
                  text="To be Announced....."
                  image={Zakir}
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
                  text="To be Announced....."
                  image={Zakir}
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
                  text="To be Announced....."
                  image={Zakir}
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
                  text="To be Announced....."
                  image={Zakir}
                />
              </div>
            </div>
          </div>
        ) : (
          <div id="TechyBlocks">
            <div className="hidden md:block ">
              <div
                className={`container mx-auto grid md:grid-cols-11 ${styles.gridcont}`}
              >
                <Card
                  type="col-span-3 mx-0"
                  text="To be Announced....."
                  image={Zakir}
                />
                <img
                  src={line}
                  alt="imagehere"
                  className="my-auto mx-auto col-span-1 hidden md:block"
                ></img>

                <Card
                  type="col-span-3 mx-0"
                  text="To be Announced....."
                  image={Zakir}
                />
                <img
                  src={line}
                  alt="imagehere"
                  className="my-auto mx-auto col-span-1 hidden md:block"
                ></img>

                <Card
                  type="col-span-3 mx-0"
                  text="To be Announced....."
                  image={Zakir}
                />
              </div>
              <div
                className={`container mx-auto grid md:grid-cols-11 ${styles.gridcont}`}
              >
                <Card
                  type="col-span-3 mx-0"
                  text="To be Announced....."
                  image={Zakir}
                />
                <img
                  src={line}
                  alt="imagehere"
                  className="my-auto mx-auto col-span-1 hidden md:block"
                ></img>

                <Card
                  type="col-span-3 mx-0"
                  text="To be Announced....."
                  image={Zakir}
                />
                <img
                  src={line}
                  alt="imagehere"
                  className="my-auto mx-auto col-span-1 hidden md:block"
                ></img>

                <Card
                  type="col-span-3 mx-0"
                  text="To be Announced....."
                  image={Zakir}
                />
              </div>
            </div>
            {/* Mobile Part begins */}
            <div className="md:hidden overflow-hidden mx-10 ">
              <div className="grid grid-cols-1 mx-auto">
                <Card
                  type="col-span-3 mx-0"
                  text="To be Announced....."
                  image={Zakir}
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
                  text="To be Announced....."
                  image={Zakir}
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
                  text="To be Announced....."
                  image={Zakir}
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
                  text="To be Announced....."
                  image={Zakir}
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
                  text="To be Announced....."
                  image={Zakir}
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
                  text="To be Announced....."
                  image={Zakir}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mx-auto container">
        <Footer />
      </div>
    </div>
  );
}
export default Competitions;
