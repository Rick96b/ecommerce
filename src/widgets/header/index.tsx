import React, { useState } from 'react'
import { HomeFilled, MailFilled, PhoneFilled } from '@ant-design/icons';
import MediaQuery from "react-responsive";

import styles from './Header.module.scss';

import useOutsideClick from './model/useOutsideClick';
import OpenMenuButton from './ui/OpenMenuButton';
import BurgerNavMenu from './ui/BurgerNavMenu';
import NavMenu from './ui/NavMenu';
import SocialMedia from './ui/SocialMedia';


const Header = () => {
  const [open, setOpen] = useState(false);
  const ref = useOutsideClick(closeModal)

  function toggleOpen() {
    setOpen(!open);
  }

  function closeModal() {
    if(open) setOpen(false);
  }

  return (
    <header className={styles.header}  ref={ref}>
      <MediaQuery maxWidth={768}>
        <div className={styles.headerContainer}>
          <span className={styles.headerOpenMenuButton}><OpenMenuButton toggleMenu={toggleOpen}/></span>
          <span className={styles.headerLogoText}>Valentina<br /> Guest House</span>
        </div>
        <BurgerNavMenu isOpen={open}/>
      </MediaQuery>
      <MediaQuery minWidth={769} maxWidth={1022}>
          <div className={styles.headerTopContainer}>
            <span className={styles.adressContainer}>
              <HomeFilled style={{color: "#777777", width: '15px', height: '15px', marginRight: '10px'}}/>
              Абхазия, Цандрыпш, ул.Октябрьская, д.492
            </span>
            <span className={styles.emailContainer}>
              <MailFilled style={{color: "#777777", width: '18px', height: '12px', marginRight: '10px'}}/>
              booking@valentinahouse.ru
            </span>
            <span className={styles.phoneContainer}>
              <PhoneFilled style={{color: "#777777", width: '15px', height: '15px', marginRight: '10spx'}}/>
              8 (862) 279-56-89
            </span>
          </div>
          <div className={styles.navContainer}>
            <NavMenu />
          </div>
      </MediaQuery>
      <MediaQuery minWidth={1023}>
        <div className={styles.headerTopContainer}>
          <span className={styles.adressContainer}>
            <HomeFilled style={{color: "#777777", width: '15px', height: '15px', marginRight: '10px'}}/>
            Абхазия, Цандрыпш, ул.Октябрьская, д.492
          </span>
          <span className={styles.emailContainer}>
            <MailFilled style={{color: "#777777", width: '18px', height: '12px', marginRight: '10px'}}/>
            booking@valentinahouse.ru
          </span>
          <span className={styles.phoneContainer}>
            <PhoneFilled style={{color: "#777777", width: '15px', height: '15px', marginRight: '10spx'}}/>
            8 (862) 279-56-89
          </span>
        </div>
        <div className={styles.headerBottomContainer}>
          <span className={styles.headerLogoText}>
            Valentina <br /> Guest House
          </span>
          <div className={styles.navContainer}>
            <NavMenu />
          </div>
          <SocialMedia />
        </div>
      </MediaQuery>
    </header>
  )
}

export default Header