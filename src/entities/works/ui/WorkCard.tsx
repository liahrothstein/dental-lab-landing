import './WorkCard.scss';

import type { Work } from '../types';

export default function WorkCard({ work }: { work: Work }) {
  return (
    <div className="work-card">
      <img src={work.image} alt={work.title} className="work-image" />
      <div className="work-category">{work.category}</div>
      <div className="work-title">{work.title}</div>
    </div>
  );
}
