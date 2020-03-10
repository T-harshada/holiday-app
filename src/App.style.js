import styled from 'styled-components/macro'
import { palette, breakpoints } from "./components/theme";


export const AppContainer =styled.div`
 @media (max-width: ${breakpoints.b560}) {
   background-color: ${palette.white};
 }
 @media (min-width: ${breakpoints.b560}) {
   background-image: url(./assets/background.png);
   background-repeat: repeat-x;
 }
`
export const StyledContainer = styled.div`
 .app > div{
   margin-bottom: 20px;
 }

 @media (min-width: ${breakpoints.b960}) {
   padding: 100px 0;
 }
 @media (min-width: ${breakpoints.b560}) {
   max-width: 80%;
   margin: 0 auto;
   padding: 50px 0;
   justify-content: space-between;
   display: flex;
   .app {
     flex-basis: 60%;
   }
 }
`

export const StyledFilter = styled.div`
 ul {
   li {
     display: block;
     color: ${palette.blue100};
     background-color: ${palette.white};
     &:hover, &:active {
       color: ${palette.white};
       background-color: ${palette.blue100};
     }
     p {
       text-align: left;
       padding: 1rem 0 1rem .5rem;
       text-decoration: none;
       font-size: 12px;
     }
   }
 }
 @media (max-width: ${breakpoints.b560}) {
   ul {
     display: flex;
     li {
       flex-basis: 33.33%;
     }
     li + li {
       border-left: 1px solid ${palette.blue200};
     }
   }
 }
 @media (min-width: ${breakpoints.b560}) {
   flex-basis: 20%;
   ul {
     li + li {
       border-top: 1px solid ${palette.blue200};
     }
   }
 }
`
