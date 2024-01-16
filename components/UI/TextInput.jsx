/* eslint-disable */

import './TextInput.css'
export const TextInput = ({ changeFn }) => {
    return (

        <input className="text-input" onChange={changeFn}></input>

    )
}