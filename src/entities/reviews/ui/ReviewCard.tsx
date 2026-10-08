import './ReviewCard.scss';

import { getInitials } from '../model';
import type { Review } from '../types';

export function ReviewCard({ review }: { review: Review }) {
  const initials = getInitials(review.author);
  return (
    <figure className="review-card">
      <div className="review-card__avatar">{initials}</div>
      <blockquote className="review-card__text">{review.text}</blockquote>
      <figcaption className="review-card__author">
        <span className="review-card__name">{review.author}</span>{' '}
        <span className="review-card__role">{review.role}</span>
      </figcaption>
    </figure>
  );
}