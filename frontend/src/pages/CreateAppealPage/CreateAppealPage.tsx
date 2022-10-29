import React from 'react'

import "./CreateAppealPage.scss"

import CreateAppeal from '../../components/CreateAppeal/CreateAppeal'
import Profile from '../../components/Profile/Profile'

export default function CreateAppealPage() {
  return (
    <div>
        <section className="create__appeal__page" style={{display: "flex", gap: "2rem"}}>
            <Profile></Profile>
            <CreateAppeal></CreateAppeal>
        </section>
    </div>
  )
}
