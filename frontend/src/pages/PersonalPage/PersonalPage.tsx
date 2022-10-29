import React from 'react'
import Personal from '../../components/Personal/Personal'

import Profile from '../../components/Profile/Profile'

import "./PersonalPage.scss";

export default function PersonalPage() {
  return (
    <div>
        <section className="personal__page" style={{display: "flex", gap: "2rem"}}>
          <Profile></Profile>
          <Personal></Personal>
        </section>
    </div>
  )
}
