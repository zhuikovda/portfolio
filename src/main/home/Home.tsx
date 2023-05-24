import React from 'react';
import s from './Home.module.css';
import { BgType } from '../../App';

export const Home = () => {
    return (
        <div className={s.home}>
            <div className={s.container}>
                <div className={s.home_img}>my foto</div>
                <div className={s.home_text}>
                    <h2>Hi there!</h2>
                    <h1>
                        I'm <span>Dima Zhuikov</span>
                    </h1>
                    <h3>I'm a front-end developer</h3>
                </div>
            </div>
        </div>
    );
};
