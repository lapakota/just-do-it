import styles from './index.module.scss';
import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>Just do it</div>
        </header>
    );
};
