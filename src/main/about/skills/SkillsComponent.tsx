import React, { FC } from 'react';
import s from './Skills.module.css'

type SkillsComponentPropsType = {
    title: string;
    text: string;
};

export const SkillsComponent: FC<SkillsComponentPropsType> = (props) => {
    return (
        <>
            <div className={s.icon}></div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </>
    );
};
