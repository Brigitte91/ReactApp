/* eslint-disable */
import { DrinkItem } from "./DrinkItem"

export const DrinkList = ({ drinks, clickFn }) => {
    return (<ul>

        {drinks.map((drink) => (
            <DrinkItem key={drink.id} drink={drink} clickFn={clickFn} />
        ))}

    </ul>
    )
}