import './ContactCard.scss';

import React from 'react';

import type { ContactPoint } from '../types';

interface ContactCardProps {
  contact: ContactPoint;
}

export const ContactCard: React.FC<ContactCardProps> = ({ contact }) => (
  <div className="contact-card">
    <h3 className="contact-card__city">{contact.city}</h3>
    <p className="contact-card__address">{contact.address}</p>
    <a className="contact-card__phone" href={`tel:${contact.phone.replace(/\D/g, '')}`}>
      {contact.phone}
    </a>
    <a className="contact-card__email" href={`mailto:${contact.email}`}>
      {contact.email}
    </a>
  </div>
);