import React from 'react'

import Chat from '../../components/Chat/Chat'
import Profile from '../../components/Profile/Profile'

import "./ChatPage.scss"

export default function ChatPage() {
  return (
    <div>
      <section className="chat__page" style={{display: "flex", gap: "2rem"}}>
        <Profile></Profile>
        <Chat></Chat>
      </section>
    </div>
  )
}
