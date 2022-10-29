import React from "react";

import "./Appeal.scss"

import PlusSvg from "./Image/PlusSvg";

export default function Appeal() {
  return (
    <div>
      <main className="appeal">
        <h1 className="appeal__header">Мои обращения</h1>
        <div className="appeal__content">
          <div className="appeal__content__item">
            <h1 className="appeal__content__item__header">
              Протекает труба. Требуется мастер
            </h1>
            <p className="appeal__content__item__additional">
              Дата обращения: 13.06.2020
            </p>
            <div className="appeal__content__item__status appeal__content__item__status__wait">
                <p className="appeal__content__item__status__text">Ожидание</p>
            </div>
          </div>
          <div className="appeal__content__item">
            <h1 className="appeal__content__item__header">
              Грязный подъезд. Требуется уборщица
            </h1>
            <p className="appeal__content__item__additional">
              Дата обращения: 13.06.2020
            </p>
            <div className="appeal__content__item__status appeal__content__item__status__resolved">
                <p className="appeal__content__item__status__text">Решено</p>
            </div>
          </div>
          <div className="appeal__content__item">
            <h1 className="appeal__content__item__header">
              Неверно выставили счёт
            </h1>
            <p className="appeal__content__item__additional">
              Дата обращения: 13.06.2020
            </p>
            <div className="appeal__content__item__status appeal__content__item__status__none">
                <p className="appeal__content__item__status__text"></p>
            </div>
          </div>
          <div className="appeal__content__item">
            <h1 className="appeal__content__item__header">
              Мы собрали деньги на детскую площадку{" "}
            </h1>
            <p className="appeal__content__item__additional">
              Дата обращения: 13.06.2020
            </p>
            <div className="appeal__content__item__status appeal__content__item__status__unresolved">
                <p className="appeal__content__item__status__text">Не решено</p>
            </div>
          </div>
          <div className="appeal__content__button">
            <PlusSvg></PlusSvg>
            <p className="appeal__content__button__add">Добавить обращение</p>
          </div>
        </div>
      </main>
    </div>
  );
}
