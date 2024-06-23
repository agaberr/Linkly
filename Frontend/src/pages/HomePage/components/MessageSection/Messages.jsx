import React, { useEffect, useRef } from 'react'
import Message from './Message'
import getMessages from '../../../../hooks/getMessages'

const Messages = () => {
  const messages = getMessages();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={`px-4 flex-col overflow-auto h-[580px] ${messages.length === 0 ? 'flex justify-center items-center' : ''}`}>
      {messages.length > 0 ? (
        messages.map((message) => (
          <Message
            key={message._id}
            message={message}
          />
        ))
      ) : (
        <p className='text-4xl'>No messages found, be the first to send.</p>
      )}
      <div ref={messagesEndRef} />
    </div>
  )
}

export default Messages;
