import './Header.scss';

import { useState } from 'react';

import { useActiveSection } from './model';
import { links } from './model/links';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <header className="header">
      <div className="logo">
        GMS <span className="lab">LAB</span>
      </div>
      <nav className="nav">
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeSection === link.href.slice(1) ? 'active' : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="contact-btn">
            <a href="#contacts" className={activeSection === 'contacts' ? 'active' : ''}>
              Связаться
            </a>
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
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={activeSection === link.href.slice(1) ? 'active' : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="contact-btn">
            <a
              href="#contacts"
              onClick={() => setMenuOpen(false)}
              className={activeSection === 'contacts' ? 'active' : ''}
            >
              Связаться
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;