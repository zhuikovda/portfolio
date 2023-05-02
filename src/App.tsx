import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import { Main } from './main/Main';
import { Footer } from './footer/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div>
            {/* <Routes>
                <Route path={'/header'} element={<Header />} />
                <Route path={'/main'} element={<Main />} />
                <Route path={'/footer'} element={<Footer />} />
            </Routes> */}
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
