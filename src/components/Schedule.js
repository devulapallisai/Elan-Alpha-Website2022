import React, { useState } from "react";
import styles from "../css/schedule.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
function Schedule({ setsched }) {
  const [num, setnum] = useState(0);
  console.log(num);
  return (
    <>
      <div className="hidden md:block z-[200000000001] bg-[rgba(36,23,25,0.47)]">
        <div className=" h-screen items-center justify-center flex">
          <div
            className={`w-fit cursor-pointer text-black rounded-xl p-14 pb-4 pt-0  bg-[#F2EFE1] ${styles.border} `}
          >
            <h3 className="text-[#431444] font-heading  text-center text-[1.5rem] m-2">
              SCHEDULE
            </h3>
            <div className="grid grid-cols-3 mb-1 w-fit cursor-pointer text-[1em] md:text-[1.1rem] gap-x-16 gap-y-2 font-heading items-start content-start ">
              <h4
                className={
                  num === 0
                    ? `text-[#F72C25]  col-span-1`
                    : `text-[#431444]  col-span-1`
                }
                onClick={() => {
                  setnum(0);
                }}
              >
                25th MARCH
              </h4>
              <h4
                className={
                  num === 1
                    ? `text-[#F72C25]  col-span-1`
                    : `text-[#431444]  col-span-1`
                }
                onClick={() => {
                  setnum(1);
                }}
              >
                26th MARCH
              </h4>
              <h4
                className={
                  num === 2
                    ? `text-[#F72C25]  col-span-1`
                    : `text-[#431444]  col-span-1`
                }
                onClick={() => {
                  setnum(2);
                }}
              >
                27th MARCH
              </h4>
            </div>
            <hr></hr>
            {num === 0 && (
              <ul className="text-black list-none">
                <li className="font-[400] flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    <a href="https://www.airmeet.com/e/cb8bbb70-ab92-11ec-996e-dbbf4375de2a">Inaguration</a>
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    8:30 - 9:30
                  </span>
                </li>
                <li className="font-[400] flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    <a href="https://www.airmeet.com/e/4b3e5ef0-aa7f-11ec-bb37-4b6c220f21a8">PicElectric</a>
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    9:30 - 10:00
                  </span>
                </li>
                <li className="font-[400] flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    <a href="https://www.airmeet.com/e/9ff8f040-ab83-11ec-8821-f973751c98c5">HoneyWell Webinars</a>
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    10:00 - 13:00
                  </span>
                </li>
                <li className="flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    <a href="https://www.airmeet.com/e/72bdd700-ab9a-11ec-a329-df7122a84c79">Blend360 Webinars</a>
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    13:30 - 14:30
                  </span>
                </li>
                <li className=" flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    <a href="https://www.airmeet.com/e/3beed070-ab9b-11ec-9b5b-ab1357253e4c">HoverRobotix Talk</a>
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    15:30 - 16:00
                  </span>
                </li>
                <li className="flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    <a href="https://www.airmeet.com/e/5f2f5c70-ab9c-11ec-8821-f973751c98c5">MentorX talk</a>
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    16:30 - 17:00
                  </span>
                </li>
                <li className=" flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    <a href="https://www.airmeet.com/e/42dc5890-aa82-11ec-bb37-4b6c220f21a8">Stand Up</a>
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    17:00 - 18:00
                  </span>
                </li>
                <li className=" flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    <a href="https://www.airmeet.com/e/d6da8890-aa7e-11ec-a68e-f74d24b2e40b">Breakfree</a>
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    18:00 - 19:00
                  </span>
                </li>
              </ul>
            )}
            {num === 1 && (
              <ul className="text-black list-none">
                <li className="text-black flex justify-between m-3">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    Paper Presentation
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    9:00 - 12:00
                  </span>
                </li>
                <li className="text-black flex justify-between m-3">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    Nrityanjali
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    12:30 - 14:30
                  </span>
                </li>
                <li className="text-black flex justify-between m-3">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    FilmFare Fiesta
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    15:00 - 16:00
                  </span>
                </li>
                <li className="text-black flex justify-between m-3">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    Glitz and Glamour
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    16:30 - 19:00
                  </span>
                </li>
              </ul>
            )}
            {num === 2 && (
              <ul className="text-black list-none">
                <li className="text-black flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    Shark Tank
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    9:00 - 11:00
                  </span>
                </li>
                <li className="text-black flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    Campus Idol
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    11:30 - 12:30
                  </span>
                </li>
                <li className="text-black flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    Xcubelabs Webinar
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    13:00 - 14:00
                  </span>
                </li>
                <li className="text-black flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    Mr & Ms Elan
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    14:30 - 15:30
                  </span>
                </li>
                <li className="text-black flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    Art Attack & Doodle Art
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    16:00 - 17:00
                  </span>
                </li>
                <li className="text-black flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    Beat Trippers
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">
                    17:00 - 18:00
                  </span>
                </li>
              </ul>
            )}
          </div>
          <div
            className=" cursor-pointer text-black p-2 bg-[#F2EFE1] rounded-r-lg"
            onClick={() => setsched(false)}
          >
            <FontAwesomeIcon
              icon={faWindowClose}
              className="decoration-black"
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <div className="md:hidden z-[20000001] bg-[rgba(36,23,25,0.47)]">
        <div className=" h-screen items-center justify-center flex flex-col-reverse">
          <div
            className={`w-fit cursor-pointer mx:4 rounded-xl p-2 pb-2 pt-0  bg-[#F2EFE1] ${styles.borderM} `}
          >
            <h3 className="text-black font-heading flex items-center justify-between text-center text-[1.2rem] m-2">

              <span className="text-[#431444] text-[1.4rem]">SCHEDULE</span>
              <div
              className="inline cursor-pointer text-gray p-1 px-2 justify-end  bg-[#F2EFE1] rounded-t-lg"
              onClick={() => setsched(false)}
            >
              <FontAwesomeIcon icon={faWindowClose}></FontAwesomeIcon>
            </div>
            </h3>
            
            <div className="grid grid-cols-3 m-3 w-fit cursor-pointer  gap-x-10 gap-y-2 font-heading items-start content-start ">
              <h4
                className={
                  num === 0
                    ? `text-[#F72C25]   col-span-1`
                    : `text-[#431444]  col-span-1`
                }
                onClick={() => {
                  setnum(0);
                }}
              >
                25th MARCH
              </h4>
              <h4
                className={
                  num === 1
                    ? `text-[#F72C25]  col-span-1`
                    : `text-[#431444]  col-span-1`
                }
                onClick={() => {
                  setnum(1);
                }}
              >
                26th MARCH
              </h4>
              <h4
                className={
                  num === 2
                    ? `text-[#F72C25]  col-span-1`
                    : `text-[#431444]  col-span-1`
                }
                onClick={() => {
                  setnum(2);
                }}
              >
                27th MARCH
              </h4>
            </div>
            <hr />
            {num === 0 && (
              <ul className="list-none">
                <li className="font-[400] flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.75rem]">
                    <a href="https://www.airmeet.com/e/cb8bbb70-ab92-11ec-996e-dbbf4375de2a">Inaguration</a>
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.75rem]">
                    8:30 - 9:30
                  </span>
                </li>
                <li className="font-[400] flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.75rem]">
                    <a href="https://www.airmeet.com/e/4b3e5ef0-aa7f-11ec-bb37-4b6c220f21a8">PicElectric</a>
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.75rem]">
                    9:30 - 10:00
                  </span>
                </li>
                <li className="font-[400] flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.75rem]">
                    <a href="https://www.airmeet.com/e/9ff8f040-ab83-11ec-8821-f973751c98c5">HoneyWell Webinars</a>
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.75rem]">
                    10:00 - 13:00
                  </span>
                </li>
                <li className="flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.75rem]">
                    <a href="https://www.airmeet.com/e/72bdd700-ab9a-11ec-a329-df7122a84c79">Blend360 Webinars</a>
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.75rem]">
                    13:30 - 14:30
                  </span>
                </li>
                <li className=" flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.75rem]">
                    <a href="https://www.airmeet.com/e/3beed070-ab9b-11ec-9b5b-ab1357253e4c">HoverRobotix Talk</a>
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.75rem]">
                    15:30 - 16:00
                  </span>
                </li>
                <li className="flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.75rem]">
                    <a href="https://www.airmeet.com/e/5f2f5c70-ab9c-11ec-8821-f973751c98c5">MentorX talk</a>
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.75rem]">
                    16:30 - 17:00
                  </span>
                </li>
                <li className=" flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.75rem]">
                    <a href="https://www.airmeet.com/e/42dc5890-aa82-11ec-bb37-4b6c220f21a8">Stand Up</a>
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.75rem]">
                    17:00 - 18:00
                  </span>
                </li>
                <li className=" flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.75rem]">
                    <a href="https://www.airmeet.com/e/d6da8890-aa7e-11ec-a68e-f74d24b2e40b">Breakfree</a>
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.75rem]">
                    18:00 - 19:00
                  </span>
                </li>
              </ul>
            )}
            {num === 1 && (
              <ul className="text-black list-none">
                <li className="text-black flex justify-between m-3">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.7rem]">
                    Paper Presentation
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.7rem]">
                    9:00 - 12:00
                  </span>
                </li>
                <li className="text-black flex justify-between m-3">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.7rem]">
                    Nrityanjali
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.7rem]">
                    12:30 - 14:30
                  </span>
                </li>
                <li className="text-black flex justify-between m-3">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.7rem]">
                    FilmFare Fiesta
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.7rem]">
                    15:00 - 16:00
                  </span>
                </li>
                <li className="text-black flex justify-between m-3">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.7rem]">
                    Glitz and Glamour
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.7rem]">
                    16:30 - 19:00
                  </span>
                </li>
              </ul>
            )}
            {num === 2 && (
              <ul className="text-black list-none">
                <li className="text-black flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.7rem]">
                    Shark Tank
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.7rem]">
                    9:00 - 11:00
                  </span>
                </li>
                <li className="text-black flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.7rem]">
                    Campus Idol
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.7rem]">
                    11:30 - 12:30
                  </span>
                </li>
                <li className="text-black flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.7rem]">
                    Xcubelabs Webinar
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.7rem]">
                    13:00 - 14:00
                  </span>
                </li>
                <li className="text-black flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.7rem]">
                    Mr & Ms Elan
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.7rem]">
                    14:30 - 15:30
                  </span>
                </li>
                <li className="text-black flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.7rem]">
                    ArtAttack & DoodleArt
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.7rem]">
                    16:00 - 17:00
                  </span>
                </li>
                <li className="text-black flex justify-between m-2">
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.7rem]">
                    Beat Trippers
                  </span>
                  <span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.7rem]">
                    17:00 - 18:00
                  </span>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Schedule;
