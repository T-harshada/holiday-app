import styled from 'styled-components/macro'
import { palette, breakpoints } from './components/theme'

export const AppContainer = styled.div`
  background-color: ${palette.white};
  @media (min-width: ${breakpoints.b560}) {
    background-image: url(./assets/background.png);
    background-repeat: repeat-x;
  }
`
export const StyledContainer = styled.div`
  .app > div {
    margin-bottom: 20px;
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

  @media (min-width: ${breakpoints.b960}) {
    padding: 100px 0;
  }
`

export const StyledFilter = styled.div`
  ul {
    li {
      display: flex;
      align-items: center;
      color: ${palette.blue100};
      background-color: ${palette.white};
      svg {
        color: ${palette.grey100};
        width: 16px;
        height: 16px;
      }
      &:hover,
      &:active {
        color: ${palette.white};
        background-color: ${palette.blue100};
        svg {
          color: ${palette.white};
        }
      }
      p {
        flex-basis: 50%;
        text-align: left;
        padding: 1rem 0 1rem 0.5rem;
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
        p {
          b {
            display: none;
          }
        }
      }
      li + li {
        border-left: 1px solid ${palette.blue200};
      }
    }
  }
  @media (min-width: ${breakpoints.b560}) {
    flex-basis: 20%;
    ul {
      li {
        p {
          flex-basis: 85%;
        }
      }
      li + li {
        border-top: 1px solid ${palette.blue200};
      }
    }
  }
`
