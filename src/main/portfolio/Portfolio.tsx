import React from 'react';
import { MyWork } from './MyWork';
import s from './Portfolio.module.css';

export const Portfolio = () => {
    return (
        <div className={s.portfolio}>
            <div className='container'>
                <h1 className={s.portfolio_title}>
                    my
                    <span> portfolio</span>
                </h1>
            </div>
            <div className='container'>
                <div className={s.portfolio_container}>
                    <div className={s.portfolio_box}>
                        <div className={s.work}>
                            <MyWork img={'url'} title={'Work 1'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '} />
                        </div>
                        <div className={s.work}>
                            <MyWork img={'url'} title={'Work 2'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '} />
                        </div>
                        <div className={s.work}>
                            <MyWork img={'url'} title={'Work 3'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
