import React from 'react'
import Search from './HomeSideBar/Search'
import ChatsSection from './HomeSideBar/ChatsSection'
import LogOut from './HomeSideBar/LogOut'

const HomeSideBar = () => {
  return (
    <div className='flex flex-col'>
      <Search />
      <ChatsSection />
      <LogOut />
    </div>
  )
}

export default HomeSideBar