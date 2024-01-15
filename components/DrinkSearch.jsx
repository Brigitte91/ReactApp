/* eslint-disable */
import { useState } from "react";
import { TextInput } from "./UI/TextInput";
import { DrinkList } from "./DrinkList";
import {availableDrinks} from '../utils/data'; 

export const DrinkSearch = () => {
    const [searchField, setSearchField] = useState('test drink');

    return (
        <>
            <label>Search for drinks:</label>
            <TextInput />
            <p>{searchField}</p>
            <DrinkList drinks={availableDrinks} />
        </>
    )
}