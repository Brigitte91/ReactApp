/* eslint-disable  */
import { useState } from 'react';
import './App.css';
import { DrinkButtons } from '../components/DrinkButtons';
import { DrinkChoice } from '../components/DrinkChoice.jsx';
import { tea, coffee } from '../utils/data.js';

export const App = () => {

  const [userDrink, setUserDrink] = useState(tea);
  const greeting = "Welcome to our café";


  return (

    <div className='App'>

      {userDrink ? (
        <DrinkChoice drink={userDrink} />)
        : (<>
          <h1>{greeting}</h1>
          <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
        </>)}
    </div>

  );
};