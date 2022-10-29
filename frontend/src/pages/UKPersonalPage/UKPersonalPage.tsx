import React from 'react'

import "./UKPersonalPage.scss"

import UKProfile from '../../components/UKProfile/UKProfile'
import Personal from '../../components/Personal/Personal'

export default function UKPersonalPage() {
  return (
    <div>
        <section className="UK__personal__page" style={{display: "flex", gap: "2rem"}}>
            <UKProfile></UKProfile>
            <Personal></Personal>
        </section>
    </div>
  )
}
