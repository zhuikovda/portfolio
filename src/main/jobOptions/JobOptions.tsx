import React from 'react';
import { ButtonUniversal } from '../../ButtonUniversal';
import s from './JobOptions.module.css';
import {BgType} from '../../App';

type JobOptionsHome={
    style: BgType
}

export const JobOptions = (props: JobOptionsHome) => {
    return (
        <div className={s.jo_container} style={props.style}>
            <div className='container'>
                <div className={s.jo_text}>
                    <p>I will consider options for remote work.</p>
                </div>
                <div>
                    <ButtonUniversal title={'hire me'}/>
                </div>
            </div>
        </div>
    );
};
