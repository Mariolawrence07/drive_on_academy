import { useEffect, useState } from "react";

interface Review {
  author_name: string;
  rating: number;
  text: string;
}

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    fetch("/api/google-reviews")
      .then((res) => res.json())
      .then((data) => {
        console.log("Google Data:", data); // IMPORTANT for debugging

        setReviews(data.reviews || []);
        setRating(data.rating || 0);
        setTotal(data.user_ratings_total || 0);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Google Reviews</h2>
      <p>
        {rating} ⭐ ({total} reviews)
      </p>

      {reviews.length === 0 ? (
        <p>No reviews yet</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index}>
            <h4>{review.author_name}</h4>
            <p>Rating: {review.rating} ⭐</p>
            <p>{review.text}</p>
          </div>
        ))
      )}
    </div>
  );
}