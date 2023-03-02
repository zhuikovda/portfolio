import React, { FC } from 'react';
import s from './Portfolio.module.css'

type MyWorkPorpsType = {
    img: string;
    title: string;
    description: string;
};

export const MyWork: FC<MyWorkPorpsType> = (props) => {
    return (
        <div>
            <div className={s.img}>{props.img}</div>
            <h3>{props.title}</h3>
            <div>{props.description}</div>
        </div>
    );
};
