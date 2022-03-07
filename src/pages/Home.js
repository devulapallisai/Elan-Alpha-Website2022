import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import Firstslide from "../components/Homepage/Firstslide";
// import Secondslide from "";
import useScrolldirection from "../hooks/useScrolldirection";
const Secondslide = lazy(() => import("../components/Homepage/Secondslide"));
function Home() {
  const [chakra, setchakra] = useState(false);
  const [initialVal, setinitialVal] = useState(0);
  const { scrollDirection, scrollPos } = useScrolldirection();
  const secondslideref = useRef();
  // Text moving from up to bottom animation
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // if(window.scrollY<=window.innerHeight){
      setinitialVal(window.scrollY / window.innerHeight);
      // }
    });
  });
  // text moving animation end
  return (
    <div className="text-heading">
      <Firstslide
        chakra={chakra}
        setchakra={setchakra}
        scrollDirection={scrollDirection}
        secondslideref={secondslideref}
      />
      {chakra ? (
        <Suspense fallback={<div>Loading....</div>}>
          <Secondslide
            initialVal={initialVal}
            scrollDirection={scrollDirection}
            secondslideref={secondslideref}
          />
        </Suspense>
      ) : (
        ""
      )}
      {/* <ThirdSlide></ThirdSlide> */}
    </div>
  );
}

export default Home;
