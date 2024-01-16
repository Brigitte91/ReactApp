/* eslint-disable */

import { useState } from 'react';
import './App.css';
import { DrinkChoice } from '../components/DrinkChoice';
import { DrinkSearch } from '../components/DrinkSearch';
import { Heading } from '@chakra-ui/react';


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
          <Heading mb={8} fontSize={'3xl'} color={'teal.700'}>{greeting}</Heading>

          <DrinkSearch clickFn={setUserDrink} />
        </>
      )}


    </div>
  );
};