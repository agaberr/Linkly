import React from 'react'
import { toast } from 'react-hot-toast'
import { useConversation } from '../context/useConversation' 
import { useAuthContext } from '../context/AuthContext' 

const sendMessage = () => {
  
  const { messages, setMessages, selectedConversation } = useConversation();


  const sendmessage = async (messageSent) => {

    try {

      if (!messageSent || !messageSent.trim()) {
        toast.error("Message content is required");
        return;
      }

      const req = await fetch(`/api/message/send/${selectedConversation._id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ "content": messageSent }),
        });
    
        if (!req.ok) {
        toast.error("Couldn't send message successfully");
        return;
        }

    }catch(err) {
      toast.error("Internal Server Error");
          console.log(err);
    }
  } 

  return sendmessage;

}

export default sendMessage