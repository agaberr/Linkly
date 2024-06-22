import React from 'react'
import { useConversation } from '../../../context/useConversation'

const Message = ({ message }) => {

  const isSender = true;

  return (
    <div>
        {/* NOTE: chat-end is me and chat-start is other */}
        <div className={`chat ${isSender ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://avatar.iran.liara.run/username?username=agaberr" />
            </div>
        </div>

        <div className={`chat-bubble ${isSender ? "bg-blue-600" : ""} text-white text-lg font-semibold`}>Hello gaboora how are you man </div>
        <div className="chat-footer opacity-50">
            Seen at 12:46
        </div>
        </div>
    </div>
  )
}

export default Message