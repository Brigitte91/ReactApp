/* eslint-disable */
import './UI/DrinkItem.css';

export const DrinkItem = ({ drink, clickFn }) => {
    const clickHandler = () => {
        clickFn(drink);
    }

    return (
        <div>
            <button className="drinkItem" onClick={clickHandler}>
                <img src={drink.imgUrl} width={50} height={50} alt={drink.alt} />
                <p>{drink.name}</p>

            </button>

        </div>
    );
};
