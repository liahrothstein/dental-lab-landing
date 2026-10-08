import './TeamCard.scss';

import { photoPlaceholder } from '../model';
import type { TeamMember } from '../types';

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <figure className="team-card">
      <img
        className="team-card__photo"
        src={photoPlaceholder()}
        alt={member.name}
        loading="lazy"
      />
      <figcaption className="team-card__caption">
        <span className="team-card__name">{member.name}</span>
        <span className="team-card__position">{member.position}</span>
      </figcaption>
    </figure>
  );
}