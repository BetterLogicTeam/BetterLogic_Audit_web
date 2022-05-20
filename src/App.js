import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import NavbarNav from './Components/Navbar/NavbarNav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Partners from './Components/Client/Partners';
import AuditProcess from './Components/Audit Process/AuditProcess';
import AuditReport from './Components/audit report/AuditReport';
import QuestionsFile from './Components/QuestionsSection/QuestionsFile';
import InputModal from './Components/ModalInput/InputModal';
import OurTeam from './Components/OurTeamArb/OurTeam';
import Checknav from './Components/CheckNab/Checknav'
import SlideR from './Components/Sliderreport/SlideR';
import Pdf from './Components/PDF/Pdf';
import Home_page from './Home_page';
function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
    

<Router>
   <Route exact path="/" component={Home_page} />
</Router>
    </div>
  );
}

export default App;
