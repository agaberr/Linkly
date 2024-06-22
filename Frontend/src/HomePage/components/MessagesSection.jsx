import React from 'react'
import InfoBar from './MessageSection/InfoBar'
import Messages from './MessageSection/Messages'
import SendMessage from './MessageSection/SendMessage'
import { useConversation } from '../../context/useConversation'

const MessagesSection = () => {

  const {selectedConversation, setSelectedConversation} = useConversation();

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

const ChatNotSelected = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-2xl md:text-3xl text-gray-700 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 TopG</p>
				<p>Please select a chat to message</p>
			</div>
		</div>
  )
}