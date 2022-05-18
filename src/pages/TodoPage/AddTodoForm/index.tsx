import styles from './index.module.scss';
import React, { useState } from 'react';
import { addTodo } from '../../../store/slices/todosSlice';
import { useRootDispatch } from '../../../hooks/storeHooks';

type AddTodoFormProps = {
    closeModal: () => void;
};

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ closeModal }) => {
    const dispatch = useRootDispatch();
    const [todoText, setTodoText] = useState('');

    const onSubmitAddingTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!todoText) return;
        dispatch(addTodo({ text: todoText }));
        setTodoText('');
        closeModal();
    };

    return (
        <form className={styles.addTodoForm} onSubmit={onSubmitAddingTodo}>
            <input
                className={styles.addTodoForm__input}
                type={'text'}
                value={todoText}
                onChange={e => setTodoText(e.target.value)}
            />
            <button className={styles.addTodoForm__submit} type={'submit'}>
                Создать
            </button>
        </form>
    );
};