import React, { FC } from 'react';
import style from './Header.module.scss';
import { Nav } from '../nav/Nav';
import { BgType } from '../App';
import { LogoESD } from './LogoESD';

type HeaderType = {
    style: BgType;
};

const Header: FC<HeaderType> = (props) => {
    return (
        <header className={style.header} style={props.style}>
            <div className={style.container}>
                <LogoESD />
                <Nav />
            </div>
        </header>
    );
};

export default Header;
