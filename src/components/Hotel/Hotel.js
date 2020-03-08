import React from 'react'
import {
    StyledContainer,
    StyledBookingDetails,
    StyledImage,
    StyledDetails,
    StyledDesktopDescription
} from './Hotel.style'
import { CTA } from '../CTA/CTA'


const Hotel = ({ name,eyebrow,customer, travelInfo, departure, price, image, description}) => (
    <div>
        <StyledContainer>
            <StyledImage>
                <img src={`./assets/${image}`}></img>
                <div class="hotel__info">
                    <p>Read more about this hotel</p>
                </div>
            </StyledImage>

            <StyledDetails>

                <h3> {name}</h3>
                <p className="hotel__eyebrow"> {eyebrow}</p>

                <StyledBookingDetails>
                    <p> {customer}</p>
                    <p> {travelInfo}</p>
                    <p> {departure}</p>
                </StyledBookingDetails>
                <CTA
                    eyebrow="book now"
                    price={price}
                    onClick={() => console.log("clicked")}
                />
            </StyledDetails>
        </StyledContainer>
        <StyledDesktopDescription>
            <p className="hotel__description-title">Overview</p>
            <p className="hotel__description-copy">{description}</p>
        </StyledDesktopDescription>
    </div>
)

export default Hotel;