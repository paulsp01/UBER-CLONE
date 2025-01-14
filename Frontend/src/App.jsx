import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainSignup from './pages/CaptainSignup';
import CaptainLogin from "./pages/CaptainLogin";
import Hero from './pages/Hero';
import UserProtectedWrapper from './pages/UserProtectedWrapper';
import UserLogout from './pages/UserLogout';
import CaptainHero from './pages/CaptainHero';
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper';
import CaptainLogout from './pages/CaptainLogout';
import Riding from './pages/Riding';
import CaptainRiding from './pages/CaptainRiding';


const App = () => {
  return (
   
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/riding" element={<Riding/>} />
          <Route path="/captain-riding" element={<CaptainRiding/>} />
          <Route path="/captain-login" element={<CaptainLogin/>} />
          <Route path="/captain-signup" element={<CaptainSignup/>} />
          <Route path="/hero" element={
            <UserProtectedWrapper>
              <Hero/>
            </UserProtectedWrapper>
          }/>
          <Route path='/user/logout' element={
            <UserProtectedWrapper>
              <UserLogout/>
            </UserProtectedWrapper>
          }/>
          <Route path='/captain-hero' element={
            <CaptainProtectedWrapper>
              <CaptainHero/>
            </CaptainProtectedWrapper>
          }/>
          <Route path='/captain/logout' element={
            <CaptainProtectedWrapper>
              <CaptainLogout/>
            </CaptainProtectedWrapper>
          }/>
        </Routes>
      </div>
   
  )
}

export default App
