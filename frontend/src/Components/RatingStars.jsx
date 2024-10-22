import React from 'react'

const RatingStars = ({rating}) => {
    
    // Logic to render the rating stars based on the provided rating value.
     
     const stars =[];
     for (let i = 1; i <=5 ; i++) {
        stars.push(
            <span key={i} className={`ri-star${i <= rating ? '-fill' : '-line'}`}></span>

        )
     }
  return (
    <div className='product__rating'>{stars}</div>
  )
}

export default RatingStars
