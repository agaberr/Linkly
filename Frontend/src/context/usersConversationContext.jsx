import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from "react-hot-toast";

const usersConversationContext = createContext();

export const useUsersConversationContext = () => useContext(usersConversationContext);

export const ConversationsProvider = ({ children }) => {

    const [searchConversations, setConversations] = useState([]);
    const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const searchuser = async (keyword) => {
        try {
    
        const req = await fetch(`/api/search`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "keyword": keyword }),
            });
        
            if (!req.ok) {
            toast.error("error searching");
            return;
            }
            const convData = await req.json();
            setConversations(convData);
    
        } catch(err) {
            toast.error("Internal Server Error");
                console.log(err);
          }
    
    };

    searchuser();
  }, []);


 

  return (
    <usersConversationContext.Provider value={{ keyword, setKeyword, searchConversations, setConversations }}>
      {children}
    </usersConversationContext.Provider>
  );
};
