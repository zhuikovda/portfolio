import React from 'react';
import { ButtonUniversal } from '../../ButtonUniversal';
import s from './JobOptions.module.scss';

export const JobOptions = () => {
    return (
        <div className={s.jo_container}>
            <div className={s.jo_text}>
                <p>I will consider options for remote work.</p>
            </div>
            <div className={s.jo_button}>
                <ButtonUniversal title={'hire me'} />
            </div>
        </div>
    );
};
