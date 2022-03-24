import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
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
import ReactGA from "react-ga";
import Elan from "./images/events/elan_logo_w.jpeg";
import Enigma from "./pages/Enigma";
// import Third from "./components/Homepage/ThirdSlide";
library.add(fab, faCheckSquare, faCoffee);

function App() {
  const loc = window.location.href;
  useEffect(() => {
    ReactGA.initialize("G-EJDEL2CGJX");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [loc]);
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
        <Route
          path="/proshowlist/0"
          element={<ProshowList name="events" desc="We bring to you the Indian DJ/producer duo, Loststories in partnership with Tribevibe.

          Witness the amazing performances on stage with the Indian duo composed by Prayag Mehta and Rishab Joshi.Lost stories are a name synonymous to Dance Music in India and South Asia. Ranked #52 on Dj mag 2016 and labelled the “Scene Starters” by DJ Mag, Rishab and Prayag began their journey in dance music in 2008 earlier producing Trance and Progressive House and garnering support from heavyweights like Tiesto, Armin van Buuren, BT, Markus Schulz etc. They then evolved their sound with their debut album – Music for the # Generation (Universal Music) in 2012 which was the no 3 Album on Top 100 Dance Albums iTunes Charts." img="https://ik.imagekit.io/lc4zhdkrtsr/proshows/LS_IIT_Hydrabad_XQhQ3zi7b.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648074927554" />}
        />
        <Route
          path="/proshowlist/1"
          element={<ProshowList name="events" desc="We bring to you the alt-rock band Alchemy for this year's fest on 26th March. 
             
          Get ready to witness the amazing performance on stage with the Alchemy Rock Band. Alchemy, as the word suggests, is an ‘amalgamation' of musicians hailing from different genres. 

          The band comes together to produce a cohesive sound that addresses a broad vista of emotions. Be it a new found love, a broken heart or even a socially pressing matter, Alchemy is bound to find a way into your playlist. " img="https://ik.imagekit.io/lc4zhdkrtsr/proshows/Alchemy_Final_z4wFxqqNB4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648074927807" />}
        />
        <Route
          path="/proshowlist/2"
          element={<ProshowList name="events" desc="We bring to you THE TOUCHDOWN. With all three major shows lined up on the 26th (2nd day of the fest), Elan & ηVision is coming with a BANG!" img="https://ik.imagekit.io/lc4zhdkrtsr/proshows/ttd_fGvB1ta7U.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648074927588" />}
        />
        <Route path="/cryptex" element={<Cryptex />} />
        <Route path="/proshows" element={<Proshows />} />
        <Route path="/infi" element={<Infi />} />
        <Route path="/mjaz3o7101lu9x2h" element={<Enigma />} />
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
