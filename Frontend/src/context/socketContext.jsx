import React, { createContext, useEffect, useContext, useState } from 'react';
import io from "socket.io-client";
import { useAuthContext } from './AuthContext';


export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {

    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        
        if (authUser) {
            const socket = io("http://sarakel.me",{
                    query: {
                    userId: authUser.userdata?._id
                }});

            setSocket(socket);

            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            })

            return () => socket.close();
        

        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }

    }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocketContext = () => {
  return useContext(SocketContext);
};
