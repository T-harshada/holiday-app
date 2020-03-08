import styled from 'styled-components/macro'
import { palette, breakpoints } from "../theme";

export const StyledCTA = styled.button`
  padding: 10px;
  width: 100%;
  border-color: transparent;
  background-color: ${palette.yellow100};
  color: ${palette.blue100};
  cursor: pointer
  font-size: 12px;
  font-weight: bold; 
  text-align: center;
  text-decoration: none;
  
  @media (min-width: ${breakpoints.sm}) {
    padding: 10px 70px;
  }

  &:hover,
  &:focus {
    background-color: ${palette.yellow200};
  }
  
  span {
    display: block;
    &.price {
      font-size: 20px; 
    }
  }
`
