import React, { useState, useEffect } from "react";
import Firstslide from "../components/Homepage/Firstslide";
import Secondslide from "../components/Homepage/Secondslide";

function Home() {
  const [chakra, setchakra] = useState(false);
  return (
    <div className="text-heading">
      <Firstslide chakra={chakra} setchakra={setchakra} />
      {chakra ? <Secondslide /> : ""}
    </div>
  );
}

export default Home;
