import React, { useState } from 'react';
import { teamOuttings } from './restaurants/TeamOuttings';
import Button from '@mui/material/Button';


const TeamOuttingButton = () => {
  const [restaurant, setRestaurant] = useState(teamOuttings[0]);

  const getRestaurant = () => {
    let randomNum =  Math.floor(Math.random() * teamOuttings.length);
    setRestaurant(teamOuttings[randomNum])
  }

  return (
      <div className="wrapper">
          <div className="btnContainer">
            <Button className="btn" color="primary" size="large" variant="contained" onClick={getRestaurant}>Team Outtings</Button>
          </div>
          <div className="restaurant-wrapper">
            <h5>{restaurant.restaurant}</h5>
          </div>
        </div>
  )
}


export default TeamOuttingButton;