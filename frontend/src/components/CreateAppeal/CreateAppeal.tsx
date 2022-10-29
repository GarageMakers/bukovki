import React from 'react'

import "./CreateAppeal.scss"

export default function CreateAppeal() {
  return (
    <div>
        <main className="create__appeal">
            <h1 className="create__appeal__header">Создание обращения</h1>
            <div className="create__appeal__content">
                <div className="create__appeal__content__item">
                    <h1 className="create__appeal__content__item__header">Название темы</h1>
                    <input type="text" className="create__appeal__content__item__input" placeholder="Напишите свою тему"/>
                </div>
                <div className="create__appeal__content__item">
                    <h1 className="create__appeal__content__item__header">Содержание</h1>
                    <input type="text" className="create__appeal__content__item__input" placeholder="Напишите текст"/>
                </div>
                <div className="create__appeal__content__buttons">
                    <button className="create__appeal__content__buttons__photo">Добавить фотографии</button>
                    <button className="create__appeal__content__buttons__send">Отправить</button>
                </div>
            </div>
        </main>
    </div>
  )
}
