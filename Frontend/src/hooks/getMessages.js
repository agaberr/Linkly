import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useConversation } from '../context/useConversation' 

const getMessages = () => {
  
  const { messages, setMessages, selectedConversation } = useConversation();
  useEffect(() => {
    const getmessages = async () => {

      try {

        const req = await fetch(`/api/message/${selectedConversation._id}`);
        
        if (!req.ok) {
          toast.error("Error loading messages");
          return;
          }
          
        const messageData = await req.json(); 
        setMessages(messageData);

      } catch (err) {
        toast.error("Internal Server Error");
        console.log(err);
      }
    }
      if (selectedConversation?._id) getmessages();

}, [selectedConversation?._id, setMessages])

  return messages;

  }

export default getMessages