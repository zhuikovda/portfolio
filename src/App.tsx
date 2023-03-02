import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import { Main } from './main/Main';
import { Footer } from './footer/Footer';

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
