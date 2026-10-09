import './ContactsSection.scss';

import { ContactCard, contactsMock } from '@entities/contacts';
import { RequestForm } from '@features/request-form';

export function ContactsSection() {
  return (
    <section id="contacts" className="contacts-section">
      <div className="container">
        <h2>Контакты</h2>
        <div className="contacts-section__grid">
          {contactsMock.map((contact) => (
            <ContactCard key={contact.city} contact={contact} />
          ))}
        </div>
        <div className="contacts-section__form">
          <h3 className="contacts-section__form-title">Оставить заявку</h3>
          <RequestForm />
        </div>
      </div>
    </section>
  );
}