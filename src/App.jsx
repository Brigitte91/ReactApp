/* eslint-disable react/prop-types */

import './App.css';
import { DrinkButtons } from '../components/DrinkButtons';
import { DrinkChoice } from '../components/DrinkChoice.jsx';
import {tea, coffee} from '../utils/data.js';

export const App = () => {
  
const greeting = "Welcome to our café";
const userDrink = coffee;

return (
  <div className='App'>
    <h1>{greeting}</h1>
    <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name}/>
    <DrinkChoice drink={userDrink} />
  </div>
);
};