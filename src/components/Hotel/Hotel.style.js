import styled from 'styled-components/macro'
import { palette, breakpoints } from "../theme";

export const StyledContainer = styled.div`
 background-color: ${palette.white};
 border: transparent;
 display: flex;
 flex-direction: column;
 @media (min-width: ${breakpoints.sm}) {
   flex-direction: row;
 }
 justify-content: space-between;
 align-items: flex-start;
`
export const StyledBookingDetails =styled.div`
 p {
   font-size: 12px;
   line-height: 16px;
 }
 margin: 10px 0;
`

export const StyledImage = styled.div`
 position: relative;
 img {
   @media (min-width: ${breakpoints.sm}) {
     width: 440px;
   }
   width: 100%;
 }
 @media (min-width: ${breakpoints.sm}) {
   .hotel__info {
     background-color: ${palette.white};
     color: ${palette.blue100};
     padding: 5px 10px;
     font-size: 12px;
     line-height: 20px;
     display: inline-block;
     position: absolute;
     left: 0;
     bottom: 0;
   }
 }
`

export const StyledDetails = styled.div`
 padding: 15px;
 width: 100%;
 h3 {
   font-size: 16px;
   line-height: 24px;
 }
 .hotel__eyebrow {
   font-size: 14px;
   line-height: 23px;
   color: ${palette.grey100};
 }
 @media (min-width: ${breakpoints.sm}) {
   flex-basis: 40%;
 }
`

export const StyledDesktopDescription = styled.div`
 @media (min-width: ${breakpoints.sm}) {
   padding: 16px;
   width: 100%;
   font-size: 12px;
   background-color: ${palette.white};
   .hotel__description-title {
     color: ${palette.blue100};
     font-weight: bold;
     line-height: 24px;
   }
   .hotel__description-copy {
     color: ${palette.black};
     line-height: 16px;
   }
   
 }  
`
