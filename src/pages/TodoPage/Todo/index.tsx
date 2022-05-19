import styles from './index.module.scss';
import React, { useState } from 'react';
import { TodoStatuses } from '../../../models/TodoStatuses';
import cn from 'classnames';
import { useRootDispatch } from '../../../hooks/storeHooks';
import { changeStatus } from '../../../store/slices/todosSlice';

type TodoBlockProps = {
    id: string;
    text: string;
    status: TodoStatuses;
};

export const TodoBlock: React.FC<TodoBlockProps> = ({ id, text, status }) => {
    const [checked, setChecked] = useState(false);
    const dispatch = useRootDispatch();

    const handleCheckedUpdate = (prev: boolean) => {
        setChecked(!prev);
        if (prev) dispatch(changeStatus({ id: id, status: TodoStatuses.Active }));
        else dispatch(changeStatus({ id: id, status: TodoStatuses.Fulfilled }));
    };

    return (
        <section className={styles.todo}>
            <input
                className={styles.todo__checkbox}
                type={'checkbox'}
                checked={checked}
                onChange={() => handleCheckedUpdate(checked)}
            />
            <h3 className={cn(styles.todo__text, status === TodoStatuses.Fulfilled ? styles.fulfilled : '')}>{text}</h3>
            <ul className={styles.todo__buttons}>
                <li>
                    <button>Редактировать</button>
                </li>
                <li>
                    <button>Удалить</button>
                </li>
            </ul>
        </section>
    );
};