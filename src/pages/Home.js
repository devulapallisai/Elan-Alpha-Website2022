import React, { useState, useEffect } from "react";
import Firstslide from "../components/Homepage/Firstslide";
import Secondslide from "../components/Homepage/Secondslide";
import useScrolldirection from "../hooks/useScrolldirection";
function Home() {
  const [chakra, setchakra] = useState(false);
  const [initialVal,setinitialVal]=useState(0);
  const {scrollDirection,scrollPos}=useScrolldirection()
  // Text moving from up to bottom animation
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY<=window.innerHeight){
        setinitialVal(1.15*window.scrollY/(window.innerHeight));
      }else{
        setinitialVal(0)
      }
    })
  })
  // text moving animation end
  return (
    <div className="text-heading">
      <Firstslide chakra={chakra} setchakra={setchakra}  />
      {chakra ? <Secondslide initialVal={initialVal} scrollDirection={scrollDirection}/> : ""}
    </div>
  );
}

export default Home;
