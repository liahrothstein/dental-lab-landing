import './ReviewsSection.scss';

import { ReviewCard, reviewsMock } from '@entities/reviews';

import { useReviewsSlider } from '../model';

export function ReviewsSection() {
  const { index, current, next, prev, goTo } = useReviewsSlider(reviewsMock);
  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <h2>Отзывы</h2>
        <div className="slider">
          <button className="slider__arrow" onClick={prev}>&lt;</button>
          <ReviewCard review={current} />
          <button className="slider__arrow" onClick={next}>&gt;</button>
        </div>
        <div className="slider__dots">
          {reviewsMock.map((review, i) => (
            <button
              key={review.id}
              className={`dot ${index === i ? 'dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Отзыв ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}