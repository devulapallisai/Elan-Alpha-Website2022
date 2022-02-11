import React from 'react';
import styles from '../css/schedule.module.css'

function Contact() 
{
  return (
    <div className='h-screen flex items-center justify-center bg-[#F5C470] relative block '>
    <form className={`w-2/3 container p-10 mx-auto grid grid-cols-8 grid-flow-row auto-rows-max gap-2 text-black grid-rows-5 ${styles.border}`}>
      <input className='col-span-8 row-span-1 rounded-lg p-2 bg-[#F2EFE1]' type="text" placeholder='First Name' />
      <input className='col-span-4 row-span-1 rounded-lg p-2 bg-[#F2EFE1]' type="text" placeholder='Email' />
      <input className='col-span-4 row-span-1 rounded-lg p-2 bg-[#F2EFE1]' type="text" placeholder='Phone Number' />
      <input className='col-span-8 row-span-1 rounded-lg p-2 bg-[#F2EFE1]' type="text" placeholder='Public Relation' />
      <input className='col-span-8 row-span-2 rounded-lg p-2 bg-[#F2EFE1]' type="text" placeholder='Your message' />
    </form>
    </div>

  );
}
export default Contact;