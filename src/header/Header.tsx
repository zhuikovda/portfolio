import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.header}>
            <div className='container'>
                <div className={style.header_container}>
                    <h1>ESD</h1>
                    <ul>
                        <li><a href='#'>home</a></li>
                        <li><a href='#'>about</a></li>
                        <li><a href='#'>portfolio</a></li>
                        <li><a href='#'>contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
