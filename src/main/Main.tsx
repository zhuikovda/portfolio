import React from 'react';
import style from './Main.module.css';
import Home from './home/Home';

const Main = () => {
    return (
        <main className={style.main}>
            <Home />
             {/* <About /> 
             <Portfolio />
            <Contact /> */}
        </main> 
    );
};

export default Main;
