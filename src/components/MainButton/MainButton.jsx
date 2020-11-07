import React, {useEffect, useState} from 'react';
import c from './MainButton.module.css';
import {NavLink} from "react-router-dom";


export const MainButton = () => {

    const [positionNumber, setState] = useState(1);

    useEffect(() => {
        generateRandomNumber();
    },[])

    const randomInteger = (min, max) => {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    const generateRandomNumber = () => {
        const res = randomInteger(1,10);
        setState(res);
    }


    return (
        <div className={c.container}>
            <NavLink to={`/position-page/${positionNumber}`} >
                <button onClick={() => {
                    generateRandomNumber()
                }}>Натисни на мене</button>
            </NavLink>
        </div>
    );
}

