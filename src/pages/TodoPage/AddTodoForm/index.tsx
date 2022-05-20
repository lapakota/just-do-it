import styles from './index.module.scss';
import React, { useState } from 'react';
import { addTodo } from '../../../store/slices/todosSlice';
import { useRootDispatch } from '../../../hooks/storeHooks';

type AddTodoFormProps = {
    showModal: boolean;
    closeModal: () => void;
};

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ showModal, closeModal }) => {
    const dispatch = useRootDispatch();
    const [todoText, setTodoText] = useState('');

    const submitAddingTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!todoText) return;
        dispatch(addTodo({ text: todoText }));
        setTodoText('');
        closeModal();
    };

    const cancelAdding = () => {
        setTodoText('');
        closeModal();
    };

    return (
        <form className={styles.addTodoForm} onSubmit={submitAddingTodo}>
            <h4 className={styles.addTodoForm__header}>Add task</h4>
            <input
                className={styles.addTodoForm__input}
                type={'text'}
                value={todoText}
                onChange={e => setTodoText(e.target.value)}
                ref={input => input && showModal && input.focus()}
            />
            <div className={styles.addTodoForm__buttons}>
                <button className={styles.addTodoForm__reject} onClick={cancelAdding} type={'button'}>
                    Отменить
                </button>
                <button className={styles.addTodoForm__submit} type={'submit'}>
                    Создать
                </button>
            </div>
        </form>
    );
};