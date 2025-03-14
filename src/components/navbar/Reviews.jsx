import React from 'react';
import './Reviews.css';

const reviews = [
    { id: 1, name: 'Joan Dickson', text: 'The skincare routine completely transformed my skin! My complexion is now glowing and smooth, and I have received so many compliments. I struggled with dullness for years, but these products brought life back to my skin. I could not be happier!', image: '/user1.png', rating: 5 },
    { id: 2, name: 'Jane Smith', text: 'I love how natural and effective the products are. My skin feels so fresh and rejuvenated every morning. The lightweight formulas absorb quickly without leaving any residue, making my daily skincare routine a joy. I have noticed a significant improvement in my skin texture.', image: '/user1.png', rating: 5 },
    { id: 3, name: 'Alice Johnson', text: 'Finally found a product that works for my sensitive skin. Highly recommended! I have dealt with redness and irritation for years, but this skincare line has been gentle yet effective. My skin feels balanced, hydrated, and healthier than ever before.', image: '/user1.png', rating: 4 },
    { id: 4, name: 'Bob Brown', text: 'Great customer service and the moisturizer is my new favorite! The team helped me choose the right products for my skin type, and the moisturizer has done wonders. It keeps my skin hydrated all day without feeling heavy or greasy.', image: '/user1.png', rating: 4 },
    { id: 5, name: 'Sophia Lee', text: 'My acne cleared up within weeks. These products are a game changer! I had tried countless treatments before, but nothing worked as well as this skincare line. My skin is now clearer, smoother, and I feel so much more confident.', image: '/user1.png', rating: 5 },
    { id: 6, name: 'Michael Scott', text: 'High-quality ingredients and noticeable results. Im impressed. The serums and creams feel luxurious and have made a significant difference in my skins appearance. Fine lines have reduced, and my skin tone looks more even and radiant.', image: '/user1.png', rating: 4 },
    { id: 7, name: 'Emily Davis', text: 'The anti-aging serum works wonders. My skin feels firmer and youthful. I noticed a visible difference within just a few weeks. The fine lines around my eyes and mouth have softened, and my skin has a beautiful, healthy glow.', image: '/user1.png', rating: 5 }
];


const Reviews = () => {
    return (
        <div className='reviews-container'>
            <div data-aos="fade-down" className='reviews-header'>
                <h1>What Our Clients Say</h1>
            </div>
            <div className='reviews-slider'>
                {reviews.map((review) => (
                    <div key={review.id} className='review-card'>
                        <div className='review-content'>
                            <img src={review.image} alt={review.name} className='reviewer-image' />
                            <h4 className='reviewer-name'>- {review.name}</h4>
                            <p className='review-text'>"{review.text}"</p>
                            <div className='star-rating'>{'⭐'.repeat(review.rating)}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;