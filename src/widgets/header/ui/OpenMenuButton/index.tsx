import React from 'react'

import styles from './OpenMenuButton.module.scss';

interface Props {
    toggleMenu: Function
}

const OpenMenuButton: React.FC<Props> = ({toggleMenu}) => {
  return (
    <button className={styles.button} onClick={() => toggleMenu()}>
        <span />
    </button>
  )
}

export default OpenMenuButton