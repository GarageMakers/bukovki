import React from 'react'

import "./Login.scss"

import HomeSvg from './Image/HomeSvg'

export const toHome = () => {
    window.location.href = "/Sosedi/profile";
}

export default function Login() {
  return (
    <div>
        <main className="login">
            <HomeSvg></HomeSvg>
            <h1 className="login__welcome">Добро пожаловать</h1>
            <div className="login__login">
                <div className="login__login__input">
                    <h1 className="login__login__input__header">Моя почта</h1>
                    <input type="text" className="login__login__input__input" placeholder="ruslan33777@mail.ru"/>
                </div>
                <div className="login__login__input">
                    <h1 className="login__login__input__header">Пароль</h1>
                    <input type="text" className="login__login__input__input" placeholder="********************"/>
                </div>
                <button onClick={toHome}  className="login__button">Войти</button>
            </div>
        </main>
    </div>
  )
}
