import React from 'react'
import Search from './HomeSideBar/Search'
import ChatsSection from './HomeSideBar/ChatsSection'
import SignOut from './HomeSideBar/SignOut'
import { ConversationProvider } from "../../context/useConversation"

const HomeSideBar = () => {
  return (
    <div className='flex flex-col'>
      <Search />
      <ConversationProvider>
        <ChatsSection />
      </ConversationProvider>
      <SignOut />
    </div>
  )
}

export default HomeSideBar