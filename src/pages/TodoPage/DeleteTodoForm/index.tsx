import styles from './index.module.scss';
import React, { useContext } from 'react';
import { deleteTodo } from '../../../store/slices/todosSlice';
import { useRootDispatch } from '../../../hooks/storeHooks';
import CurrentTodoIdContext from '../../../contexts/CurrentTodoIdContext';
import { ButtonColors, CustomButton } from '../../../shared/CustomButton';

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
        currentIdContext.setId('');
        closeModal();
    };

    return (
        <form className={styles.deleteTodoForm} onSubmit={submitDeletingTodo}>
            <h3 className={styles.deleteTodoForm__header}>Delete task?</h3>
            <div className={styles.deleteTodoForm__buttons}>
                <CustomButton
                    className={styles.deleteTodoForm__buttons__cancel}
                    onClick={cancelDeleting}
                    color={ButtonColors.DangerRed}
                    width={'50%'}
                    height={20}
                >
                    Cancel
                </CustomButton>
                <CustomButton
                    className={styles.deleteTodoForm__buttons__delete}
                    type={'submit'}
                    width={'50%'}
                    height={20}
                >
                    Delete
                </CustomButton>
            </div>
        </form>
    );
};