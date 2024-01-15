/* eslint-disable react/prop-types */
import './DrinkChoice.css';

export const DrinkChoice = ({ drink }) => {
    return (
        <>
            <h2>{drink.name}</h2>
            <img src={drink.imgUrl} className="drinkImage" alt={drink.alt}></img>
            <p>Your drink will be ready in a few minutes</p>
        </>
    )
}

