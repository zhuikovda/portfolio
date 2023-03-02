import React from 'react';
import s from './Home.module.css';

export const Home = () => {
    return (
        <div className={ s.home }>
            <div className='container'>
                <div className={s.home_img}>my foto</div>
                <div className={ s.home_text }>
                    <h2>Hi there!</h2>
                    <h1>I'm Dima Zhuikov</h1>
                    <h3>I'm a front-end developer</h3>
                </div>
            </div>
        </div> 
    );
};


