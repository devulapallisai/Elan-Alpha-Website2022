import React from 'react';
import styles from '../css/schedule.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlink } from '@fortawesome/free-solid-svg-icons'
function Schedule({setsched}) {
  return (
    <>
    <div className='hidden md:block'>
  <div className=' h-screen items-center justify-center flex'>
    <div className={`grid grid-cols-4 m-2 w-fit cursor-pointer font-heading grid-rows-5 text-[0.6em] md:text-lg  gap-x-7 p-1 pt-0 rounded-xl gap-y-2 bg-[#F2EFE1] ${styles.border} `}>
      <h3 className='text-black text-center col-span-4'>SCHEDULE</h3>
      <h4 className='text-black col-span-1'>XX MARCH</h4>
      <h4 className='text-black col-span-1'>XX MARCH</h4>
      <h4 className='text-black col-span-1'>XX MARCH</h4>
      <h4 className='text-black col-span-1'>XX MARCH</h4>
    </div>
    {/* <div className=' cursor-pointer text-black p-2 bg-[#F2EFE1] rounded-r-lg' onClick={()=>setsched(false)}> 
  <FontAwesomeIcon icon={faUnlink} className='bg-black'></FontAwesomeIcon>
  </div> */}
  </div>
  </div>
  <div className='md:hidden'>
  <div className=' h-screen items-center justify-center flex'>
    <div className={`grid grid-cols-4 m-2 w-fit cursor-pointer font-heading grid-rows-5 text-[0.6em] md:text-lg  gap-x-7 p-5  rounded-xl gap-y-2 bg-[#F2EFE1] ${styles.borderM} `}>
      <h3 className='text-black text-center col-span-4'>SCHEDULE</h3>
      <h4 className='text-black col-span-1'>XX MARCH</h4>
      <h4 className='text-black col-span-1'>XX MARCH</h4>
      <h4 className='text-black col-span-1'>XX MARCH</h4>
      <h4 className='text-black col-span-1'>XX MARCH</h4>
    </div>
  </div>
  </div>
 </>
  );
}

export default Schedule;
