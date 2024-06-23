import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import { Toaster } from 'react-hot-toast'
import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'
import HomePage from './HomePage/HomePage'
import ProfilePage from './ProfilePage/ProfilePage'
import { useAuthContext } from './context/AuthContext'

function App() {

  const { authUser } = useAuthContext();

  return (
    <div className='h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/signup' element={authUser ? <Navigate to='/home' /> : <SignUp />}></Route>
        <Route path='/signin' element={authUser ? <Navigate to='/home' /> : <SignIn />}></Route>
        <Route path='/home' element={authUser ? <HomePage /> : <Navigate to={"/signin"} />}></Route>
        <Route path='/profile' element={authUser ? <ProfilePage /> : <Navigate to={"/signin"} />}></Route>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
