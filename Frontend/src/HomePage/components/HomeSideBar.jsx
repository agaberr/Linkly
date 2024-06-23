import React from 'react'
import Search from './HomeSideBar/Search'
import ChatsSection from './HomeSideBar/ChatsSection'
import ProfileBar from './HomeSideBar/ProfileBar'

const HomeSideBar = () => {
  return (
    <div className='flex flex-col'>
      <ProfileBar />
      <Search />
      <ChatsSection/>
    </div>
  )
}

export default HomeSideBar