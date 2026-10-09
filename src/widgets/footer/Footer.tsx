import './Footer.scss';

import { contactsMock } from '@entities/contacts';

export function Footer() {
  const main = contactsMock[0]; // первый адрес — основной

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col logo-col">
          <div className="logo">GMS <span className="lab">LAB</span></div>
          <div className="tagline">Авторская зуботехническая лаборатория</div>
        </div>
        <div className="footer-col contacts-col">
          <a href={`tel:${main.phone.replace(/\D/g, '')}`}>{main.phone}</a>
          <a href={`mailto:${main.email}`}>{main.email}</a>
          <div>{main.city}, {main.address}</div>
        </div>
        <div className="footer-col socials-col">
          <div>Telegram</div>
          <div>WhatsApp</div>
          <div>VK</div>
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="footer-bottom">© 2026 GMS LAB. Все права защищены.</div>
    </footer>
  );
}