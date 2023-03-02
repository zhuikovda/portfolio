import React from 'react';
import style from './Main.module.css';
import { Home } from './home/Home';
import { About } from './about/About';
import { Portfolio } from './portfolio/Portfolio';
import { JobOptions } from './jobOptions/JobOptions';
import { Contact } from './contact/Contact';

export const Main = () => {
    return (
        <main className={style.main}>
            <Home />
            <About />
            <Portfolio />
            <JobOptions />
            <Contact /> 
        </main>
    );
};
