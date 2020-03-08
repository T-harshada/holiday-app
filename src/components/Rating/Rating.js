import React from 'react'

const getIconClass = (rating) =>{
    let icons = []
    const maxRating = 5
    for(let n in maxRating) {
        if (n <= rating) {
            icons.push(<span key={n} className="icon-star"/>)
        }
    }
    return icons
}
export const Rating = ({rating}) => (
    <div className="star-rating">
        {getIconClass(rating).map(icon => (<icon/>))}
    </div>
)
