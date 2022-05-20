import styles from './index.module.scss';
import React, { useContext, useState } from 'react';
import { TodoStatuses } from '../../../models/TodoStatuses';
import cn from 'classnames';
import { useRootDispatch } from '../../../hooks/storeHooks';
import { changeStatus } from '../../../store/slices/todosSlice';
import edit from '../../../assets/icons/edit.svg';
import trash from '../../../assets/icons/trash.svg';
import CurrentTodoIdContext from '../../../contexts/CurrentTodoIdContext';
import { useToggle } from '../../../hooks/useToggle';
import { CustomCheckbox } from '../../../shared/CustomCheckbox';

type TodoBlockProps = {
    id: string;
    text: string;
    status: TodoStatuses;
    openDeleteModal: () => void;
};

export const TodoBlock: React.FC<TodoBlockProps> = ({ id, text, status, openDeleteModal }) => {
    const [checked, toggleChecked] = useToggle(false);
    const dispatch = useRootDispatch();
    const currentIdContext = useContext(CurrentTodoIdContext);

    const handleCheckedUpdate = () => {
        toggleChecked();
        if (checked) dispatch(changeStatus({ id: id, status: TodoStatuses.Active }));
        else dispatch(changeStatus({ id: id, status: TodoStatuses.Fulfilled }));
    };

    const handleDeleteTodo = () => {
        currentIdContext.setId(id);
        openDeleteModal();
    };

    return (
        <section className={styles.todo}>
            <CustomCheckbox checked={checked} toggle={handleCheckedUpdate} />
            <h3 className={cn(styles.todo__text, status === TodoStatuses.Fulfilled ? styles.fulfilled : '')}>{text}</h3>
            <ul className={styles.todo__buttons}>
                <li>
                    <button className={styles.todo__buttons__button}>
                        <img src={edit} alt={'edit icon'} />
                    </button>
                </li>
                <li>
                    <button className={styles.todo__buttons__button} onClick={handleDeleteTodo}>
                        <img src={trash} alt={'trash icon'} />
                    </button>
                </li>
            </ul>
        </section>
    );
};