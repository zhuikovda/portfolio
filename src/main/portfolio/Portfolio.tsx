import React from 'react';
import { MyWork } from './MyWork';
import s from './Portfolio.module.css';
import counterImg from '../../assets/img/counter.jpg';
import socialNetworkImg from '../../assets/img/socialNetwork.jpg';
import todolistImg from '../../assets/img/todo.jpg';
import { BgType } from '../../App';

type PortfolioType = {
    style: BgType;
};

export const Portfolio = (props: PortfolioType) => {
    const counter = {
        backgroundImage: `url(${counterImg})`
    };

    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImg})`
    };

    const todolist = {
        backgroundImage: `url(${todolistImg})`
    };

    return (
        <div className={s.portfolio} style={props.style}>
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
                            <MyWork
                                style={counter}
                                title={'Counter'}
                                description={
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                                }
                            />
                        </div>
                        <div className={s.work}>
                            <MyWork
                                style={socialNetwork}
                                title={'Social Network'}
                                description={
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                                }
                            />
                        </div>
                        <div className={s.work}>
                            <MyWork
                                style={todolist}
                                title={'Todolist'}
                                description={
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
