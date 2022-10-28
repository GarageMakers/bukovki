import React from 'react'
import Login from '../../components/Login/Login'

import Profile from '../../components/Profile/Profile'

export default function LoginPage() {
  return (
    <div>
        <section className="login__page" style={{display: "flex", gap: "2rem"}}>
          <Profile></Profile>
          <Login></Login>
        </section>
    </div>
  )
}
