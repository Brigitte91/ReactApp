/* eslint-disable */
import { useState } from "react";
import { TextInput } from "./UI/TextInput";
import { DrinkList } from "./DrinkList";
import { availableDrinks } from '../utils/data';

export const DrinkSearch = ({ clickFn }) => {
    const [searchField, setSearchField] = useState('');
    const handleChange = (event) => {
        setSearchField(event.target.value);
    };
    const matchedDrinks = availableDrinks.filter((drink) => {
        return drink.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
        <>
            <label>Search for drinks:</label>
            <TextInput changeFn={handleChange} />
            <p>{searchField}</p>
            <DrinkList clickFn={clickFn} drinks={matchedDrinks} />
        </>
    )
}