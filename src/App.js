/*
-------------------------------------------------------------------------------------
Authors         : Alinsonorin, John Myl B., Awi, Joseph Kahl L., Gozon, Daniel Allan
File            : App.js
Description     : 
    This page will allow the project to access and routes all the pages.
Copyright © 2025. All rights reserved.

Last Modified By: Joseph Kahl L. Awi
Last Modified On: January 26, 2025
-------------------------------------------------------------------------------------
*/



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Faqs from "./pages/faqs/Faqs";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NoPage from "./pages/no-page/NoPage";
import Index from "./pages/index/Index.js";
import Recovery from "./pages/recovery/Recovery";
import HomePersonnel from "./pages/home-personnel/HomePersonnel";
import HomePatient from "./pages/home-patient/HomePatient";
import SignUpPatient from './pages/signup-patient/SignUpPatient';
import SignUpPersonnel from './pages/signup-personnel/SignUpPersonnel.js';
import AppointmentPatient from './pages/appointment-patient/AppointmentPatient.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NoPage />}/>
          <Route index element={<Index />}/>
          <Route path="/faqs" element={<Faqs />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/index" element={<Index />}/>
          <Route path="/recovery" element={<Recovery />}/>
          <Route path="/personnel" element={<HomePersonnel />}/>
          <Route path="/patient" element={<HomePatient />}/>
          <Route path="/signupPatient" element={<SignUpPatient />}/>
          <Route path="/signupPersonnel" element={<SignUpPersonnel />}/>
          <Route path="/appointmentPatient" element={<AppointmentPatient />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;