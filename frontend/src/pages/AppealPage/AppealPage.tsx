import React from 'react'

import "./AppealPage.scss"

import Appeal from '../../components/Appeal/Appeal'
import Profile from '../../components/Profile/Profile'

export default function AppealPage() {
  return (
    <div>
        <section className="appeal__page" style={{display: "flex", gap: "2rem"}}>
            <Profile></Profile>
            <Appeal></Appeal>
        </section>
    </div>
  )
}
