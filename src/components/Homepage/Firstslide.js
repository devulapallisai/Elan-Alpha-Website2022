import React from "react";
import RightTop from '../../images/Homepage/corners_copy.png';
import RightBot from '../../images/Homepage/corners_copyrightbot.png';
import LeftBot from '../../images/Homepage/corners_copyleftbot.png';
import LeftTop from '../../images/Homepage/corners_copyrighttop.png';
import Box from '../../images/Homepage/box_copy.png'
import styles from '../../css/Homepage1.css';
// import Logo from '../../images/elannvsion.png';
import Logo from '../../images/elannvision.png'
function Firstslide() {
  return <div className="w-screen h-screen" style={{background:'linear-gradient(180deg, #1E0735 76.65%, #943066 166.99%)'}}>
    <div className="">
        <div className="absolute top-12 left-0">
            <img src={RightTop} alt="Image" className={styles.img} style={{width:'20vw'}}/>
        </div>
        <div className="absolute bottom-0 left-0">
            <img src={LeftBot} alt="Image" className={styles.img} style={{width:'20vw'}}/>
        </div>
        <div className="absolute top-12 right-0">
            <img src={LeftTop} alt="Image" className={styles.img} style={{width:'20vw'}}/>
        </div>
        <div className="absolute bottom-0 right-0">
            <img src={RightBot} alt="Image" className={styles.img} style={{width:'20vw'}}/>
        </div>
        <div className="absolute">
            <div className="backgr flex justify-content-center" style={{width:'70vw',height:'60vh',marginLeft:'15vw',marginTop:'20vh',background:`url(${Box})`,backgroundSize:'100% 100%',backgroundRepeat:'no-repeat'}}>

            <img src={Logo} alt="Logo" className="my-auto" style={{height:'60%',display:'flex',margin:'auto'}}/>
            </div>
        </div>
    </div>
  </div>;
}

export default Firstslide;
