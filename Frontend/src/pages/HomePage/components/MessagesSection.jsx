import React, { useEffect } from 'react'
import InfoBar from './MessageSection/InfoBar'
import Messages from './MessageSection/Messages'
import SendMessage from './MessageSection/SendMessage'
import { useConversation } from '../../../src/context/useConversation'
import { useAuthContext } from '../../../src/context/AuthContext'


const MessagesSection = () => {


  const { authUser } = useAuthContext();
  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(() => {

    // return back to welcome page when user is logged in again
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  const ChatNotSelected = () => {
    return (
      <div className='flex items-center justify-center w-full h-full'>
        <div className='px-4 text-center sm:text-2xl md:text-3xl text-gray-700 font-semibold flex flex-col items-center gap-2'>
          <p>Hello {authUser.userdata.username}</p>
          <p>Please select a chat to start messaging</p>
        </div>
      </div>
    )
  }


  if (selectedConversation)  
      return (
      <div>
        <InfoBar />
        <Messages />
        <SendMessage />
      </div>
    )
  else
    return (<ChatNotSelected />)
}

export default MessagesSection;