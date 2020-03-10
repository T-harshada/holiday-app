import React from 'react'
import Icon from '../Icon/Icon'
import { StyledRating } from './Rating.style'
import { palette } from '../theme'

const getIconClass = rating => {
  let icons = []
  for (let n = 0; n < rating; n++) {
    icons.push(<Icon icon="star-full" size="16px" color={palette.yellow100} />)
  }
  return icons
}
export const Rating = ({ rating }) => (
  <StyledRating className="star-rating">{getIconClass(rating)}</StyledRating>
)
