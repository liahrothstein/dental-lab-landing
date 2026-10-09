import './ServicesSection.scss';

import { ServiceRow, servicesMock } from '@entities/services';
import { useState } from 'react';

import { type TabId, tabs } from '../model';

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<TabId>('price');

  return (
    <section id="services" className="services-section" data-reveal>
      <div className="container">
        <h2>Услуги и цены</h2>

        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={activeTab === tab.id ? 'tab tab--active' : 'tab'}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {activeTab === 'price' && (
            <>
              <div className="price-list">
                {servicesMock.map((service) => (
                  <ServiceRow key={service.id} service={service} />
                ))}
              </div>
              <button
                type="button"
                className="btn btn--primary download-btn"
                onClick={() => alert('Прайс-лист готовится. Позвоните нам — вышлем PDF первым.')}
              >
                Скачать прайс (PDF)
              </button>
            </>
          )}

          {activeTab === 'order' && (
            <p className="tab-note">
              Форма заказ-наряда для клиник-партнёров — в наполнении.
            </p>
          )}

          {activeTab === 'tour' && (
            <p className="tab-note">
              Приглашаем врачей на экскурсию в лабораторию — оставьте заявку
              через форму контактов.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}