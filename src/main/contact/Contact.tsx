import React from 'react';
import { ButtonUniversal } from '../../ButtonUniversal';
import s from './Contact.module.css';

export const Contact = () => {
    return (
        <div className={s.contact}>
            <div className='container'>
                <h1 className={s.contact_title}>
                    get
                    <span> in touch</span>
                </h1>
                <div className={s.contant_form}>
                    <div className={s.contant_form__contacts}>
                        <ul>
                            <li>
                                <h6 className={s.contant_form__item}>
                                    <span>Phone</span>
                                    <i></i>
                                    <span>+375 33 6........</span>
                                </h6>
                            </li>
                            <li>
                                <h6 className={s.contant_form__item}>
                                    <span>Email</span>
                                    <i></i>
                                    <span>zhuikovda@gmail.com</span>
                                </h6>
                            </li>
                            <li>
                                <h6 className={s.contant_form__item}>
                                    <span>LinkedIn</span>
                                    <i></i>
                                    <span>Dima Zhuikov</span>
                                </h6>
                            </li>
                        </ul>
                        <div className={s.social}>
                            <h6>Social Profiles</h6>
                            <div className={s.social_item}>
                                <ul>
                                    <li>
                                        <a href=''>
                                            <div className={s.item_icon}></div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href=''>
                                            <div className={s.item_icon}></div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href=''>
                                            <div className={s.item_icon}></div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href=''>
                                            <div className={s.item_icon}></div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={s.contact_form__inputs}>
                        <div>
                            <p>
                                If you have any suggestion, project or even you want to say Hello..
                                please fill out the form below and I will reply you shortly.
                            </p>
                        </div>
                        <form className={s.forms}>
                            <div className={s.forms_input}>
                                <i></i>
                                <input type='text' placeholder="  YOUR NAME"/>
                            </div>
                            <div className={s.forms_input}>
                                <i></i>
                                <input type='text' placeholder="  YOUR EMAIL"/>
                            </div>
                            <div className={s.forms_textarea}>
                                <i></i>
                                <textarea name='' id=''  rows={5} placeholder="  YOUR MESSAGE"></textarea>
                            </div>
                        </form>
                        <div><ButtonUniversal title={'send message'}/></div>
                        <div></div>
                    </div>
                </div>
            </div>
            {/* <div className='container'></div> */}
        </div>
    );
};
