import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/Homepage.jsx'
import SignUpPage from './pages/SignupPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
import ProfiePage from './pages/ProfilePage.jsx'
const App = () => {
  return (<>
  <div >
    <Navbar/>
    <Routes>
<Route path='/' element={<HomePage />}/>
<Route path='/signup' element={<SignUpPage />}/>
<Route path='/login' element={<LoginPage />}/>
<Route path='/settings' element={<SettingsPage />}/>
<Route path='/profile' element={<ProfiePage />}/>
    </Routes>
  </div>
</>
  )
}

export default App