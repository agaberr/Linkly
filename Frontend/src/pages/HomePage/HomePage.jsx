import React from 'react'
import HomeSideBar from './components/HomeSideBar'
import MessagesSection from './components/MessagesSection'

const VerticalDivider = () => {
  return (
    <div className="w-px h-full bg-gray-300"></div>
  );
};

const HomePage = () => {
  return (
    <div className='flex sm:w-[1600px] md:h-[700px] h-screen'>
        <HomeSideBar />

      <VerticalDivider />

      <div className="flex-grow">
        <MessagesSection />
      </div>
    </div>
  )
}

export default HomePage

// flex sm:w-[1500px] md:h-[700px] overflow-hidden bg-white