import './Header.scss';

import { useState } from 'react';

const links = [
  { href: '#works', label: 'Работы' },
  { href: '#services', label: 'Услуги и цены' },
  { href: '#about', label: 'О лаборатории' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#team', label: 'Команда' },
  { href: '#contacts', label: 'Контакты' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        GMS <span className="lab">LAB</span>
      </div>
      <nav className="nav">
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li className="contact-btn">
            <a href="#contacts">Связаться</a>
          </li>
        </ul>
      </nav>
      <button
        className="burger"
        aria-label="Открыть меню"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </button>
      <nav className={menuOpen ? 'mobile-menu mobile-menu--open' : 'mobile-menu'}>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="contact-btn">
            <a href="#contacts" onClick={() => setMenuOpen(false)}>
              Связаться
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;