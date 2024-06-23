import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'
import LandingPage from './pages/LandingPage/LandingPage'
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import HomePage from './pages/HomePage/HomePage'
import ProfilePage from './pages/ProfilePage/ProfilePage'

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
