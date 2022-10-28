import React from 'react'

import "./Start.scss"

import HomeSvg from './Image/HomeSvg'

export default function Start() {
  return (
    <div>
        <main className="start">
            <HomeSvg></HomeSvg>
            <h1 className="start__welcome">Добро пожаловать</h1>
            <div className="start__login">
                <div className="start__login__input">
                    <h1 className="start__login__input__header">Моя почта</h1>
                    <input type="text" className="start__login__input__input" />
                </div>
                <div className="start__login__input">
                    <h1 className="start__login__input__header">Пароль</h1>
                    <input type="text" className="start__login__input__input" />
                </div>
            </div>
            <button className="start__button">Войти</button>
        </main>
    </div>
  )
}
