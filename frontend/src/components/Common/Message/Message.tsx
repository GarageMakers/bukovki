import React from 'react'

import "./Message.scss"

import ProfileSvg from "./Image/ProfileSvg"

export type InputProps = {
  style?: React.CSSProperties,
  personal: boolean,
}

export default function Input({ style, personal }: InputProps) {
  if(!personal) {
    return (
      <div>
          <div className="input">
              <ProfileSvg></ProfileSvg>
              <div className="message">
                  <h1 className="message__header">Житель №3333</h1>
                  <p className="message__text">Текст-заполнитель — это текст, который имеет некоторые характеристики реального письменного текста, но является случайным набором слов или сгенерирован иным образом. Его можно использовать для отображения образца шрифтов, создания текста для тестирования или обхода спам-фильтра. </p>
              </div>
          </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className="input">
              <div className="message message__personal">
                  <h1 className="message__header">Житель №3333</h1>
                  <p className="message__text">Текст-заполнитель — это текст, который имеет некоторые характеристики реального письменного текста, но является случайным набором слов или сгенерирован иным образом. Его можно использовать для отображения образца шрифтов, создания текста для тестирования или обхода спам-фильтра. </p>
              </div>
              <ProfileSvg></ProfileSvg>
          </div>
      </div>
    )
  }
}
