import React from 'react'
import { NavLink } from 'react-router-dom';

import styles from './NavMenu.module.scss';


const NavMenu = () => {
  return (
    <ul className={styles.menu}>
        <li className={styles.menu__item}>
            <NavLink
                to="/"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.unactiveLink
              }
            >
                Главная
            </NavLink>
        </li>
        <li className={styles.menu__item}>
            <NavLink
                to="/apartments"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.unactiveLink
              }
            >
                Номера и цены
            </NavLink>
        </li>
        <li className={styles.menu__item}>
            <NavLink
                to="/posts"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.unactiveLink
              }
            >
                Статьи
            </NavLink>
        </li>
        <li className={styles.menu__item}>
            <NavLink
                to="/info"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.unactiveLink
              }
            >
                Информация
            </NavLink>
        </li>
        <li className={styles.menu__item}>
            <NavLink
                to="/boarding"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.unactiveLink
              }
            >
                Полный пансион
            </NavLink>
        </li>
    </ul>
  )
}

export default NavMenu