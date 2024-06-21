import { useState } from 'react'
import './App.css'
import LandingPage from './LandingPage/LandingPage'
import SignUp from './SignUp/SignUp'

function App() {

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <SignUp />
    </div>
  )
}

export default App
