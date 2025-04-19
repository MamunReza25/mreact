import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
import Header from "./components/header";
import HeroSection from './components/HeroSection';
import ProjectSection from './components/projectSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';


function App() {
   

  return (
    <>

    {/* header section */}
    <Header/>
              
  {/*  Hero Section  */}
    <HeroSection/>
             

     {/* <!-- Projects Section --> */}
  
         <ProjectSection/>

     {/* Contact Section  */}
        <ContactSection/>

  {/*  Footer */}
     <FooterSection/>

    </>
  )
}

export default App
