import React, { useState } from 'react';

const ReviewPage = () => {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && comment) {
      // Normally you'd send this data to the backend or store it locally
      console.log('Review Submitted', { username, rating, comment });
      alert('Thank you for your review!');
      setUsername('');
      setComment('');
      setRating(5);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Leave Us a Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Your Name:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Your Review:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Rating:</label>
          <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
            {[5, 4, 3, 2, 1].map((rate) => (
              <option key={rate} value={rate}>{rate}</option>
            ))}
          </select>
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewPage;
