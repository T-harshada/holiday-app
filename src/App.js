import React, { useState, useEffect } from 'react'
import Hotel from './components/Hotel/Hotel'
import './style/index.css'
import hotels from './hotels'
import { AppContainer, StyledContainer, StyledFilter } from './App.style'
import Icon from './components/Icon/Icon'

const App = () => {
  const [hotelList, setHotels] = useState(hotels)
  const [sortBy, setSortBy] = useState({ attr: '', type: '' })
  const compare = (a, b) => {
    const hotelA = a[sortBy.attr]
    const hotelB = b[sortBy.attr]
    let comparison = 0
    if (sortBy.type === 'string') {
      if (hotelA > hotelB) {
        comparison = 1
      } else if (hotelA < hotelB) {
        comparison = -1
      }
    } else if (sortBy.attr === 'price') {
      comparison = hotelA - hotelB
    } else if (sortBy.attr === 'rating') {
      comparison = hotelB - hotelA
    }

    return comparison
  }

  useEffect(() => {
    setHotels([...hotelList.sort(compare)]) // This is be executed when `loading` state changes
  }, [sortBy])

  return (
    <AppContainer>
      <StyledContainer>
        <StyledFilter>
          <ul>
            <li onClick={() => setSortBy({ attr: 'name', type: 'string' })}>
              <p>
                Sort <b>alphabetically</b>
              </p>
              <Icon icon="sort-alpha-asc"/>
            </li>
            <li onClick={() => setSortBy({ attr: 'price', type: 'number' })}>
              <p>
                Sort by <b>price</b>
              </p>
              <Icon icon="coin-pound" />
            </li>
            <li onClick={() => setSortBy({ attr: 'rating', type: 'number' })}>
              <p>
                Sort by <b>star rating</b>
              </p>
              <Icon icon="star-full"/>
            </li>
          </ul>
        </StyledFilter>
        <div className="app">
          {hotelList.map(hotel => (
            <Hotel key={hotel.id} {...hotel} />
          ))}
        </div>
      </StyledContainer>
    </AppContainer>
  )
}

export default App
