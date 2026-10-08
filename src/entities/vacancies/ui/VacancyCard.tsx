import './VacancyCard.scss';

import type { Vacancy } from '../types';

export function VacancyCard({ vacancy }: { vacancy: Vacancy }) {
  return (
    <article className="vacancy-card">
      <h3 className="vacancy-card__title">{vacancy.title}</h3>
      <p className="vacancy-card__description">{vacancy.description}</p>
    </article>
  );
}