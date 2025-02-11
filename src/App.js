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
import NoPage from "./pages/no-page/NoPage";
import Index from "./pages/index/Index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NoPage />}/>
          <Route index element={<Index />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
