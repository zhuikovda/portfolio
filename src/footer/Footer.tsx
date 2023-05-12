import React from 'react';
import s from './Footer.module.css';
import {BgType} from '../App';

type FooterType = {
    style: BgType
}

export const Footer = (props: FooterType) => {
    return (
        <div className={s.footer} style={props.style}>
            <div className='container'>
                <h2>Dima Zhuikov</h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};
