import { Modal } from 'antd';
import React from 'react'

import styles from './BaseModal.module.scss';

interface Props {
    isOpen: boolean,
    children: React.ReactNode
}

const BaseModal: React.FC<Props> = ({isOpen, children}) => {
  return (
    <Modal
        open={isOpen}
        footer={[]}
        className={styles.modal}
    >
        {children}
    </Modal>
  )
}

export default BaseModal;

