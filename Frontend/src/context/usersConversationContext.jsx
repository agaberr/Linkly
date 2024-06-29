import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from "react-hot-toast";

const usersConversationContext = createContext();

export const useUsersConversationContext = () => useContext(usersConversationContext);

export const ConversationsProvider = ({ children }) => {

  const [searchConversations, setConversations] = useState([]);

  // TODO: could be refactored ???
  const [keyword, setKeyword] = useState('');

  return (
    <usersConversationContext.Provider value={{ keyword, setKeyword, searchConversations, setConversations }}>
      {children}
    </usersConversationContext.Provider>
  );
};
