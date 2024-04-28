import React from 'react'
import ReactDOM from 'react-dom/client'
import'./App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FinalD from './pages/FinalD.tsx'
import Home from './pages/Home.tsx'
// Routing must be in this main file

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={'/gdoct/'}>
        <Routes>
          <Route path="/" element = {<Home/>} />  
          <Route path="/dia" element={<FinalD />} />
        </Routes>
      </BrowserRouter>

  </React.StrictMode>,
)
