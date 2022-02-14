import React from 'react';
import styles from '../css/schedule.module.css';
function Schedule() {
  return (
  <div className='h-screen items-center justify-center flex'>
    <div className={`grid grid-cols-4 grid-rows-5  gap-x-7 p-5 pt-0 rounded-xl gap-y-2 bg-[#F2EFE1] ${styles.border}`}>
      <h3 className='text-black text-center col-span-4'>SCHEDULE</h3>
      <h4 className='text-black col-span-1'>XX MARCH</h4>
      <h4 className='text-black col-span-1'>XX MARCH</h4>
      <h4 className='text-black col-span-1'>XX MARCH</h4>
      <h4 className='text-black col-span-1'>XX MARCH</h4>
    </div>
  </div>
  );
}

export default Schedule;
