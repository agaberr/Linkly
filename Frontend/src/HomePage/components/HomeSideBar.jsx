import React from 'react'
import Search from './HomeSideBar/Search'
import ChatsSection from './HomeSideBar/ChatsSection'
import SignOut from './HomeSideBar/SignOut'

const HomeSideBar = () => {
  return (
    <div className='flex flex-col'>
      <Search />
      <ChatsSection />
      <SignOut />
    </div>
  )
}

export default HomeSideBar