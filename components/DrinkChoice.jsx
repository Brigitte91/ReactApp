/* eslint-disable react/prop-types */
import './DrinkChoice.css';
import { useState } from 'react';

export const DrinkChoice = ({ drink }) => {
    const [userDrink, setUserDrink] = useState(tea)
    return (
        <>
            <p>{drink.name}</p>
            <img src={drink.imgUrl} className="drinkImage" alt={drink.alt}></img>
            <p>Your drink will be ready in a few minutes</p>
        </>
    )
}