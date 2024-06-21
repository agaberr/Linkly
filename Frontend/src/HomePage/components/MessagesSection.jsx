import React from 'react'
import InfoBar from './MessageSection/InfoBar'
import Messages from './MessageSection/Messages'
import SendMessage from './MessageSection/SendMessage'

const MessagesSection = () => {
  return (
    <div>
      <InfoBar />
      <Messages />
      <SendMessage />
    </div>
  )
}

export default MessagesSection