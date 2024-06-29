import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/signup');
  }

  return (
    <div>
      <div className=" w-screen max-h-fit">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Linkly</h1>
          <h2 className="text-3xl font-semibold text-gray-600 mb-2">Ready to Chat with others?</h2>
        </header>
        
        <section className="my-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What is Linkly?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Linkly is a revolutionary live chat application designed to bring people closer together. Whether you want to connect with friends, family, or meet new people, Linkly provides a seamless and engaging chatting experience. Our mission is to make communication effortless and enjoyable.
          </p>
        </section>
        
        <section className="my-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Features</h2>
          <div className="flex flex-wrap justify-center gap-5">
            <div className="max-w-xs p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Real-Time Messaging</h3>
              <p className="text-gray-700">Enjoy fast and responsive messaging with your contacts.</p>
            </div>
            <div className="max-w-xs p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Chat with new people</h3>
              <p className="text-gray-700">We want everyone to have friends, so you can search for new users and start chatting with them</p>
            </div>
            <div className="max-w-xs p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">User-Friendly Interface</h3>
              <p className="text-gray-700">A simple and intuitive interface to enhance your chatting experience.</p>
            </div>
           
          </div>
        </section>
        
        <section className="my-10 text-center">
          <button 
            onClick={handleButtonClick} 
            className="btn border-none rounded-box bg-blue-600 btn-lg hover:bg-blue-700 text-2xl mt-2 text-center text-white px-8 py-3"
          >
            Get Started Now
          </button>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;


// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// const LandingPage = () => {
  
//   const navigate = useNavigate();
  
//   const handleButtonClick = () => {
//     navigate('/signup');
//   }

//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding bg-opacity-0'>
//         <h1 className='text-8xl font-semibold text-left text-gray-700'>
//           Welcome
//         </h1>
//         <h1 className='text-5xl font-normal text-left text-gray-900 pt-5'>
//           Ready to
//         </h1>
//         <h1 className='text-6xl font-bold text-left text-black pt-3 pb-7'>
//           Chat with others?
//         </h1>
//         <button onClick={handleButtonClick} class="btn border-none rounded-box bg-blue-600 btn-lg hover:bg-blue-700 text-3xl mt-2 text-center text-white">Sign Up</button>
//       <h1 className='text-l font-normal text-left text-gray-700 pt-2'>
//           Already have an account? <Link to='/signin' className='font-bold text-black hover:underline hover:cursor-pointer'>LogIn</Link>
//         </h1>
//       </div>
//     </div>
//   )
// }

// export default LandingPage

