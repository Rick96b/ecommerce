import React from 'react'

import styles from './SocialMedia.module.scss';
import Telegram from '../../assets/Telegram.svg';
import Viber from '../../assets/Viber.svg';
import Facebook from '../../assets/Facebook.svg';
import VK from '../../assets/VK.svg';
import Instagram from '../../assets/Instagram.svg';

const SocialMedia = () => {
  return (
    <ul className={styles.media}>
        <li className={styles.media__item}>
            <a href="">
                <img src={Telegram} alt='Telegram' />
            </a>
        </li>
        <li className={styles.media__item}>
            <a href="">
                <img src={Viber} alt='Viber' />
            </a>
        </li>
        <li className={styles.media__item}>
            <a href="">
                <img src={Facebook} alt='Facebook' />
            </a>
        </li>
        <li className={styles.media__item}>
            <a href="">
                <img src={VK} alt='VK' />
            </a>
        </li>
        <li className={styles.media__item}>
            <a href="">
                <img src={Instagram} alt='Instagram' />
            </a>
        </li>
    </ul>
  )
}

export default SocialMedia;