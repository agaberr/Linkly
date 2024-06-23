import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { ConversationProvider } from "./context/useConversation.jsx"
import { SocketContextProvider } from "./context/socketContext.jsx"
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
      <ConversationProvider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </ConversationProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
