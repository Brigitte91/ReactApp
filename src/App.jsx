/* eslint-disable */

import { useState } from 'react';
import './App.css';
import { DrinkChoice } from '../components/DrinkChoice';
import { DrinkSearch } from '../components/DrinkSearch';


export const App = () => {
  const [userDrink, setUserDrink] = useState();

  const greeting = 'Welcome to our cafe!';
  const clickReturn = () => {
    setUserDrink(null);
  }

  return (
    <div className="app">

      {userDrink ? (
        <DrinkChoice drink={userDrink} clickFn={clickReturn} />
      ) : (
        <>
          <h1>{greeting}</h1>

          <DrinkSearch clickFn={setUserDrink} />
        </>
      )}


    </div>
  );
};