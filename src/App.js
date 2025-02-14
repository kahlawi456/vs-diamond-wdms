/*
-------------------------------------------------------------------------------------
Authors         : Alinsonorin, John Myl B., Awi, Joseph Kahl L., Gozon, Daniel Allan
Date Created    : February 11, 2025
File            : App.js
Description     : 
    This page allows the project to access and route all the pages.
Copyright © 2025. All rights reserved.

Last Modified By: Joseph Kahl L. Awi
Last Modified On: February 11, 2025
-------------------------------------------------------------------------------------
*/

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index/Index';
import NoPage from './pages/NoPage/NoPage';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import SignUpPatient from './components/SignUp/SignUpPatient';
import SignUpPersonnel from './components/SignUp/SignUpPersonnel';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='*' element={<NoPage />}/>
          <Route path='SignIn' element={<SignIn />}/>
          <Route path='SignUp' element={<SignUp />}/>
          <Route path='SignUpPatient' element={<SignUpPatient />}/>
          <Route path='SignUpPersonnel' element={<SignUpPersonnel />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
