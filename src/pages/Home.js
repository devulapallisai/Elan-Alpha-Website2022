import React, { useState, useEffect,useRef } from "react";
import Firstslide from "../components/Homepage/Firstslide";
import Secondslide from "../components/Homepage/Secondslide";
import useScrolldirection from "../hooks/useScrolldirection";
function Home() {
  const [chakra, setchakra] = useState(false);
  const [initialVal,setinitialVal]=useState(0);
  const {scrollDirection,scrollPos}=useScrolldirection();
  const  secondslideref=useRef();
  // Text moving from up to bottom animation
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      // if(window.scrollY<=window.innerHeight){
        setinitialVal(1.15*window.scrollY/(window.innerHeight));
      // }
    })
  })
  // text moving animation end
  return (
    <div className="text-heading">
      <Firstslide chakra={chakra} setchakra={setchakra} scrollDirection={scrollDirection} secondslideref={secondslideref}/>
      {chakra ? <Secondslide initialVal={initialVal} scrollDirection={scrollDirection} secondslideref={secondslideref}/> : ""}
      {/* <ThirdSlide></ThirdSlide> */}
    </div>
  );
}

export default Home;
