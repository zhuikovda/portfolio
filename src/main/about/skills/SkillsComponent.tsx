import React, { FC } from 'react';
import { styled } from 'styled-components';

type SkillsComponentPropsType = {
    title: string;
    percent: string;
};

export const SkillsComponent: FC<SkillsComponentPropsType> = (props) => {
    return (
        <Container>
            <Title>{props.title}</Title>
            <Chart_Bar>
                <Item_Progress style={{ width: `${props.percent}` }}></Item_Progress>
                <Percent style={{ left: `calc((${props.percent}) - 21px)` }}>
                    {props.percent}
                    <Arrow></Arrow>
                </Percent>
            </Chart_Bar>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
`;

const Title = styled.span`
    display: block;
    margin-bottom: 18px;
    font-size: 16px;
    font-weight: 300;
    text-transform: uppercase;
    @media screen and (max-width: 1030px) {
        margin-bottom: 40px;
    }
`;

const Chart_Bar = styled.div`
    font-family: 'Poppins', sans-serif;
    color: #555;
    background: #fff;
    font-size: 0.9em;
    font-weight: 400;
    border-radius: 2px;
    display: block;
    height: 1px;
    position: relative;
    width: 100%;
    background: #555;
    margin-bottom: 45px;
`;

const Item_Progress = styled.span`
    border-radius: 2px;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    background-color: #ffb400;
`;

const Percent = styled.span`
    height: 32px;
    margin-top: -41px;
    position: absolute;
    width: 46px;
    z-index: 10;
    color: #ffb400;
    border-radius: 4px;
    font-weight: 600;
    font-size: 14px;
    line-height: 31px;
    top: 50%;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    border: 1px solid #ffb400;
`;

const Arrow = styled.b`
    display: inline-block;
    padding: 4px;
    transform: translateY(33.5px) rotate(45deg) skew(3deg, 3deg) translateX(-27px);
    background: #222;
    bottom: 8px;
    position: absolute;
    border: 1px solid #ffb400;
    border-width: 0 1px 1px 0;
`;
