import React from 'react'
import classNames from 'classnames';
import { NavLink } from "react-router-dom";

import styles from './BurgerNavMenu.module.scss';

interface Props {
    isOpen: boolean
}

const BurgerNavMenu: React.FC<Props> = ({isOpen}) => {
  return (
    <div className={classNames(styles.menu, isOpen ? styles.menuOpened : '')}>
        <ul className={styles.menu__box}>       
          <li className={styles.menu__item}>
              <NavLink
                  to="/"
                className={({ isActive, isPending }) =>
                  isActive ? styles.activeLink : ""
                }
              >
                  Главная
              </NavLink>
          </li>
          <li className={styles.menu__item}>
              <NavLink
                  to="/apartments"
                className={({ isActive, isPending }) =>
                  isActive ? styles.activeLink : ""
                }
              >
                  Номера и цены
              </NavLink>
          </li>
          <li className={styles.menu__item}>
              <NavLink
                  to="/posts"
                className={({ isActive, isPending }) =>
                  isActive ? styles.activeLink : ""
                }
              >
                  Статьи
              </NavLink>
          </li>
          <li className={styles.menu__item}>
              <NavLink
                  to="/info"
                className={({ isActive, isPending }) =>
                  isActive ? styles.activeLink : ""
                }
              >
                  Информация
              </NavLink>
          </li>
          <li className={styles.menu__item}>
              <NavLink
                  to="/boarding"
                className={({ isActive, isPending }) =>
                  isActive ? styles.activeLink : ""
                }
              >
                  Полный пансион
              </NavLink>
          </li>
        </ul>
    </div>
  )
}

export default BurgerNavMenu;