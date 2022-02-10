import React from 'react';
import './App.css';
import FavoritesButton from './FavoritesButton';
import TeamOuttingButton from './TeamOuttingButton';



const App = () => {

  return (
    <div className="restaurant-container">
        <div className="header">
          <span class="food-emojis" role="img" aria-label="food">🍔🌭🌮🌯</span>
          Where to eat today?!
          <span class="food-emojis" role="img" aria-label="food">🥙🍕🥗🍗</span> 
          <FavoritesButton />
          <TeamOuttingButton />
        </div>
    </div>
  )
}

export default App;
