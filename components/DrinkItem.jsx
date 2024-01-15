/* eslint-disable */
import './UI/DrinkItem.css';

export const DrinkItem = ({drink}) => {
    return (
        <div className="drinkItem">
            <img src={drink.imgUrl} width={50} height={50} alt={drink.alt} />
            <h2>{drink.name}</h2>
            
        </div>
    );
};
