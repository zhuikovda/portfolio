import React, { FC } from 'react';
import calendar from '../../calendar.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import s from './ExperEduc.module.css';

type ExperEducPropsType = {
    // title: string
    // img: string
    year: string;
    workPlace: string;
    text: string;
};

export const ExperEduc: FC<ExperEducPropsType> = (props) => {
    return (
        <div>
            <div>
                <FontAwesomeIcon icon={faCalendarAlt} />
                {props.year}
            </div>
            <div>{props.workPlace}</div>
            <div>{props.text}</div>
        </div>
    );
};
