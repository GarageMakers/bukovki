import React from 'react'
import { Link } from 'react-router-dom'
import ProfileImg from './Images/ProfileImg'
import ProfileSvg from './Images/ProfileSvg'
import ChatSvg from './Images/ChatSvg'
import MessagesSvg from './Images/MessagesSvg'
import TopSvg from './Images/TopSvg'

import "./UKProfile.scss";

export default function UKProfile() {
  return (
    <div>
        <main className="profile">
            <header className="profile__header">
                <ProfileImg></ProfileImg>
                <div className="profile__header__content">
                  <h1 className="profile__header__content__header">УК “Дом строй”</h1>
                  <p className="profile__header__content__additional">Дата регистрации: 13.06.2020</p>
                </div>
            </header>
            <section className="profile__menu">
              <Link to="/Sosedi/UK/profile" style={{textDecoration: "none"}}>
              <div className="profile__menu__item profile__menu__item__active">
                <ProfileSvg></ProfileSvg>
                <h1 className="profile__menu__item__header">Профиль</h1>
              </div>
              </Link>
              <Link to="/Sosedi/appeal" style={{textDecoration: "none"}}>
              <div className="profile__menu__item">
                <MessagesSvg></MessagesSvg>
                <h1 className="profile__menu__item__header">Обращения</h1>
              </div>
              </Link>
            </section>
        </main>
    </div>
  )
}
