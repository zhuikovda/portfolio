import React from 'react';
import s from './Home.module.css';
import { BgType } from '../../App';

type HomeType = {
    style: BgType;
};

export const Home = (props: HomeType) => {
    return (
        <div className={s.home} style={props.style}>
            <div className='container'>
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
