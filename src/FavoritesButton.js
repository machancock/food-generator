import React, { useState } from 'react';
import { favorites } from './restaurants/Favorites';
import Button from '@mui/material/Button';

const FavoritesButton = () => {
  const [restaurant, setRestaurant] = useState(favorites[0]);

  const getRestaurant = () => {
    let randomNum =  Math.floor(Math.random() * favorites.length);
    setRestaurant(favorites[randomNum])
  }

  return (
      <div className="wrapper">
          <div className="btnContainer">
            <Button className="btn" color="primary" size="large" variant="contained" onClick={getRestaurant}>Favorites</Button>
          </div>
          <div className="restaurant-wrapper">
            <h5>{restaurant.restaurant}</h5>
          </div>
      </div>
  )
}


export default FavoritesButton;