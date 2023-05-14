import React from 'react'
import classNames from 'classnames';

import styles from './BaseButton.module.scss';

interface Props {
    isBackgroundVisible?: boolean,
    children: string
    onClick: Function;
}

const BaseButton: React.FC<Props> = ({isBackgroundVisible, onClick, children}) => {
    return (
        <button 
            className={classNames(styles.baseButton, isBackgroundVisible ? styles.backgroundVisible : '')}
            onClick={() => onClick()}
        >
            {children}
        </button>
    )
}

BaseButton.defaultProps = {
    isBackgroundVisible: false,
}

export default BaseButton;