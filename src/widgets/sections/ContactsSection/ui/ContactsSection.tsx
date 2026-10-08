import './ContactsSection.scss';

import { contactsMock } from '@entities/contacts';
import { ContactCard } from '@entities/contacts';
import React from 'react';

export const ContactsSection: React.FC = () => {
  return (
    <section className="contacts-section" id="contacts">
      <div className="container">
        <h2>Контакты</h2>
        <div className="contacts-section__grid">
          {contactsMock.map((contact, idx) => (
            <ContactCard key={idx} contact={contact} />
          ))}
        </div>
      </div>
    </section>
  );
};