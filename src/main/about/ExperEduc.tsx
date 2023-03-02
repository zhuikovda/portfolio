import React, { FC } from "react";
import calendar from "../../calendar.svg"
// import s from './ExperEduc.module.css'

type ExperEducPropsType = {
    // title: string
    // img: string
    year: string
    workPlace: string
    text: string
}

export const ExperEduc: FC<ExperEducPropsType> = (props) => {
    return (
        <div>
            
            <div>
                <div>
                    <img src={ calendar } alt="" />
                    { props.year }
                </div>
                <div>{ props.workPlace }</div>
                <div>{ props.text }</div>
            </div>
        </div>
    )
}