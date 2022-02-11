import React from 'react';
import styles from '../css/socialcause.module.css'
import Halfchakra from '../images/SocialCause/Halfchakra.png'
import Hausla from '../images/SocialCause/hausla.png'
import Gradient from '../images/SocialCause/Gradient.png'
import Rectangle from '../images/SocialCause/Rectangle.png'
function SocialCause() {
  return ( 
  <div className={`${styles.colorit}`}>
  <div className={`relative ${styles.colorit}`}>
    <div className={`absolute mx-auto lg:mx-40 container z-1 w-5/6 lg:w-3/4  ${styles.resizeit}`}>
      <img src={Halfchakra} alt="" className={styles.flipimageit} />
    </div>
    <div className='relative w-1/2 h-1/2 z-3 mx-auto '>
      <img src = {Hausla} alt=""/>
    </div>
    <p className='mx-auto text-xs md:text-sm w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  <br />
  <div className='h-screen'>
  </div>
  <div className='flex flex-wrap gap-20 justify-center items-center h-screen'>
    <div className='w-1/4  min-w-[200px]'>
      <img src={Gradient} alt="" className={styles.flipimageit}/>
    </div>
    <p className='w-1/2  text-xs md:text-sm min-w-[300px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </p>
  </div>
  <br />
  <div className='flex flex-wrap justify-center items-center '>
    <div className='w-1/4  min-w-[200px]'>
      <img src={Rectangle} alt="" className={styles.flipimageit}/>
    </div>
    <div className='w-1/4 md:w-1/3 text-[0.1em] md:text-sm border-[#FFD700] p-5 border-x-2 border-b-2 md:border-y-2  md:border-r-2 min-w-[200px] '>
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sdfchabsdhmnbcsmhnbcsm
      "Lorem ipsum dolor sit 
    </div>
  </div>
  <div className="contactsectioninpage">
        <div className="text-white font-text font-extrabold text-xl md:text-4xl text-center">Contact Us</div>
  </div>
</div>
);
}

export default SocialCause;
