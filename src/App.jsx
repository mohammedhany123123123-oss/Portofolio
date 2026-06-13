import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Aboutme from './Components/Aboutme/Aboutme'
import Myskills from './Components/Myskills/Myskills'
import Myprojects from './Components/Myprojects/Myprojects'
import Contactme from './Components/Contactme/Contactme'
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<Aboutme />} />
  <Route path="/skills" element={<Myskills />} />
  <Route path="/projects" element={<Myprojects />} />
  <Route path="/contact" element={<Contactme />} />
</Routes>

export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Aboutme/>
      <Myskills/>
      <Myprojects/>
      <Contactme/>
    </div>
  )
}
