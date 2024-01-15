/* eslint-disable */
import { DrinkItem } from "./DrinkItem"

export const DrinkList = ({drinks}) => {
    return(
        <ul>
       {drinks.map((drink) => (
        <DrinkItem key={drink.id} drink={drink} />
       ))}
        </ul>
    )
}