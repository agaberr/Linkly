import React, { useEffect } from 'react'
import { useSocketContext } from '../context/socketContext'
import { useConversation } from '../context/useConversation';

const getMessagesSocket = () => {
  
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {

        socket?.on("newMessage", (newMessage) => {

            setMessages([...messages, newMessage])

        })

        return () => socket?.off("newMessage");
    
    }, [socket, setMessages, messages]);
    
}

export default getMessagesSocket