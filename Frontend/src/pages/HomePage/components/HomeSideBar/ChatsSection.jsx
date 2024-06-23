import React, { useEffect, useState } from 'react'
import Chat from './Chat'
import getConversations from '../../../../hooks/getConversations'
import getMessagesSocket from '../../../../hooks/getMessagesSocket';
import { useConversation } from '../../../../context/useConversation';

import { useUsersConversationContext } from '../../../../context/usersConversationContext';

const ChatsSection = () => {

  const [lastMessages, setLastMessages] = useState({});
  const { messages } = useConversation();

  const { searchConversations } = useUsersConversationContext();

  const { conversations } = getConversations();


  useEffect(() => {
    // Function to get the last message from an array of messages
    const getLastMessage = (messages) => {
      if (messages.length === 0) {
        return null;
      }
      return messages[messages.length - 1];
    };

    // Fetch last messages for each conversation
    const fetchLastMessages = () => {
      const updatedLastMessages = { ...lastMessages };
      const lastMessageContent = getLastMessage(messages)?.content;
      const lastMessageId = getLastMessage(messages)?._id;          
      updatedLastMessages[lastMessageId] = lastMessageContent;
      setLastMessages(updatedLastMessages);
    };

    if (messages.length > 0) {
      fetchLastMessages();
    }
  }, [messages]);

  getMessagesSocket();

  const chatElements = [];
  
  if (searchConversations?.length > 0) {
  for (let i = 0; i < searchConversations?.length; i++) {
    const conversation = searchConversations[i];
    const message = messages[i];

    const lastMessage = lastMessages[message?._id] || 'No messages';
    chatElements.push(
      <Chat
        key={conversation?._id}
        conversation={conversation}
        lastMessage={lastMessage}
      />
    );
  }
  // TODO: refactor this code
  } else {
    for (let i = 0; i < conversations?.length; i++) {
      const conversation = conversations[i];
      const message = messages[i];
  
      const lastMessage = lastMessages[message?._id] || 'No messages';
      chatElements.push(
        <Chat
          key={conversation?._id}
          conversation={conversation}
          lastMessage={lastMessage}
        />
      );
    }
  }
  return (
    <div className='overflow-auto'>
      {chatElements.length > 0 ? chatElements : <p>No conversations found.</p>}
    </div>
  );
};

export default ChatsSection