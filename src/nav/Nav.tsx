import React from 'react';
import style from './Nav.module.css'
import {NavLink} from 'react-router-dom';


export const Nav = () => {
    return (
        <nav className={style.header_nav}>
            <ul>
                <li>
                    <NavLink to={'/home'}>home</NavLink>
                </li>
                <li>
                    <a href='#'>about</a>
                </li>
                <li>
                    <a href='#'>portfolio</a>
                </li>
                <li>
                    <a href='#'>contact</a>
                </li>
            </ul>
        </nav>
    );
};
