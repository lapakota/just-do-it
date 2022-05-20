import styles from './index.module.scss';
import React from 'react';
import add from '../../../assets/icons/add.svg';

type AddTodoButtonProps = {
    onClick: () => void;
};

export const AddTodoButton: React.FC<AddTodoButtonProps> = ({ onClick }) => {
    return (
        <button className={styles.addTodoButton} onClick={onClick}>
            <img src={add} alt={'add icon'} />
            Add task
        </button>
    );
};