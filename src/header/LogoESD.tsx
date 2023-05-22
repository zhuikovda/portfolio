import React from 'react';
import styled from 'styled-components';

export const LogoESD = () => {
    return (
        <Container>
            <Logo_E>E</Logo_E>
            <Logo_ESD>E S D</Logo_ESD>
        </Container>
    );
};

const Container = styled.div`
    margin: auto 0;
    color: #ffb400;
    font-family: 'Playfair Display';
`;

const Logo_E = styled.div`
    font-size: 60px;
`;

const Logo_ESD = styled.div`
    font-size: 10px;
    text-align: center;
    line-height: 10px;
    width: 75px;
    position: relative;
    top: -42px;
    left: 1px;
    z-index: 1;
    background: #222;
    background-image: initial;
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: rgb(34, 34, 34);
`;
