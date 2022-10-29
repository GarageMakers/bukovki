import React from 'react'
import ProfileSvg from './Image/ProfileSvg';
import ArrowSvg from './Image/ArrowSvg';

import "./Chat.scss";

import Message from "../Message/Message";

export default function Chat() {
  return (
    <div>
        <main className="chat">
            <h1 className="chat__header">Чат</h1>
            <div className="chat__content">
                <div className="chat__content__message">
                    <Message personal={false}></Message>
                    <Message personal={false}></Message>
                    <Message personal={true}></Message>
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
