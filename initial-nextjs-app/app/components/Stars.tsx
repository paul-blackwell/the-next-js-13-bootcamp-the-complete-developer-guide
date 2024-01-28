import fullStar from '../../public/icons/full-star.png';
import halfStar from '../../public/icons/half-star.png';
import emptyStar from '../../public/icons/empty-star.png';
import Image from 'next/image';
import { Review } from '@prisma/client';
import { calculateReviewRatingAverage } from '../../utils/calculateReviewRatingAverage';

export default function Stars({ reviews, rating }: { reviews: Review[]; rating?: number }) {
  const reviewRating = rating || calculateReviewRatingAverage(reviews);

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      const difference = parseFloat((reviewRating - i).toFixed(1));
      if (difference >= 1) stars.push({ ...fullStar, alt: 'Full star' });
      else if (difference < 1 && difference > 0) {
        if (difference <= 0.2) stars.push({ ...emptyStar, alt: 'Empty star' });
        else if (difference > 0.2 && difference <= 0.6)
          stars.push({ ...halfStar, alt: 'Half star' });
        else stars.push({ ...fullStar, alt: 'Full star' });
      } else stars.push({ ...emptyStar, alt: 'Empty star' });
    }

    return stars.map((star) => (
      <Image className="w-4 h-4 mr-1" src={star} alt={`${star.alt} icon`} />
    ));
  };

  return <div className="flex items-center">{renderStars()}</div>;
}
