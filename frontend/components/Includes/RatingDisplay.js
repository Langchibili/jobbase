import React from 'react';

export default function RatingDisplay({ rating }){
    const roundedRating = Math.round(rating); // Round the rating to the nearest whole number
  
    // Create an array to hold the star elements
    const stars = [];
    
    // Loop through 5 times to create 5 stars
    for (let i = 1; i <= 5; i++) {
      let starClass = 'grayStar';
      
      // Check if the current star should be orange
      if (i <= roundedRating) {
        starClass = 'orangeStar';
      } else if (i === roundedRating + 1 && rating % 1 !== 0) {
        // If it's a half star
        starClass = 'halfOrangeStar';
      }
      
      stars.push(
        <span key={i} className={`star ${starClass}`}>&#9733;</span>
      );
    }
    
    return (
      <div className="ratingContainer">
      
        <span className="ratingText">{rating}</span>
        {stars}
      </div>
    );
}


