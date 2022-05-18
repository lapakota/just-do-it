import styles from './index.module.scss';
import React from 'react';
import { TodoStatuses } from '../../../models/TodoStatuses';
import cn from 'classnames';

type TodoBlockProps = {
    text: string;
    status: TodoStatuses;
};

export const TodoBlock: React.FC<TodoBlockProps> = ({ text, status }) => {
    return (
        <section className={styles.todo}>
            <p className={cn(styles.todo__text, status === TodoStatuses.Fulfilled ? styles.fulfilled : '')}>
                текст: {text}
            </p>
            <p className={styles.todo__status}>статус: {status}</p>
        </section>
    );
};