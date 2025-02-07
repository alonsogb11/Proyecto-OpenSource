import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Css/index.css'
import Login from './Pages/Login.jsx'
import Maindashboard from './Pages/Maindashboard.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/maindashboard" element={<Maindashboard />} />
      </Routes>
    </Router>
  </StrictMode>
)
