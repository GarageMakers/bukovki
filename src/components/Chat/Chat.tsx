import React from 'react'
import ProfileSvg from './Image/ProfileSvg';
import ArrowSvg from './Image/ArrowSvg';

import "./Chat.scss";

export default function Chat() {
  return (
    <div>
        <main className="chat">
            <h1 className="chat__header">Чат</h1>
            <div className="chat__content">
                <div className="chat__content__message">
                    <ProfileSvg></ProfileSvg>
                    <div className="chat__content__message__block">
                        <h1 className="chat__content__message__block__header">Житель №3333</h1>
                        <p className="chat__content__message__block__text">Текст-заполнитель — это текст, который имеет некоторые характеристики реального письменного текста, но является случайным набором слов или сгенерирован иным образом. Его можно использовать для отображения образца шрифтов, создания текста для тестирования или обхода спам-фильтра. </p>
                    </div>
                </div>
                <div className="chat__content__input">
                    <input type="text" className="chat__content__input__field" placeholder="Напишите сообщение"/>
                    <ArrowSvg></ArrowSvg>
                </div>
            </div>
        </main>
    </div>
  )
}
