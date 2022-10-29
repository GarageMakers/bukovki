import React from 'react'

import UKAppeal from '../../components/UKAppeal/UKAppeal'
import UKProfile from '../../components/UKProfile/UKProfile'

export default function UKAppealPage() {
  return (
    <div>
        <section className="UK__appeal__page" style={{display: "flex", gap: "2rem"}}>
            <UKProfile></UKProfile>
            <UKAppeal></UKAppeal>
        </section>
    </div>
  )
}
