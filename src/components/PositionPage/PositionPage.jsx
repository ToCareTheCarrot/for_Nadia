import React, {useEffect, useState} from 'react';
import c from './PositionPage.module.css';
import {withRouter} from 'react-router-dom';
import {dataBase} from '../../dataBase/dataBase';


const basePath = 'https://imgprx.livejournal.net/';

const PositionPage = (props) => {

    let positionNumber = props.match.params.positionNumber;

    const [position, setPosition] = useState({
            id: 1,
            title: "Поза V",
            src: '9a51edef91b0f64cd202cc35ef16bef3d3be2c15/WiL0ukPUTW4_39ZaBuLn6X1BIrZf6TIjkZGGuES-YEeJQ2jfa5uEFniEAqPSPUz8KR2ODy4Gt5m28E37DpOS8a9yyXkcOCsfjA87r24O9wT3zche6_06GMEiDkPQRVomI0XLlctwKF0bHK3pXCa3HA',
            description: 'Позиция требует акробатических способностей! Женщина садится на край стола, мужчина встает напротив нее и чуть сгибает ноги, чтобы находиться в положении, наиболее удобном для проникновения. Потом женщина обнимает мужчину руками за шею и закидывает ноги ему на плечи. Затем она отклоняется назад, а тебе остается двигаться по привычной схеме, держа ее за зад.'
        }
    );

    const giveMeCurrentPosition = (posNumber) => {
        const currentPosition = dataBase.filter(pos => pos.id === +posNumber);
        setPosition(currentPosition[0]);
    };

    useEffect(() => {
        giveMeCurrentPosition(positionNumber);
    },[]);


    return (
        <div className={c.container}>
            <div className={c.positionNameContainer}>
                <h1>{position.title}</h1>
            </div>
            <div className={c.positionImageContainer}>
                <div className={c.imageBlock}>
                    <img src={basePath + position.src} alt="positio"/>
                </div>
            </div>
            <div className={c.positionDescriptionContainer}>
                {position.description}
            </div>
        </div>
    );
}

export default withRouter(PositionPage);

