import React, { useEffect } from 'react'
import Chat from './Chat'
import getConversations from '../../../hooks/getConversations'
import getMessagesSocket from '../../../hooks/getMessagesSocket';

const ChatsSection = () => {

  getMessagesSocket();

  const conversations = getConversations();

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