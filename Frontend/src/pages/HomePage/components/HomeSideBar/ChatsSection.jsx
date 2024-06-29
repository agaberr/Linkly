import React, { useEffect, useState } from 'react'
import Chat from './Chat'
import getConversations from '../../../../hooks/getConversations'
import getMessagesSocket from '../../../../hooks/getMessagesSocket';
import { useConversation } from '../../../../context/useConversation';

import { useUsersConversationContext } from '../../../../context/usersConversationContext';

const ChatsSection = () => {


  const { searchConversations } = useUsersConversationContext();

  getMessagesSocket();

  const chatElements = [];
  
  // TODO: refactor this code
    for (let i = 0; i < searchConversations?.length; i++) {
      const conversation = searchConversations[i];
  
      chatElements.push(
        <Chat
          key={conversation?._id}
          conversation={conversation}
        />
      );
    }
  
  return (
    <div className='overflow-auto'>
      {chatElements.length > 0 ? chatElements : <p>No conversations found.</p>}
    </div>
  );
};

export default ChatsSection