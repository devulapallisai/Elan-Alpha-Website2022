import React from 'react';
import styles from '../css/contact.module.css'
import Footer from '../components/common/Footer'
function Contact() {
  return (
    <>
    <div className='hidden md:block'>
    <div className=' h-screen flex items-center justify-center bg-[#F5C470] relative'>
    <form className={`w-2/3 container p-10 mx-auto grid grid-cols-8 grid-flow-row auto-rows-max gap-2 text-black grid-rows-5 ${styles.border}`}>
      <input className='col-span-8 row-span-1 rounded-lg p-2 bg-[#F2EFE1]' type="text" placeholder='First Name' />
      <input className='col-span-4 row-span-1 rounded-lg p-2 bg-[#F2EFE1]' type="text" placeholder='Email' />
      <input className='col-span-4 row-span-1 rounded-lg p-2 bg-[#F2EFE1]' type="text" placeholder='Phone Number' />
      <input className='col-span-8 row-span-1 rounded-lg p-2 bg-[#F2EFE1]' type="text" placeholder='Public Relation' />
      <textarea className='col-span-8 row-span-4 rounded-lg p-2 bg-[#F2EFE1] resize-none' placeholder='Your message'  name = "description">
         </textarea>
    </form>
    </div>
    </div>

    {/* {mobile part begins} */}
    <div className=' md:hidden'>
    <div className={` h-screen flex flex-col items-center justify-center gap-5 relative ${styles.bg}`}>
    <div className='px-7 py-2 items-center justify-center font-heading text-lg bg-[#F5C470] rounded-lg '>CONTACT US</div>
    <form className={`w-5/6 text-xs p-10 container p-7  mx-auto grid grid-cols-1 auto-rows-2fr grid-flow-row auto-rows-ma gap-2 text-black grid-rows-5 rounded-xl  bg-[#F5C470]`}>
      <input className='col-span-1 row-span-1 rounded-lg p-2 bg-[#F2EFE1]' type="text" placeholder='First Name' />
      <input className='col-span-1 row-span-1 rounded-lg p-2 bg-[#F2EFE1]' type="text" placeholder='Email' />
      <input className='col-span-1 row-span-1 rounded-lg p-2 bg-[#F2EFE1]' type="text" placeholder='Phone Number' />
      <input className='col-span-1 row-span-1 rounded-lg p-2 bg-[#F2EFE1]' type="text" placeholder='Public Relation' />
      <textarea className='col-span-1 row-span-4 rounded-lg p-2 bg-[#F2EFE1] resize-none' placeholder='Your message'  name = "description">
         </textarea>
    </form>
    </div>
    </div>

    </>

  );
}
export default Contact;