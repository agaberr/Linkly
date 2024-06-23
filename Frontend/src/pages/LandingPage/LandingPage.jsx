import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LandingPage = () => {
  
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    navigate('/signup');
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding bg-opacity-0'>
        <h1 className='text-8xl font-semibold text-left text-gray-700'>
          Welcome
        </h1>
        <h1 className='text-5xl font-normal text-left text-gray-900 pt-5'>
          Ready to
        </h1>
        <h1 className='text-6xl font-bold text-left text-black pt-3 pb-7'>
          Chat with others?
        </h1>
        <button onClick={handleButtonClick} class="btn border-none rounded-box bg-blue-600 btn-lg hover:bg-blue-700 text-3xl mt-2 text-center text-white">Sign Up</button>
      <h1 className='text-l font-normal text-left text-gray-700 pt-2'>
          Already have an account? <Link to='/signin' className='font-bold text-black hover:underline hover:cursor-pointer'>LogIn</Link>
        </h1>
      </div>
    </div>
  )
}

export default LandingPage

