import './Header.scss';

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        GMS <span className="lab">LAB</span>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#works">Работы</a></li>
          <li><a href="#services">Услуги и цены</a></li>
          <li><a href="#about">О лаборатории</a></li>
          <li><a href="#reviews">Отзывы</a></li>
          <li><a href="#team">Команда</a></li>
          <li><a href="#contacts">Контакты</a></li>
          <li className="contact-btn"><a href="#contacts">Связаться</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;