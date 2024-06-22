import React from 'react'
import Message from './Message'
import getMessages from '../../../hooks/getMessages'

const Messages = () => {

  const messages = getMessages();

  return (
    <div className='px-4 flex-col overflow-auto max-h-[580px]'>
      {messages.length > 0 ? (
        messages.map((message) => (
          <Message
            key={message._id}
            message={message}
          />
        ))
      ) : (
        <p>No messages found.</p>
      )}
    </div>
  )
}

export default Messages