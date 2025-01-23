import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NoPage from "./pages/no-page/NoPage";
import LoginRegister from "./pages/login-register/LoginRegister";
import Recovery from "./pages/recovery/Recovery";
import Personnel from "./pages/home-personnel/Personnel";
import Patient from "./pages/home-patient/Patient";
import SignUp from './pages/signup/SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NoPage />}/>
          <Route index element={<LoginRegister />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/login-register" element={<LoginRegister />}/>
          <Route path="/recovery" element={<Recovery />}/>
          <Route path="/personnel" element={<Personnel />}/>
          <Route path="/patient" element={<Patient />}/>
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;