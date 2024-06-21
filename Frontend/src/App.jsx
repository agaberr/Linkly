import { useState } from 'react'
import './App.css'
import LandingPage from './LandingPage/LandingPage'
import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'
import HomePage from './HomePage/HomePage'

function App() {

  return (
    <div className='h-screen flex items-center justify-center'>
      <HomePage />
    </div>
  )
}

export default App
