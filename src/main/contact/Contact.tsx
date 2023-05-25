import React from 'react';
import { ButtonUniversal } from '../../ButtonUniversal';
import s from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faLinkedin, faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
    return (
        <div className={s.contact}>
            <div className={s.container}>
                <h1 className={s.contact_title}>
                    get
                    <span> in touch</span>
                </h1>
                <div className={s.contant_form}>
                    <div>
                        <ul>
                            <li>
                                <h6 className={s.contant_form__item}>
                                    <h6>
                                        <FontAwesomeIcon icon={faPhone} className={s.contant_form_item_icon} />
                                        Phone
                                    </h6>
                                    <i></i>
                                    <span>+375 33 6........</span>
                                </h6>
                            </li>
                            <li>
                                <h6 className={s.contant_form__item}>
                                    <h6>
                                        <FontAwesomeIcon icon={faEnvelope} className={s.contant_form_item_icon} />
                                        Email
                                    </h6>
                                    <i></i>
                                    <span>zhuikovda@gmail.com</span>
                                </h6>
                            </li>
                            <li>
                                <h6 className={s.contant_form__item}>
                                    <h6>
                                        <FontAwesomeIcon icon={faLinkedin} className={s.contant_form_item_icon} />
                                        LinkedIn
                                    </h6>
                                    <i></i>
                                    <span>Dima Zhuikov</span>
                                </h6>
                            </li>
                        </ul>
                        <div className={s.social}>
                            <h6>Social Profiles</h6>
                            <div>
                                <ul>
                                    <li>
                                        <a href=''>
                                            <div className={s.item_icon}>
                                                <FontAwesomeIcon icon={faTelegram} />
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href=''>
                                            <div className={s.item_icon}>
                                                <FontAwesomeIcon icon={faInstagram} />
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href=''>
                                            <div className={s.item_icon}>
                                                <FontAwesomeIcon icon={faFacebookSquare} />
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href=''>
                                            <div className={s.item_icon}>
                                                <FontAwesomeIcon icon={faLinkedin} />
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href=''>
                                            <div className={s.item_icon}>
                                                <FontAwesomeIcon icon={faVk} />
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={s.contact_form__inputs}>
                        <div>
                            <p>
                                If you have any suggestion, project or even you want to say Hello.. please fill out the
                                form below and I will reply you shortly.
                            </p>
                        </div>
                        <form className={s.forms}>
                            <div className={s.forms_input}>
                                <i></i>
                                <input type='text' placeholder='  YOUR NAME' />
                            </div>
                            <div className={s.forms_input}>
                                <i></i>
                                <input type='text' placeholder='  YOUR EMAIL' />
                            </div>
                            <div className={s.forms_textarea}>
                                <i></i>
                                <textarea name='' id='' rows={5} placeholder='  YOUR MESSAGE'></textarea>
                            </div>
                        </form>
                        <div>
                            <ButtonUniversal title={'send message'} />
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            {/* <div className='container'></div> */}
        </div>
    );
};
