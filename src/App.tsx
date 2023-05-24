import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import { Main } from './main/Main';

export type BgType = {
    background: string;
    backgroundImage: string;
    backgroundPositionX: string;
    backgroundPositionY: string;
    backgroundSize: string;
    backgroundRepeat: string;
    backgroundAttachment: string;
    backgroundOrigin: string;
    backgroundClip: string;
    backgroundColor: string;
};

function App() {
    const bg = {
        background: '#222',
        backgroundImage: 'initial',
        backgroundPositionX: 'initial',
        backgroundPositionY: 'initial',
        backgroundSize: 'initial',
        backgroundRepeat: 'repeat-x' + 'repeat-y',
        backgroundAttachment: 'initial',
        backgroundOrigin: 'initial',
        backgroundClip: 'initial',
        backgroundColor: 'rgb(34, 34, 34)'
    };

    return (
        <div>
            {/* <Routes>
                <Route path={'/header'} element={<Header />} />
                <Route path={'/main'} element={<Main />} />
                <Route path={'/footer'} element={<Footer />} />
            </Routes> */}
            <Header style={bg} />
            <Main style={bg} />
            {/* <Footer style={bg} /> */}
        </div>
    );
}

export default App;
