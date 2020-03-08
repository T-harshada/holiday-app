import React from 'react'
import { StyledCTA } from './CTA.style'

export const CTA = ({onClick, eyebrow, price}) => (
    <StyledCTA
        onClick={onClick}
    >
        <span> {eyebrow}</span>
        <span className="price">{price}</span>
    </StyledCTA>
)

