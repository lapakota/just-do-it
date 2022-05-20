import styles from './index.module.scss';
import React, { useState } from 'react';
import { generateId } from '../../utils/generateId';

type CustomCheckboxProps = {
    checked: boolean;
    toggle: () => void;
};

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked, toggle }) => {
    const [id] = useState(generateId());

    return (
        <>
            <input
                className={styles.customCheckbox}
                type="checkbox"
                id={id}
                name={id}
                checked={checked}
                onChange={toggle}
            />
            <label htmlFor={id} />
        </>
    );
};
