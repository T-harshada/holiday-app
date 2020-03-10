import React, { useState } from 'react'
import {
  StyledContainer,
  StyledBookingDetails,
  StyledImage,
  StyledDetails,
  StyledDesktopDescription,
  StyledMobileDescription
} from './Hotel.style'
import { CTA } from '../CTA/CTA'
import { Rating } from '../Rating/Rating'

const Hotel = ({
  name,
  eyebrow,
  customer,
  travelInfo,
  departure,
  price,
  image,
  description,
  rating
}) => {
  const [accordionState, setToggle] = useState(false)
  return (
    <div>
      <StyledContainer>
        <StyledImage>
          <img src={`./assets/${image}`}></img>
          <div
            className="hotel__info"
            onClick={() => setToggle(!accordionState)}
          >
            <p>
              {accordionState
                ? 'Read less about this hotel'
                : 'Read more about this hotel'}
            </p>
          </div>
        </StyledImage>

        <StyledDetails>
          <h3> {name}</h3>
          <p className="hotel__eyebrow"> {eyebrow}</p>

          <Rating rating={rating} />

          <StyledBookingDetails>
            <p> {customer}</p>
            <p> {travelInfo}</p>
            <p> {departure}</p>
          </StyledBookingDetails>

          <StyledMobileDescription>
            <details>
              <summary>Read more about this hotel</summary>
              <p className="hotel__description-title">Overview</p>
              <p className="hotel__description-copy">{description}</p>
            </details>
          </StyledMobileDescription>
          <CTA
            eyebrow="book now"
            price={price}
            onClick={() => console.log('clicked')}
          />
        </StyledDetails>
      </StyledContainer>
      {accordionState ? (
        <StyledDesktopDescription>
          <p className="hotel__description-title">Overview</p>
          <p className="hotel__description-copy">{description}</p>
        </StyledDesktopDescription>
      ) : null}
    </div>
  )
}

export default Hotel
