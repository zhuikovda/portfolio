import React from 'react';
import s from './Skills.module.scss';
import { SkillsComponent } from './SkillsComponent';

export const Skills = () => {
    return (
        <div className={s.skills_container}>
            <div className={s.skills_title}>
                <h2>SKILLS</h2>
            </div>

            <div className={s.skills_box}>
                <div className={s.skills}>
                    <SkillsComponent title={'HTML'} percent={'60%'} />
                </div>
                <div className={s.skills}>
                    <SkillsComponent title={'JAVASCRIPT'} percent={'30%'} />
                </div>
                <div className={s.skills}>
                    <SkillsComponent title={'CSS'} percent={'80%'} />
                </div>
                <div className={s.skills}>
                    <SkillsComponent title={'REACT'} percent={'50%'} />
                </div>
            </div>
        </div>
    );
};
