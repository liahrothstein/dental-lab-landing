import './WorksSection.scss';

import { WorkCard, worksMock } from '../../../entities/works';

export default function WorksSection() {
  return (
    <section id="works" className="works-section" data-reveal>
      <div className="container">
        <h2>Примеры работ</h2>
        <div className="works-grid">
          {worksMock.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}
