import './TeamSection.scss';

import { TeamCard, teamMock } from '@entities/team';
import { vacanciesMock, VacancyCard } from '@entities/vacancies';

export function TeamSection() {
  return (
    <section id="team" className="team-section" data-reveal>
      <div className="container">
        <h2>Команда</h2>
        <div className="team-grid">
          {teamMock.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        <h2>Вакансии</h2>
        <div className="vacancies-grid">
          {vacanciesMock.map((vacancy) => (
            <VacancyCard key={vacancy.id} vacancy={vacancy} />
          ))}
        </div>
      </div>

      <div className="team-cta">
        <div className="container">
          <h2>Хотите сотрудничать?</h2>
          <p className="team-cta__text">Напишите нам — обсудим вашу задачу.</p>
          <a href="#contacts" className="btn btn--primary">Написать</a>
        </div>
      </div>
    </section>
  );
}