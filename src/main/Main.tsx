import React, {FC} from 'react';
import style from './Main.module.css';
import { Home } from './home/Home';
import { About } from './about/About';
import { Portfolio } from './portfolio/Portfolio';
import { JobOptions } from './jobOptions/JobOptions';
import { Contact } from './contact/Contact';
import {BgType} from '../App';

type MainType={
    style: BgType
}

export const Main: FC<MainType> = (props) => {
    return (
        <main className={style.main}>
            <Home style={props.style}/>
            <About style={props.style}/>
            <Portfolio style={props.style}/>
            <JobOptions style={props.style}/>
            <Contact style={props.style}/> 
        </main>
    );
};
