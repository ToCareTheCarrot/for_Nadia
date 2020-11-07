import React from 'react';
import c from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
// import home from '../../img/home.png';
// import message from '../../img/message_icon.png';
// import user from '../../img/user_icon.png';


export const Navbar = () => {
    return (
        <nav className={c.nav}>
            <ul>
                <button>Генератор поз</button>
                <li>
                    <NavLink to='/main-page'>
                        {/*<img className={c.icon} src={home} alt='home-icon'/>*/}
                        <span>Главная</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/position-base'>
                        {/*<img className={c.icon} src={message} alt='message-icon'/>*/}
                        <span>База поз</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/settings'>
                        {/*<img className={c.icon} src={user} alt='user-icon'/>*/}
                        <span>Настройка</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

