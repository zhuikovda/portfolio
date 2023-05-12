import React, {FC} from 'react';
import style from './Header.module.css';
import { Nav } from '../nav/Nav';
import {BgType} from '../App';

type HeaderType = {
    style: BgType
}

const Header: FC<HeaderType> = (props) => {
    return (
        <header className={style.header} style={props.style}>
            <div className={style.container}>
                <h1 className={style.logo}>ESD</h1>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
