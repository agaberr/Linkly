import React, { useState } from 'react'
import { useConversation } from '../../../context/useConversation'
import { useSocketContext } from '../../../context/socketContext';

const Chat = ({ conversation }) => {

  
  const { onlineUsers } = useSocketContext();
  const {selectedConversation, setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  const isOnlineUser = onlineUsers.includes(conversation._id)

  return (
    <>
      <div
        onClick={() => setSelectedConversation(conversation)}
        className={`flex gap-2 items-center hover:bg-gray-100 pl-5 py-2 cursor-pointeris hover:cursor-pointer ${isSelected ? "bg-gray-100" : "bg-white"}`}>
        <div className={`avatar ${isOnlineUser ? "online" : ""} `}>
          <div className='w-12 rounded-full'>
            <img src={conversation.profile_picture} alt='user avatar'/>
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className=''>
            <p className='font-bold  text-gray-900'>
              {conversation.username}
            </p>
            <p className='font-normal text-gray-600'>
              hello gaboora how are ...
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat