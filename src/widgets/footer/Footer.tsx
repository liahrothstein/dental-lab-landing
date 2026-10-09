import './Footer.scss';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-col logo-col">
        <div className="logo">GMS <span className="lab">LAB</span></div>
        <div className="tagline">Авторская зуботехническая лаборатория</div>
      </div>
      <div className="footer-col contacts-col">
        <div>+7 (900) 000-00-00</div>
        <div>hello@aurum-lab.ru</div>
        <div>г. Москва</div>
      </div>
      <div className="footer-col socials-col">
        <div>Telegram</div>
        <div>WhatsApp</div>
        <div>VK</div>
      </div>
    </div>
    <div className="footer-line"></div>
    <div className="footer-bottom">
      © 2026 GMS LAB. Все права защищены.
    </div>
  </footer>
);

export default Footer;