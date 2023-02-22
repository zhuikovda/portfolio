import React from 'react';
import style from './Nav.module.css'

export const Nav = () => {
    return (
        <nav className={style.header_nav}>
            <ul>
                <li>
                    <a href='#'>home</a>
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
