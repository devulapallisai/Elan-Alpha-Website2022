import React, { useState } from "react";
import styles from "../css/schedule.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
function Schedule({ setsched }) {
  const [num, setnum] = useState(0);
  console.log(num);
  return (

    <>
      <div className='hidden md:block z-[20000001]'>
        <div className=' h-screen items-center justify-center flex'>
          <div className={`w-fit cursor-pointer text-black rounded-xl p-14 pb-4 pt-0  bg-[#F2EFE1] ${styles.border} `}>
            <h3 className='text-[#431444] font-heading  text-center text-[1.2rem] m-2'>SCHEDULE</h3>
            <div className="grid grid-cols-3 mb-1 w-fit cursor-pointer text-[1em] md:text-[1.1rem] gap-x-16 gap-y-2 font-heading items-start content-start ">
              <h4 className={
                num==0 ? `text-[#F72C25]  col-span-1` 
              : `text-[#431444]  col-span-1`} onClick={() => {
                setnum(0)
              }}>25th MARCH</h4>
              <h4 className={
                num==1 ? `text-[#F72C25]  col-span-1` 
              : `text-[#431444]  col-span-1`} onClick={() => {
                setnum(1)
              }}>26th MARCH</h4>
              <h4 className={
                num==2 ? `text-[#F72C25]  col-span-1` 
              : `text-[#431444]  col-span-1`} onClick={() => {
                setnum(2)
              }}>27th MARCH</h4>
            </div>
            <hr></hr>
            {num == 0 && <ul className="text-black list-none">
              <li className="font-[400] flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">HoneyWell Webinars</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">10:00 - 13:00</span></li>
              <li className="flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">Hero Webinars</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">14:30 - 15:30</span></li>
              <li className=" flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">HoverRobotix Talk</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">16:00 - 16:30</span></li>
              <li className="flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">MentorX talk</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">16:30 - 17:00</span></li>
              <li className=" flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">Stand Up</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">17:00 - 18:00</span></li>
              <li className=" flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">Breakfree</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">18:00 - 19:00</span></li>
            </ul>}
            {
              num == 1 && <ul className="text-black list-none">
                <li className="text-black flex justify-between m-3"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">Paper Presentation</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading" >9:00 - 12:00</span></li>
                <li className="text-black flex justify-between m-3"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">Nrityanjali</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading" >12:30 - 14:30</span></li>
                <li className="text-black flex justify-between m-3"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">FilmFare Fiesta</span ><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading" >15:00 - 16:00</span></li>
                <li className="text-black flex justify-between m-3"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">Glitz and Glamour</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading" >16:30 - 19:00</span></li>
              </ul>
            }
            {
              num == 2 && <ul className="text-black list-none">
                <li className="text-black flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">Shark Tank</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">9:00 - 11:00</span></li>
                <li className="text-black flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">Campus Idol</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">11:30 - 12:30</span></li>
                <li className="text-black flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">Xcubelabs Webinar</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">13:00 - 14:00</span></li>
                <li className="text-black flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">Mr & Ms Elan</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">14:30 - 15:30</span></li>
                <li className="text-black flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">Art Attack & Doodle Art</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">16:00 - 17:00</span></li>
                <li className="text-black flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">Beat Trippers</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading">17:00 - 18:00</span></li>
              </ul>
            }


          </div>
          <div className=' cursor-pointer text-black p-2 bg-[#F2EFE1] rounded-r-lg' onClick={() => setsched(false)}>
            <FontAwesomeIcon icon={faWindowClose} className='decoration-black'></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <div className='md:hidden z-[20000001]'>
        <div className=' h-screen items-center justify-center flex flex-col-reverse'>
        <div className={`w-fit cursor-pointer mx:4 rounded-xl p-2 pb-2 pt-0  bg-[#F2EFE1] ${styles.borderM} `}>
            <h3 className='text-black font-heading text-center text-[1.2rem] m-2'>SCHEDULE</h3>
            <div className="grid grid-cols-3 m-3 w-fit cursor-pointer  gap-x-10 gap-y-2 font-heading items-start content-start ">
            <h4 className={
                num==0 ? `text-[#F72C25]  col-span-1` 
              : `text-[#431444]  col-span-1`} onClick={() => {
                setnum(0)
              }}>25th MARCH</h4>
              <h4 className={
                num==1 ? `text-[#F72C25]  col-span-1` 
              : `text-[#431444]  col-span-1`} onClick={() => {
                setnum(1)
              }}>26th MARCH</h4>
              <h4 className={
                num==2 ? `text-[#F72C25]  col-span-1` 
              : `text-[#431444]  col-span-1`} onClick={() => {
                setnum(2)
              }}>27th MARCH</h4>
            </div>
            <hr />
            {num == 0 && <ul className="list-none">
              <li className="text-black flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">HoneyWell Webinars</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">10:00 - 13:00</span></li>
              <li className="text-black flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">Hero Webinars</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">14:30 - 15:30</span></li>
              <li className="text-black flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">HoverRobotix Talk</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">16:00 - 16:30</span></li>
              <li className="text-black flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">MentorX talk</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">16:30 - 17:00</span></li>
              <li className="text-black flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">Stand Up</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">17:00 - 18:00</span></li>
              <li className="text-black flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">Breakfree</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">18:00 - 19:00</span></li>
            </ul>} 
            {
              num == 1 && <ul className="text-black list-none">
                <li className="text-black flex justify-between m-3"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">Paper Presentation</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">9:00 - 12:00</span></li>
                <li className="text-black flex justify-between m-3"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">Nrityanjali</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">12:30 - 14:30</span></li>
                <li className="text-black flex justify-between m-3"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">FilmFare Fiesta</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">15:00 - 16:00</span></li>
                <li className="text-black flex justify-between m-3"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">Glitz and Glamour</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">16:30 - 19:00</span></li>
              </ul>
            }
            {
              num == 2 && <ul className="text-black list-none">
                <li className="text-black flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">Shark Tank</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">9:00 - 11:00</span></li>
                <li className="text-black flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">Campus Idol</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">11:30 - 12:30</span></li>
                <li className="text-black flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">Xcubelabs Webinar</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">13:00 - 14:00</span></li>
                <li className="text-black flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]" >Mr & Ms Elan</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">14:30 - 15:30</span></li>
                <li className="text-black flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">ArtAttack & DoodleArt</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">16:00 - 17:00</span></li>
                <li className="text-black flex justify-between m-2"><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">Beat Trippers</span><span className="text-[#3F4B3B] hover:text:[#7D1D3F]  font-heading text-[0.9rem]">17:00 - 18:00</span></li>
              </ul>
            }


          </div>
          <div className=' cursor-pointer text-black p-1 px-2  bg-[#F2EFE1] rounded-t-lg' onClick={() => setsched(false)}>
            <FontAwesomeIcon icon={faWindowClose}></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </>
  );
}

export default Schedule;
