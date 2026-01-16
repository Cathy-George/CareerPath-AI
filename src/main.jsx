import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import App from './App.jsx'
import Login from './login.jsx'
import AboutUs from './about.jsx'
import SkillInput from './skillinput.jsx' // Ensure filename matches exactly
import Recommendations from './recommend.jsx' // Ensure filename matches exactly

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/skills" element={<SkillInput />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)