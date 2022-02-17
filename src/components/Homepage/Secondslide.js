import React from 'react'
import styles from '../../css/Homepage2.module.css';
import Lanterntop from '../../images/Lantern1.png';
import Lant from '../../images/Homepage/Lanterntop.png';
import Skyline from '../../images/Homepage/Skyline3copy.png';
import BackgroundI from '../../images/Homepage/window_webcopy.png'
function Secondslide() {
  return (
    <>
      <div className={`Slide relative z-0 h-screen w-screen hidden md:block z-50`}>
        <img src={BackgroundI} className={`${styles.imagebackgr}`} alt="Imag" width="100vw" height="100vh"/>
          <div className="absolute top-14 right-24">
            <img src={Lanterntop} alt="Imag" className={styles.img}/>
          </div>
          <div className="absolute top-0 right-40">
            <img src={Lanterntop} alt="Imag" className={styles.img1}/>
          </div>
          <div className="absolute left-16 top-40">
            <img src={Lant} alt="Imag" className={styles.img2}/>
          </div>
          <div className="absolute left-28 top-16">
            <img src={Lant} alt="Imag" className={styles.img3}/>
          </div>
          <div className="absolute left-48 top-28">
            <img src={Lant} alt="Imag" className={styles.img4}/>
          </div>
          <div className={`${styles.zInde} w-screen absolute bottom-0`}>
            <img src={Skyline} alt="Imag" className={styles.zoomimg} />
          </div>
      </div>
    </>
  )
}

export default Secondslide