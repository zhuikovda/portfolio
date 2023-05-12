import React, { FC } from 'react';
import s from './Portfolio.module.css';

type MyWorkPorpsType = {
    style: StyleType;
    title: string;
    description: string;
};

type StyleType = {
    backgroundImage: string;
};

export const MyWork: FC<MyWorkPorpsType> = (props) => {
    return (
        <div>
            <a href='#'>
                <div className={s.img} style={props.style}></div>
            </a>
            <h3>{props.title}</h3>
            <div>{props.description}</div>
        </div>
    );
};
