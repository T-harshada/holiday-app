import styled from 'styled-components/macro'
import { palette, breakpoints } from "../theme";

export const StyledContainer = styled.div`
 background-color: ${palette.white};
 border: transparent;
 display: flex;
 flex-direction: column;
 @media (min-width: ${breakpoints.b560}) {
   flex-direction: row;
 }
 justify-content: space-between;
 @media (max-width: ${breakpoints.b960}) {
    flex-wrap: wrap;
    .hotel__info {
     display: none;
   }
 }
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
 display: flex;
 img {
   @media (min-width: ${breakpoints.b960 +1}) {
     width: 440px;
   }
   width: 100%;
   min-width: 300px;
 }
 .hotel__info {
   @media (min-width: ${breakpoints.b960}) {
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
 @media (min-width: ${breakpoints.b960}) {
   flex-basis: 40%;
 }
`

export const StyledDesktopDescription = styled.div`
 padding: 16px;
 font-size: 12px;
 line-height: 16px;

 @media (max-width: ${breakpoints.b960}) {
   display:none;
 }
 @media (min-width: ${breakpoints.b960}) {
   width: 100%;
   background-color: ${palette.white};
   .hotel__description-title {
     color: ${palette.blue100};
     font-weight: bold;
     line-height: 24px;
   }
   .hotel__description-copy {
     color: ${palette.black};
   }
 }  
`

export const StyledMobileDescription = styled.div`
 font-size: 12px;
 line-height: 16px;
 padding: 16px 0;

 @media (min-width: ${breakpoints.b960}) {
   display:none;
 }
 @media (max-width: ${breakpoints.b960}) {
   width: 100%;
   background-color: ${palette.white};
   .hotel__description-title {
     color: ${palette.blue100};
     font-weight: bold;
     line-height: 24px;
   }
   .hotel__description-copy {
     color: ${palette.black};
   }
 }  
`
