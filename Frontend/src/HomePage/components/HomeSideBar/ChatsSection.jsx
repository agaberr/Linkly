import React, { useEffect } from 'react'
import Chat from './Chat'
import getConversations from '../../../hooks/getConversations'

const ChatsSection = () => {

  const conversations = getConversations();
  // console.log(conversations);

  return (
    <div>
      {conversations.length > 0 ? (
        conversations.map((conversation) => (
          <Chat
            key={conversation._id}
            conversation={conversation}
          />
        ))
      ) : (
        <p>No conversations found.</p>
      )}
    </div>
  );
}

export default ChatsSection