import React from 'react';
import s from './About.module.css';
import { ExperEduc } from './ExperEduc';
import { url } from 'inspector';
import { Skills } from './skills/Skills';
import { BgType } from '../../App';
import ava from '../../assets/img/ava.jpg';

export const About = () => {
    return (
        <div className={s.about}>
            <div className='container'>
                <h1 className={s.about_title}>
                    about
                    <span> me</span>
                </h1>
            </div>
            <div className={s.container}>
                <div className={s.about_img}>
                    <div className={s.img}><img  src={ava} alt='' /></div>
                </div>
                <div className={s.about_me}>
                    <ul>
                        <li>
                            First Name <b>Dima</b>
                        </li>
                        <li>
                            Last Name <b>Zhuikov</b>
                        </li>
                        <li>
                            Birthdate <b>02 june 1985</b>
                        </li>
                        <li>
                            Nationality <b>Blarus</b>
                        </li>
                        <li>
                            Experience <b>0 yers</b>
                        </li>
                        <li>
                            Address <b>Minsk</b>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='container'>
                <div className={s.experEduc_container}>
                    <div className={s.experEduc}>
                        <h2>EXPERIENCE</h2>
                        <ExperEduc
                            year={'2017-2019'}
                            workPlace='Engineer-company'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                        />
                        <ExperEduc
                            year={'2017-2019'}
                            workPlace='Engineer-company'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                        />
                        <ExperEduc
                            year={'2017-2019'}
                            workPlace='Engineer-company'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        />
                    </div>

                    <div className={s.experEduc}>
                        <h2>EDUCATION</h2>
                        <ExperEduc
                            year={'2017-2019'}
                            workPlace='Engineer-company'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        />
                        <ExperEduc
                            year={'2017-2019'}
                            workPlace='Engineer-company'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                        />
                        <ExperEduc
                            year={'2017-2019'}
                            workPlace='Engineer-company'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
                        />
                    </div>
                </div>
            </div>
            <div className='container'>
                {/* <div className={s.skills}> */}
                <Skills />
                {/* </div> */}
            </div>
        </div>
    );
};
