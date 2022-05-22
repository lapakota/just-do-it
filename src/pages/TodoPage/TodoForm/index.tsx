import styles from './index.module.scss';
import React, { useContext, useEffect, useState } from 'react';
import { addTodo, updateTodo } from '../../../store/slices/todosSlice';
import { useRootDispatch, useRootSelector } from '../../../hooks/storeHooks';
import { ButtonColors, CustomButton } from '../../../shared/CustomButton';
import CurrentTodoIdContext from '../../../contexts/CurrentTodoIdContext';

export enum TodoFormTypes {
    Add,
    Update
}

type TodoFormProps = {
    showModal: boolean;
    closeModal: () => void;
    formType: TodoFormTypes;
};

const MAX_TODO_LENGTH = 300;

export const TodoForm: React.FC<TodoFormProps> = ({ showModal, closeModal, formType }) => {
    const todos = useRootSelector(x => x.todo.todos);
    const dispatch = useRootDispatch();
    const currentId = useContext(CurrentTodoIdContext);
    const [todoText, setTodoText] = useState('');

    useEffect(() => {
        if (formType === TodoFormTypes.Update && currentId.id) {
            const pickedTodoText = todos.filter(x => x.id === currentId.id)[0]?.text;
            pickedTodoText && setTodoText(pickedTodoText);
        }
    }, [currentId.id, formType, todos]);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!todoText) return;
        switch (formType) {
            case TodoFormTypes.Add:
                dispatch(addTodo({ text: todoText }));
                break;
            case TodoFormTypes.Update:
                dispatch(updateTodo({ id: currentId.id, text: todoText }));
                currentId.setId('');
                break;
        }
        setTodoText('');
        closeModal();
    };

    const onCancel = () => {
        setTodoText('');
        closeModal();
    };

    const [headerText, submitButtonText] =
        formType === TodoFormTypes.Add
            ? ['Add new task', 'Add']
            : formType === TodoFormTypes.Update
            ? ['Update task', 'Update']
            : ['Error', 'Error'];

    return (
        <form className={styles.addTodoForm} onSubmit={onSubmit}>
            <h3 className={styles.addTodoForm__header}>{headerText}</h3>
            <div className={styles.addTodoForm__inputsWrapper}>
                <input
                    className={styles.addTodoForm__input}
                    type={'text'}
                    value={todoText}
                    placeholder={'Enter task name...'}
                    onChange={e => setTodoText(e.target.value.slice(0, MAX_TODO_LENGTH))}
                    ref={input => formType === TodoFormTypes.Add && input && showModal && input.focus()}
                />
            </div>
            <div className={styles.addTodoForm__buttons}>
                <CustomButton
                    className={styles.addTodoForm__buttons__cancel}
                    onClick={onCancel}
                    color={ButtonColors.DangerRed}
                    width={'50%'}
                    height={20}
                >
                    Cancel
                </CustomButton>
                <CustomButton className={styles.addTodoForm__buttons__add} type={'submit'} width={'50%'} height={20}>
                    {submitButtonText}
                </CustomButton>
            </div>
        </form>
    );
};