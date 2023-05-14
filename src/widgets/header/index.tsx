import React, { useState } from 'react'
import BurgerMenu from './ui/BurgerMenu';

import styles from './Header.module.scss';
import BaseButton from 'shared/ui/BaseButton';
import useOutsideClick from './model/useOutsideClick';
import OpenMenuButton from './ui/OpenMenuButton';
import MediaQuery from "react-responsive";

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
        <BurgerMenu isOpen={open}/>
      </MediaQuery>
    </header>
  )
}

export default Header