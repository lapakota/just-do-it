import styles from './index.module.scss';
import React, { useContext } from 'react';
import { deleteTodo } from '../../../store/slices/todosSlice';
import { useRootDispatch } from '../../../hooks/storeHooks';
import CurrentTodoIdContext from '../../../contexts/CurrentTodoIdContext';

type DeleteTodoFormProps = {
    closeModal: () => void;
};

export const DeleteTodoForm: React.FC<DeleteTodoFormProps> = ({ closeModal }) => {
    const dispatch = useRootDispatch();
    const currentIdContext = useContext(CurrentTodoIdContext);

    const submitDeletingTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(deleteTodo({ id: currentIdContext?.id }));
        closeModal();
    };

    const cancelDeleting = () => {
        closeModal();
    };

    return (
        <form className={styles.deleteTodoForm} onSubmit={submitDeletingTodo}>
            <h4 className={styles.deleteTodoForm__header}>Delete task?</h4>
            <div className={styles.deleteTodoForm__buttons}>
                <button className={styles.deleteTodoForm__reject} onClick={cancelDeleting} type={'button'}>
                    Отменить
                </button>
                <button className={styles.deleteTodoForm__submit} type={'submit'}>
                    Удалить
                </button>
            </div>
        </form>
    );
};