import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import SocialCause from "./pages/SocialCause";
import Home from "./pages/Home";
import Sponsors from "./pages/Sponsors";
import Nomatch from "./pages/Nomatch";
import Layout from "./components/Layout/Layout";
import Competitions from "./pages/Competitions";
import Events from "./pages/Events";
import ProshowList from "./pages/ProshowList";
import Infi from "./pages/Infi";
import Proshows from "./pages/Prowshows";
import Infocard from "./components/common/Infocard";
import Merch from "./pages/Merch";
import Cryptex from "./pages/Cryptex";
// import Third from "./components/Homepage/ThirdSlide";
library.add(fab, faCheckSquare, faCoffee);

function App() {
  const [block, setblock] = useState("culti");
  return (
    <Router basename="/">
      <Layout block={block} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/third" element={<Third />} /> */}
        <Route path="/team" element={<Team />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/socialcause" element={<SocialCause />} />
        <Route path="/merch" element={<Merch />} />
        <Route
          path="/competitions"
          element={<Competitions block={block} setblock={setblock} />}
        />
        <Route path="/events" element={<Events />} />
        <Route path="/proshowlist" element={<ProshowList />} />
        <Route path="/cryptex" element={<Cryptex />} />
        <Route path="/proshows" element={<Proshows />} />
        <Route path="/infi" element={<Infi />} />
        <Route
          path="/events/0"
          element={
            <Infocard
              width="100vw"
              pagecard={true}
              name="App Development"
              struct="lorem100 rey"
              description={`Elan & ηvision 2021, IIT Hyderabad proudly presents its 3D model designing event "CAD PRO". Contrive a way to outsmart your opponents in designing a CAD model. It is an on-the-spot designing round to show off your expertise in designing during ELAN & ηvision 2021.`}
              statement={[
                "It will be an on-spot designing round. Participants will be given a problem statement at the time of event and they have to submit their design in the specified time limit (3 hours)",
                "Each specification will carry some points according to the question and its level of difficulty.",
                "Models can be prepared in any CAD software (CATIA/ ProE/ AutoCad/ Solidworks/ Solidedge).",
                "Participants need to submit the final .stl or IGES or STEP file created from above softwares.",
              ]}
              submissionformat={`Hello peeps`}
              regdetails="hello peeips"
              judgingcriteria={["lorem", "loremff"]}
              eventrules={["ff", "gg", "jhjhsaa"]}
              certifications={["f", "oo", "lorem"]}
              contactdetails={[
                ["ha", "he"],
                ["jebans", "he"],
              ]}
              timeline={["Geeks", "Hello", "Bro", "Sis"]}
            />
            // struct must be string, and all others should be same type
          }
        />
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </Router>
  );
}

export default App;
