import { useState } from 'react'
import './App.css'
import LandingPage from './LandingPage/LandingPage'
import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'

function App() {

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <SignIn />
    </div>
  )
}

export default App
