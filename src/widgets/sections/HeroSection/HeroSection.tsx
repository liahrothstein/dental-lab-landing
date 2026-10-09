import './HeroSection.scss';

import React from 'react';

const HeroSection: React.FC = function () {
  return (
    <section id="hero" data-reveal>
      <div className="container">
        <h1>
          Авторская зуботехническая лаборатория <span className="accent">GMS LAB</span>
        </h1>
        <p>
          Цифровой протокол. Керамика ручной работы. Работаем по всей России.
        </p>
        <div className="buttons">
          <a className="btn btn--primary" href="#contacts">
            Оставить заявку
          </a>
          <a className="btn btn--outline" href="#works">
            Примеры работ
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;