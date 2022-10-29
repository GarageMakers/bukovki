import React from 'react'

import "./PaymentsPage.scss"

import Payments from '../../components/Payments/Payments'
import Profile from '../../components/Profile/Profile'

export default function PaymentsPage() {
  return (
    <div>
        <section className="payments__page" style={{display: "flex", gap: "2rem"}}>
            <Profile></Profile>
            <Payments></Payments>
        </section>
    </div>
  )
}
