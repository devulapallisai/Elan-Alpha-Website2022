import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Schedule from './components/Schedule';
import Team from './pages/Team';
import Contact from './pages/Contact';
import SocialCause from './pages/SocialCause';
import Home from './pages/Home';
import Sponsors from './pages/Sponsors';
import Nomatch from './pages/Nomatch';
import Layout from './components/Layout/Layout';
import Competitions from './pages/Competitions';
import Events from './pages/Events';
import ProshowList from './pages/ProshowList';
import Infi from './pages/Infi';
import Proshows from './pages/Prowshows';
import Third from './components/Homepage/ThirdSlide'
import Fourth from './components/Homepage/FourthSlide'
library.add(fab, faCheckSquare, faCoffee)

function App() {
  const [block,setblock]=useState('culti');
  return (
    <Router>
      <Layout block={block}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/third" element={<Third/>}/>
        <Route path="/fourth" element={<Fourth/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/sponsors" element={<Sponsors/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/socialcause" element={<SocialCause/>}/>
        <Route path="/competitions" element={<Competitions block={block} setblock={setblock}/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/proshowlist" element={<ProshowList />}/>
        <Route path="/proshows" element={<Proshows />}/>
        <Route path="/infi" element={<Infi />}/>
        <Route path="*" element={<Nomatch/>}/>
      </Routes>
    </Router>
  );
}

export default App;
