import React, { useEffect } from 'react'
import Skyline1 from '../../images/Homepage/Skyline 1.png'
import Skyline3 from '../../images/Homepage/Skyline 3.png'
import {gsap} from 'gsap'
import Chakra from '../../images/Homepage/chakra.png'
import BackgroundI from "../../images/Homepage/window_webcopy.png";
import styles from '../../css/Homepage4.module.css';
import Footer from '../common/Footer.js'
function FourthSlide() {
  useEffect(()=>{
    gsap.from('.chakra',{
       x:550,
       y:500,
       duration:3,
       rotation:180,
    })
    gsap.to('.Para1',{
        opacity:0,
        x:-100,
        duration : 2
    })
    gsap.from('.Para2h',{
        x:200,
        y:-100,
        duration : 3
    })
    gsap.from('.Para2f',{
        x:200,
        y:50,
        duration : 3
    })
    gsap.to('.skyline3',{
        opacity:0,
        y: 100,
        duration : 3
    })
    gsap.to('.skyline1',{
        opacity:0,
        y: 200,
        duration : 3
    })
    gsap.from('.Back',{
        backgroundImage:BackgroundI ,
        duration:3,

    })
    gsap.to('.chakra1',{
        css:{
            width : "65%",
            top:"-67vh",
            left : "17.5vw",
            opacity:0.5  ,
            margin: "auto",
        },
        duration:3,
        rotation:180,
    })

  },[])
  return (
    <div className={`Back relative flex justify-center h-screen w-screen overflow-hidden ${styles.bgit}`}>
        <div className="Para1 absolute w-2/3 mx-auto top-[15vh]">
            <h1 className='text-black font-heading'>Heading</h1>
            <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="Para2 absolute w-2/3 justify-center mx-auto top-[30vh]">
            <h1 className='Para2h text-black text-center text-3xl font-heading'>Heading</h1>
            <p className='Para2f text-black text-lg text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className='bottom-0  skyline3 absolute overflow-hidden' >
            <img src={Skyline3} className=' w-screen' alt='img'></img>
        </div>
        <div className='skyline1 absolute bottom-0 overflow-hidden' >
            <img src={Skyline1} className='w-screen' alt='img'></img>
        </div>
        <div className='chakra1 absolute w-[120px] -z-4 left-16 top-20 mx-auto'>
            <img src={Chakra} alt='img'/>
        </div>
        <div className="absolute footer container bottom-4 mx-auto">
            <Footer/>
        </div>
    </div>
  )
}

export default FourthSlide