import React from 'react';
import style from './Header.module.css';
import { Nav } from '../nav/Nav';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <h1 className={style.logo}>ESD</h1>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
