import styles from './index.module.scss';
import React from 'react';
import logo from '../../assets/scale_1200.webp';

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <img className={styles.header__logo__image} src={logo} alt={'logo'} />
            </div>
        </header>
    );
};
