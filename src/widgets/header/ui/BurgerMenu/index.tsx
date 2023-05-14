import React from 'react'
import classNames from 'classnames';

import styles from './BurgerMenu.module.scss';

interface Props {
    isOpen: boolean
}

const BurgerMenu: React.FC<Props> = ({isOpen}) => {
  return (
    <div className={classNames(styles.menu, isOpen ? styles.menuOpened : '')}>
        <ul className={styles.menu__box}>
            <li className={styles.menu__item}>Главная</li>
            <li className={styles.menu__item}>Номера и цены</li>
            <li className={styles.menu__item}>Статьи</li>
            <li className={styles.menu__item}>Информация</li>
            <li className={styles.menu__item}>Полный пансион</li>
        </ul>
    </div>
  )
}

export default BurgerMenu;