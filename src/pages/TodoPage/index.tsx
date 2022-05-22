import styles from './index.module.scss';
import React, { useState } from 'react';
import { useRootSelector } from '../../hooks/storeHooks';
import { TodoBlock } from './TodoBlock';
import { Modal } from '../../shared/Modal';
import { TodoForm, TodoFormTypes } from './TodoForm';
import { DeleteTodoForm } from './DeleteTodoForm';
import CurrentTodoIdContext from '../../contexts/CurrentTodoIdContext';
import { useModal } from '../../hooks/useModal';
import { AddTodoButton } from './AddTodoButton';

export const Todos: React.FC = () => {
    const [currentTodoId, setCurrentTodoId] = useState('');

    const [showAddModal, openAddModal, closeAddModal] = useModal();
    const [showDeleteModal, openDeleteModal, closeDeleteModal] = useModal();
    const [showUpdateModal, openUpdateModal, closeUpdateModal] = useModal();

    const todos = useRootSelector(x => x.todo.todos);

    return (
        <CurrentTodoIdContext.Provider value={{ id: currentTodoId, setId: setCurrentTodoId }}>
            <div className={styles.todoPage}>
                <Modal show={showAddModal} onClose={closeAddModal}>
                    <TodoForm showModal={showAddModal} closeModal={closeAddModal} formType={TodoFormTypes.Add} />
                </Modal>
                <Modal show={showUpdateModal} onClose={closeUpdateModal}>
                    <TodoForm showModal={showAddModal} closeModal={closeUpdateModal} formType={TodoFormTypes.Update} />
                </Modal>
                <Modal show={showDeleteModal} onClose={closeDeleteModal}>
                    <DeleteTodoForm closeModal={closeDeleteModal} />
                </Modal>
                <div className={styles.todoPage__contentWrapper}>
                    <AddTodoButton onClick={openAddModal} />
                    <section className={styles.todoPage__todos}>
                        <h2 className={styles.todoPage__header}>{todos.length > 0 ? 'Active tasks' : 'No tasks'}</h2>
                        {todos.map(todo => (
                            <TodoBlock
                                key={todo.id}
                                id={todo.id}
                                text={todo.text}
                                status={todo.status}
                                openUpdateModal={openUpdateModal}
                                openDeleteModal={openDeleteModal}
                            />
                        ))}
                    </section>
                </div>
            </div>
        </CurrentTodoIdContext.Provider>
    );
};
