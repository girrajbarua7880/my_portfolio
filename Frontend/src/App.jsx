import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Resume_dow from './components/Resume_dow'
import Connect_Us from './components/Connect_Us'
import Skills from './components/Skills'  
import Tools from './components/Tools'
import Certificates from './components/Certificates'
import Badges from './components/Badges'
import './App.css'
import Projects from './components/Projects'

function App() {
  

  return (
    <>
     <Navbar/>
      <Home/>
     <About/>
     <Projects/>
      <Skills/>
      <Tools/>
      <Certificates/>
      <Badges/>
     <Resume_dow/>
     <Connect_Us/>
     <Footer/>
    </>
  )
}

export default App
