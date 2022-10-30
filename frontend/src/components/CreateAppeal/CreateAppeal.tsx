/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react'

import "./CreateAppeal.scss"

export const postAppealData = async () => {
        const header = document.getElementsByTagName("input")[0].value
        const text = document.getElementsByTagName("input")[1].value
        const response = await fetch("http://localhost:5000/api/appeals", {
        method: "POST",
        mode: "no-cors",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        header: header,
        text: text,
        }),
    });
}

export default function CreateAppeal() {
  return (
    <div>
        <main className="create__appeal">
            <h1 className="create__appeal__header">Создание обращения</h1>
            <div className="create__appeal__content">
                <div className="create__appeal__content__item">
                    <h1 className="create__appeal__content__item__header">Название темы</h1>
                    <form>
                        <input type="text" className="create__appeal__content__item__input" placeholder="Напишите свою тему"/>
                    </form>
                </div>
                <div className="create__appeal__content__item">
                    <h1 className="create__appeal__content__item__header">Содержание</h1>
                    <form>
                        <input type="text" className="create__appeal__content__item__input" placeholder="Напишите текст"/>
                    </form>
                </div>
                <div className="create__appeal__content__buttons">
                    <button className="create__appeal__content__buttons__photo">Добавить фотографии</button>
                    <button onClick={postAppealData} className="create__appeal__content__buttons__send">Отправить</button>
                </div>
            </div>
        </main>
    </div>
  )
}
