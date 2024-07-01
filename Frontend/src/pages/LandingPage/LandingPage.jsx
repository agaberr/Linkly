import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/signup');
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <header className='w-full p-6 bg-gray-400 bg-clip-padding bg-opacity-0'>
        <nav className='flex justify-between items-center'>
          {/* <img src='/images/LogoCircle.png' alt='Logo' className='w-4 h-4' /> */}
          <div className='text-3xl font-bold mx-5'>Linkly</div>
          <div>
            <Link to='#features' className='mx-2 text-lg'>Features</Link>
            <Link to='#about' className='mx-2 text-lg'>About</Link>
            <button onClick={handleButtonClick} className=' mx-5 btn border-none rounded-box bg-blue-600 btn-lg hover:bg-blue-700 text-lg text-white'>Sign Up</button>
          </div>
        </nav>
        <div className='text-center h-screen bg-cover bg-center mt-6 mx-[-24px]'
              style={{ backgroundImage: "url('/images/backgroundLandingPage.png')" }}
          >
          <div className='flex flex-col items-start h-full justify-center px-6'>
            <h1 className='text-8xl font-semibold text-gray-700'>Welcome to</h1>
            <h1 className='text-8xl font-semibold text-gray-700'>Linkly</h1>
            <p className='text-5xl font-normal text-gray-900 pt-5'>The Best Way to Connect with Others</p>
          </div>
        </div>
      </header>

      {/* Feature Section */}
      <section id='features' className='w-full p-6 bg-white mt-[-24px]'>
      <div className='py-20 bg-white'>
        <div className='text-center mb-10'>
          <h2 className='text-6xl font-semibold text-gray-700'>Key Features</h2>
        </div>
        <div className='flex flex-wrap justify-around items-center'>
          <div className='w-1/3 p-6'>
            <img src='/images/feature1.jpg' alt='Secure Login' className='mx-auto mb-4' />
            <h3 className='text-4xl font-semibold text-gray-700'>Secure Login</h3>
            <p className='text-xl text-gray-900 mt-2'>Login and logout securely with our state-of-the-art authentication system.</p>
          </div>
          <div className='w-1/3 p-6'>
            <img src='/images/feature2.jpg' alt='Instant Chat' className='mx-auto mb-4' />
            <h3 className='text-4xl font-semibold text-gray-700'>Instant Chat</h3>
            <p className='text-xl text-gray-900 mt-2'>Start chatting instantly with your friends and family.</p>
          </div>
          <div className='w-1/3 p-6'>
            <img src='/images/feature3.jpg' alt='User Search' className='mx-auto mb-4' />
            <h3 className='text-4xl font-semibold text-gray-700'>User Search</h3>
            <p className='text-xl text-gray-900 mt-2'>Easily search for specific users and connect with them.</p>
          </div>
        </div>
      </div>
      </section>

      <section id='about' className='w-full py-16 px-6 bg-gray-200'>
  <h2 className='text-6xl font-bold text-center text-black pb-10'>About Us</h2>
  <div className='max-w-5xl mx-auto text-xl text-gray-900'>
    <p className='pb-8'>
      Linkly was inspired by our desire to create a seamless communication platform that brings people closer together.
      This project is a portfolio project for Holberton School, showcasing our skills and dedication. Learn more about our journey and the team behind Linkly.
    </p>
    <div className='flex flex-col md:flex-row justify-around items-center md:space-x-10'>
      <div className='mb-8 md:mb-0'>
        <h3 className='text-2xl font-semibold mb-2'>Ahmed Gaber</h3>
        <p>
          <a href='https://www.linkedin.com/in/ahmed-gaber-52aa39246/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>LinkedIn</a> | 
          <a href='https://github.com/agaberr' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>GitHub</a> | 
          <a href='https://x.com/A_gaberr' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>Twitter</a>
        </p>
      </div>
      <div>
        <h3 className='text-2xl font-semibold mb-2'>Saif ElSayed</h3>
        <p>
          <a href='https://www.linkedin.com/in/saif-alsayed-505b95245/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>LinkedIn</a> | 
          <a href='https://github.com/SeifAlsayed02' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>GitHub</a> | 
          <a href='https://x.com/saif_alsaid' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>Twitter</a>
        </p>
      </div>
    </div>
    <p className='pt-8 text-center'>
      View our project on <a href='https://github.com/agaberr/Linkly' target='_blank' rel='noopener noreferrer' className='font-bold text-blue-600 hover:underline'>GitHub</a>.
    </p>
  </div>
</section>

    </div>
  );
}

export default LandingPage;
