import './AboutSection.scss';

import { aboutMock } from '@entities/about';
import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="about-section" id="about" data-reveal>
      <div className="container">
        <h2>{aboutMock.title}</h2>
        {aboutMock.paragraphs.map((para, idx) => (
          <p key={idx} className="about-section__paragraph">
            {para}
          </p>
        ))}
        <div className="about-section__stats">
          {aboutMock.stats.map((stat, idx) => (
            <div key={idx} className="about-section__stat">
              <span className="about-section__stat-value">
                {stat.value}
              </span>
              <span className="about-section__stat-label">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};