import styles from './index.module.scss';
import React, { useState } from 'react';
import { addTodo } from '../../../store/slices/todosSlice';
import { useRootDispatch } from '../../../hooks/storeHooks';
import { ButtonColors, CustomButton } from '../../../shared/CustomButton';

type AddTodoFormProps = {
    showModal: boolean;
    closeModal: () => void;
};

const MAX_TODO_LENGTH = 300;

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
            <h3 className={styles.addTodoForm__header}>Add new task</h3>
            <div className={styles.addTodoForm__inputsWrapper}>
                <input
                    className={styles.addTodoForm__input}
                    type={'text'}
                    value={todoText}
                    placeholder={'Enter task name...'}
                    onChange={e => setTodoText(e.target.value.slice(0, MAX_TODO_LENGTH))}
                    ref={input => input && showModal && input.focus()}
                />
            </div>
            <div className={styles.addTodoForm__buttons}>
                <CustomButton
                    className={styles.addTodoForm__reject}
                    onClick={cancelAdding}
                    color={ButtonColors.DangerRed}
                >
                    Cancel
                </CustomButton>
                <CustomButton className={styles.addTodoForm__submit} type={'submit'}>
                    Add
                </CustomButton>
            </div>
        </form>
    );
};