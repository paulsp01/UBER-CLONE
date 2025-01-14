import React, { createContext, useEffect } from 'react';
import { io } from 'socket.io-client';

export const SocketContextProvider = createContext();

const socket = io(`${import.meta.env.VITE_BASE_URL}`); 

const SocketContext = ({children}) => {
    useEffect(() => {
        // Basic connection logic
        socket.on('connect', () => {
            console.log('Connected to server');
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

    }, []);

  return (
    <SocketContextProvider.Provider value={{ socket }}>
    {children}
</SocketContextProvider.Provider>
  )
}

export default SocketContext
