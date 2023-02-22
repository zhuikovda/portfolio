import React from 'react';
import s from './Home.module.css';

const Home = () => {
    return (
        <div className={s.home}>
            <div className='container'>
                <img src='#' alt='my foto' />
               <div className={s.home_text}>
                    <h2>Hi there!</h2>
                    <h1>I'm Dima Zhuikov</h1>
                    <h3>I'm a frontend developer</h3>
               </div>
            </div>
        </div>
    );
};

export default Home;
