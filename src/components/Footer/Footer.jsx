import React, { useState } from 'react';
import classes from './Footer.module.scss'
import Modal from '../UI/Modal/Modal';
import GrayButton from '../UI/button/GrayButton/GrayButton';
import EmptyButton from '../UI/button/EmptyButton/EmptyButton';
import RequestCall from '../modalContent/RequestCall/RequestCall';

import logoImage from '../../assets/image/logo/logo.png'
import visaImage from '../../assets/image/icon/visa.png'
import mastCardImage from '../../assets/image/icon/master-card.png'
import payPalImage from '../../assets/image/icon/pay-pal.png'
import viberImage from '../../assets/image/icon/viber.png'
import skypeImage from '../../assets/image/icon/skype.png'
import vkImage from '../../assets/image/icon/vk.png'
import telegramImage from '../../assets/image/icon/telegram.png'
import facebookImage from '../../assets/image/icon/facebook.png'
import facebookMassagerImage from '../../assets/image/icon/facebookM.png'
import fullLogoImage from '../../assets/image/logo/fullLogo.png'

const Footer = () => {
    const [modalValue, setModalValue] = useState(false);
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.generalInformation}>
                    <div className={classes.logo}>
                        <img src={logoImage} alt="" />
                    </div>
                    <div className={classes.legalInformation}>
                        <p className={classes.composition}>Калорийность и состав</p>
                        <p className={classes.legal}>Правовая информация</p>
                    </div>
                    <div className={classes.social}>
                        <p className={classes.title}>Мы в соцсетях</p>
                        <ul className={classes.socialContent}>
                            <li>YouTube</li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>ВКонтакте</li>
                            <li>Москва ул. Проспект Вернадского 86В</li>
                        </ul>
                    </div>
                    <div className={classes.copyryte}>
                        <p className={classes.text}>YaBao Все правa защищены © 2021</p>
                        <ul className={classes.payment}>
                            <li>
                                <img src={visaImage} alt=''></img>
                            </li>
                            <li>
                                <img src={payPalImage} alt=''></img>
                            </li>
                            <li>
                                <img src={mastCardImage} alt=''></img>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.contacts}>
                    <p className={classes.contactTitle}>Остались вопросы? А мы всегда на связи:</p>
                    <ul className={classes.buttonContainer}>
                        <li>
                            <a href='https://www.viber.com/ru/' target="_blank" rel="noreferrer"><EmptyButton src={viberImage} alt="Viber"></EmptyButton></a>
                        </li>
                        <li>
                            <a href='https://www.skype.com/ru' target="_blank" rel="noreferrer"><EmptyButton src={skypeImage} alt="Skype"></EmptyButton></a>
                        </li>
                        <li>
                            <a href='https://ru.wikipedia.org/wiki/Facebook_Messenger' target="_blank" rel="noreferrer">
                                <EmptyButton src={facebookMassagerImage} alt="Facebook Messenger"></EmptyButton>
                            </a>
                        </li>
                        <li>
                            <a href='https://telegram.org/' target="_blank" rel="noreferrer"><EmptyButton src={telegramImage} alt="Telegram"></EmptyButton></a>
                        </li>
                        <li>
                            <a href='https://en.wikipedia.org/wiki/Facebook' target="_blank" rel="noreferrer"><EmptyButton src={facebookImage} alt="Facebook"></EmptyButton></a>
                        </li>
                        <li>
                            <a href='https://vk.com/tupa_tpf' target="_blank" rel="noreferrer"><EmptyButton src={vkImage} alt="VK"></EmptyButton></a>
                        </li>
                        <li>
                            <a href='https://www.viber.com/ru/' target="_blank" rel="noreferrer"><EmptyButton>Напишите нам</EmptyButton></a>
                        </li>
                    </ul>
                    <div className={classes.bell}>
                        <p className={classes.number}>8 499 391-84-49</p>
                        <GrayButton onClick={() => setModalValue(true)}>Заказать звонок</GrayButton>
                        <Modal value={modalValue} changeValue={setModalValue}>
                            <RequestCall changeValue={setModalValue} />
                        </Modal>
                    </div>
                </div>
            </div>
            <div className={classes.fullLogo}>
                <img src={fullLogoImage} alt=''></img>
            </div>
        </div>
    );
};

export default Footer;