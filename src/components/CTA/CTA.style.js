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
  span {
    display: block;
    &.price {
      font-size: 16px; 
    }
  }
  @media (min-width: ${breakpoints.b560}) {
    padding: 6px 40px;
    span {
    &.price {
      font-size: 16px; 
    }
  }
  }
  @media (min-width: ${breakpoints.b960}) {
    padding: 10px 70px;
    span {
    &.price {
      font-size: 20px; 
    }
  }

  &:hover,
  &:focus {
    background-color: ${palette.yellow200};
  }
`
