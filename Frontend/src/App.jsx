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
import OtherProfilePage from './pages/OtherProfilePage/OtherProfilePage'

function App() {

  const { authUser } = useAuthContext();

  return (
    <div className='flex items-center justify-center'>
      <div className='h-screen'>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
        </Routes>
      </div>
      <Routes>
        <Route path='/signup' element={authUser ? <Navigate to='/home' /> : <SignUp />}></Route>
        <Route path='/signin' element={authUser ? <Navigate to='/home' /> : <SignIn />}></Route>
        <Route path='/home' element={authUser ? <HomePage /> : <Navigate to={"/signin"} />}></Route>
        <Route path='/profile' element={authUser ? <ProfilePage /> : <Navigate to={"/signin"} />}></Route>
        <Route path='/otherprofile' element={authUser ? <OtherProfilePage /> : <Navigate to={"/signin"} />}></Route>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
