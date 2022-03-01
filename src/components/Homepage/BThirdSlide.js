import React, { useEffect } from 'react'
import Skyline1 from '../../images/Homepage/Skyline 1.png'
import Skyline3 from '../../images/Homepage/Skyline 3.png'
import {gsap} from 'gsap'
import Chakra from '../../images/Homepage/chakra.png'
import styles from '../../css/Homepage4.module.css';
function FourthSlide() {
  useEffect(()=>{
    gsap.from('.chakra',{
       x:550,
       y:500,
       duration:3,
       rotation:180,
    })
    gsap.from('.Para1',{
        opacity:0,
        x:-100,
        duration : 2
    })
    gsap.to('.Para2h',{
        x:200,
        y:-100,
        duration : 3,
        opacity:0,
    })
    gsap.to('.Para2f',{
        x:200,
        y:50,
        opacity:0,
        duration : 3
    })
    gsap.from('.skyline3',{
        opacity:0,
        y: 100,
        duration : 3
    })
    gsap.from('.skyline1',{
        opacity:0,
        y: 200,
        duration : 3
    })

    gsap.from('.chakra1',{
        css:{
            width : "65%",
            top:"-67vh",
            left : "17.5vw",
            opacity:0.5  ,
            margin: "auto",
            transform : "rotate(170deg)",
        },
        duration:3,
        rotation:150,
    })
    gsap.to('.Back',{
        css:{
            background:" linear-gradient(180deg, #943066 -7.97%, #943166 -7.94%, #F5C470 108.26%);",
        },
        duration:3,
    })

  },[])
  return (
    <div className={`Back relative flex justify-center h-screen w-screen overflow-hidden ${styles.bgit}`} id="fourthslide">
        <div className="Para1 absolute w-2/3 mx-auto top-[15vh] z-[10000]">
            <h1 className='text-white font-heading text-4xl z-[10000]'>About Us</h1>
            <br />
            <p className='text-white text-lg z-[100000]'>Elan and ηVision is the annual techno-cultural fest of IIT Hyderabad and is one of the largest fests in South India. It is entirely organized by IITH students. Elan refers to the cultural part and ηVision cites the technological part of the fest. This festival features several professional and semi-professional crowd-pulling events and promises to be a grand event showcasing the best of cultural performances, technical solutions, and student community advances</p>
        </div>
        <div className="Para2 absolute w-2/3 justify-center mx-auto top-[25vh]">
            <h1 className='Para2h text-white text-center text-5xl font-heading'>About Us</h1>
            <p className='Para2f text-white text-lg text-center'>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className='bottom-0  skyline3 absolute overflow-hidden' >
            <img src={Skyline3} className=' w-screen' alt='img'></img>
        </div>
        <div className='skyline1 absolute bottom-0 overflow-hidden' >
            <img src={Skyline1} className='w-screen' alt='img'></img>
        </div>
        <div className='chakra1 absolute w-[150px] -z-4 left-16 top-20 mx-auto'>
            <img src={Chakra} alt='img'/>
        </div>
        {/* <div className="absolute footer container bottom-4 mx-auto">
            <Footer/>
        </div> */}
    </div>
  )
}

export default FourthSlide