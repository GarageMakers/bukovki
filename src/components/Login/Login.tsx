import React from 'react'

import "./Login.scss";

export default function Login() {
  return (
    <div>
        <main className="login">
          <h1 className="login__header">Мой профиль</h1>
          <div className="login__content">
            <div className="login__content__left__side">
              <div className="login__content__left__side__item">
                <h1 className="login__content__left__side__item__header">Имя</h1>
                <input type="text" className="login__content__left__side__item__input" placeholder="Александр"/>
              </div>
              <div className="login__content__left__side__item">
                <h1 className="login__content__left__side__item__header">День рождения</h1>
                <input type="text" className="login__content__left__side__item__input" placeholder="14.08.2002"/>
              </div>
              <div className="login__content__left__side__item">
                <button className="login__content__left__side__item__button">Выйти из аккаунта</button>
              </div>
            </div>
            <div className="login__content__right__side">
              <div className="login__content__right__side__item">
                <h1 className="login__content__right__side__item__header">Моя почта</h1>
                <input type="text" className="login__content__right__side__item__input" placeholder="ruslan33777@mail.ru"/>
              </div>
              <div className="login__content__right__side__item">
                <h1 className="login__content__right__side__item__header">Пароль</h1>
                <input type="text" className="login__content__right__side__item__input" placeholder="********************"/>
              </div>
              <div className="login__content__right__side__item">
                <h1 className="login__content__right__side__item__header">Номер телефона</h1>
                <input type="text" className="login__content__right__side__item__input" placeholder="+7(123)456-78-90"/>
              </div>
            </div>
          </div>
        </main>
    </div>
  )
}
