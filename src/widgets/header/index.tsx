import React, { useState } from 'react'
import BurgerMenu from './ui/BurgerMenu';

import styles from './Header.module.scss';
import BaseButton from 'shared/ui/BaseButton';
import useOutsideClick from './model/useOutsideClick';
import OpenMenuButton from './ui/OpenMenuButton';

const Header = () => {
  const [open, setOpen] = useState(false);
  const ref = useOutsideClick(toggleOpen)

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <header className={styles.header}  ref={ref}>
      <div className={styles.headerContainer}>
        <OpenMenuButton toggleMenu={toggleOpen}/>
      </div>
      <BurgerMenu isOpen={open}/>
    </header>
  )
}

export default Header