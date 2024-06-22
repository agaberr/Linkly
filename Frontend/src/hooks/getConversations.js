import React, { useEffect, useState } from 'react'

const getConversations = () => {

        const [conversations, setConversations] = useState([]);

    useEffect(() => {
    const getconversations = async() => {
        try {
            const getConversationUsers = await fetch('/api/users/conversationusers')

            if (!getConversationUsers.ok) {
                toast.error("Error loading users");
                return;
              }

            const convData = await getConversationUsers.json(); 
            setConversations(convData);

        } catch(err) {
            toast.error("Internal Server Error");
            console.log(err);
        }
    }

    getconversations();

    }, []);

    return (conversations);
}

export default getConversations;