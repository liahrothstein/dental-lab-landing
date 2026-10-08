import type { Review } from '@entities/reviews';
import { useState } from 'react';

export function useReviewsSlider(reviews: Review[]) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const goTo = (i: number) => setIndex(i);

  return { index, current: reviews[index], next, prev, goTo, count: reviews.length };
}