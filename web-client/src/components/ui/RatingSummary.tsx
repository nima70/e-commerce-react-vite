import React from "react";
import { Star } from "lucide-react";

interface RatingSummaryProps {
  rating: number; // e.g. 4.3
  numReviews: number;
}

const RatingSummary: React.FC<RatingSummaryProps> = ({
  rating,
  numReviews,
}) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < fullStars || (i === fullStars && hasHalf);
          return (
            <Star
              key={i}
              size={20}
              strokeWidth={1.5}
              className={`${
                filled ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
              }`}
              fill={filled ? "currentColor" : "none"}
              stroke="currentColor"
            />
          );
        })}
      </div>
      <span className="text-sm text-muted-foreground">
        {numReviews} review{numReviews !== 1 && "s"}
      </span>
    </div>
  );
};

export default RatingSummary;
