import React, { useEffect, useState } from 'react'
import Chat from './Chat'
import getConversations from '../../../hooks/getConversations'
import getMessagesSocket from '../../../hooks/getMessagesSocket';
import { useConversation } from '../../../context/useConversation';

const ChatsSection = () => {

  const [lastMessages, setLastMessages] = useState({});
  const { messages } = useConversation();
  const conversations = getConversations();

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
      // console.log('updated', updatedLastMessages);
    };

    if (messages.length > 0) {
      fetchLastMessages();
    }
  }, [messages]);

  getMessagesSocket();

  // if (messages.length > 0) {
  //   messages.map((message) => {
  //     console.log(lastMessages[message._id]?.content);
  //     console.log(lastMessages[message._id]);
  //     console.log(lastMessages);
  //     console.log(message._id);
  //     console.log('------------------------------------------------')
  //   });
  // };

  const chatElements = [];
  for (let i = 0; i < conversations.length; i++) {
    const conversation = conversations[i];
    const message = messages[i];

    const lastMessage = lastMessages[message?._id] || 'No messages';
    chatElements.push(
      <Chat
        key={conversation._id}
        conversation={conversation}
        lastMessage={lastMessage}
      />
    );
  }

  return (
    <div>
      {chatElements.length > 0 ? chatElements : <p>No conversations found.</p>}
    </div>
  );
};

export default ChatsSection