import React, { FC } from 'react';
import styled from 'styled-components';

type ButtonUniversalPropstype = {
    title: string;
};

export const ButtonUniversal: FC<ButtonUniversalPropstype> = (props) => {
    return (
        <Button>
            <span>{props.title}</span>
        </Button>
    );
};

const Button = styled.button`
    cursor: pointer;
    margin-top: 10px;
    box-shadow: none !important;
    border-radius: 26px;
    font-weight: 500;
    height: 46px;
    line-height: 46px;
    font-size: 15px;
    text-transform: uppercase;
    color: #fff;
    padding: 0 33px;
    outline: none !important;
    overflow: hidden;
    display: inline-block;
    position: relative;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 0.5px;
    border: 0;
    background-color: #ffb400;
    &::before {
        position: absolute;
        content: '';
        top: 0;
        height: 102%;
        left: -25%;
        width: 0%;
        background-color: #555;
        transform: skew(-22deg);
        transition-duration: 0.6s;
        z-index: 1;
    }
    &:hover::before {
        width: 180%;
    }
    & span {
        position: relative;
        z-index: 2;
    }
`;
