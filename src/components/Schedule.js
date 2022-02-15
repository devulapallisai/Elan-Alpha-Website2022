import React from "react";
import styles from "../css/schedule.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlink } from "@fortawesome/free-solid-svg-icons";
function Schedule({ setsched }) {
  return (
    <>
      <div className=" h-screen items-center justify-center flex bg-[rgba(0,0,0,.85)]">
        <div
          className={`grid grid-cols-4 cursor-pointer font-heading grid-rows-5  gap-x-7 p-5 pt-0 rounded-xl gap-y-2 bg-[#F2EFE1] ${styles.border}`}
        >
          <h3 className="text-black text-center col-span-4">SCHEDULE</h3>
          <h4 className="text-black col-span-1">XX MARCH</h4>
          <h4 className="text-black col-span-1">XX MARCH</h4>
          <h4 className="text-black col-span-1">XX MARCH</h4>
          <h4 className="text-black col-span-1">XX MARCH</h4>
        </div>
        
      </div>
      <div className="origin-top-right text-black" onClick={() => setsched(false)}>
          <FontAwesomeIcon
            icon={faUnlink}
            className="bg-black fa-2x cursor:pointer origin-top-right"
          ></FontAwesomeIcon>
        </div>
    </>
  );
}

export default Schedule;
