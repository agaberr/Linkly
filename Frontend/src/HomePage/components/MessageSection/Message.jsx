import React from 'react'
import { useConversation } from '../../../context/useConversation'
import { useAuthContext } from '../../../context/AuthContext'

const Message = ({ message }) => {

  const { authUser } = useAuthContext();
  
  const {selectedConversation} = useConversation();

  const isSender = authUser.userdata._id === message.sender_id;
  const chatBubble = isSender ? "chat-end" : "chat-start";
  const profilePic = isSender ? authUser.userdata.profile_picture : selectedConversation?.profile_picture;

  return (
    <div>
        <div className={`chat ${chatBubble}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img 
              alt="Profile Picture" 
              src={`${profilePic}`}/>
            </div>
        </div>

        <div className={`chat-bubble ${isSender ? "bg-blue-600" : ""} text-white text-lg font-semibold`}>{message.content}</div>
        <div className="chat-footer opacity-50">
            {message.created_at}
        </div>
        </div>
    </div>
  )
}

export default Message