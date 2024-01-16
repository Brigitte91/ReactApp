/* eslint-disable react/prop-types */
import './Button.css';

export const Button = ({ text, clickFn }) => {
    const clickHandler = () => {
        clickFn();
    }

    return (

        <button className='button' onClick={clickHandler}>{text}</button>

    )
}

