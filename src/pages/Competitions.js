import React from "react";
import styles from "../css/events.module.css";

import Footer from "../components/common/Footer";
import Culti from "../components/competitions/Culti";
import Techy from "../components/competitions/Techy";
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
        <div className="flex justify-center align-center mt-5">
          {block === "culti" ? (
            <a
              href="https://forms.gle/UyviFnfhNxKBa9uUA"
              target="_blank"
              rel="noreferrer"
              id="Culti"
              className={`border-2 border-white py-3 px-5 font-text text-xl md:text-3xl ${"bg-compButton"} focus:outline-none`}
            >
              Register
            </a>
          ) : (
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSckdTb1YRudXIR7Froydu9TaVBxvFL-JbAuYhGgz9J04Dp90A/viewform?usp=sf_link"
              target="_blank"
              rel="noreferrer"
              id="Culti"
              className={`border-2 border-white py-3 px-5 font-text text-xl md:text-3xl ${"bg-compButton"} focus:outline-none`}
            >
              Register
            </a>
          )}
        </div>
        {block === "culti" ? (
          <div id="CultiBlocks">
            <Culti />
          </div>
        ) : (
          <div id="TechyBlocks">
            <Techy />
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
