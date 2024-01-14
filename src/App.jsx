/* eslint-disable react/prop-types */

import './App.css';
import { DrinkButtons } from '../components/DrinkButtons';
import { DrinkChoice } from '../components/DrinkChoice.jsx';
import {tea, coffee} from '../utils/data.js';

export const App = () => {
  
const greeting = "Welcome to our café";
const userDrink = undefined;

return (
  
  <div className='App'>
   
    {userDrink ? <DrinkChoice drink={userDrink} /> : <><h1>{greeting}</h1> <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name}/></>}
  </div>
  
);
};