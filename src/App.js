import React from 'react';
import Hotel from './components/Hotel/Hotel'
import './style/index.css';
import hotels from './hotels'
import { AppContainer, StyledContainer, StyledFilter } from './App.style'

function App() {
  return (
      <AppContainer>
          <StyledContainer>
          <StyledFilter>
              <ul>
                  <li><p>Sort <b>alphabetically</b></p></li>
                  <li><p>Sort by <b>price</b></p></li>
                  <li><p>Sort by <b>star rating</b></p></li>
              </ul>
          </StyledFilter>
        <div className="app">
            {hotels.map(hotel => (<Hotel key={hotel.id } {...hotel}/>)
            )}
        </div>
          </StyledContainer>
      </AppContainer>
  );
}

export default App;
