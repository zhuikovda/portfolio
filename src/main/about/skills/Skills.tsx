import React from 'react';
import s from './Skills.module.css';
import { SkillsComponent } from './SkillsComponent';

export const Skills = () => {
    return (
        <div className={s.skills_container}>
            <div className={s.skills_title}>
                <h2>SKILLS</h2>
            </div>

            <div className={s.skills_box}>
                <div className={s.skills}>
                    <SkillsComponent                    
                        title={'HTML'}
                        text={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        }
                    />
                </div>
                <div className={s.skills}>
                    <SkillsComponent
                        title={'JAVASCRIPT'}
                        text={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        }
                    />
                </div>
                <div className={s.skills}>
                    <SkillsComponent
                        title={'CSS'}
                        text={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        }
                    />
                </div>
                <div className={s.skills}>
                    <SkillsComponent
                        title={'REACT'}
                        text={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        }
                    />
                </div>
            </div>
        </div>
    );
};
