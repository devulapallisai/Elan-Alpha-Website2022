import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
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
library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <Router>
      <Layout/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/sponsors" element={<Sponsors/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/socialcause" element={<SocialCause/>}/>
        <Route path="/competitions" element={<Competitions/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="*" element={<Nomatch/>}/>
      </Routes>
    </Router>
  );
}

export default App;
