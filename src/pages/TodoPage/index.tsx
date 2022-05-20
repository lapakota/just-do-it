import styles from './index.module.scss';
import React, { useState } from 'react';
import { useRootSelector } from '../../hooks/storeHooks';
import { TodoBlock } from './Todo';
import { Modal } from '../../shared/Modal';
import { AddTodoForm } from './AddTodoForm';
import { DeleteTodoForm } from './DeleteTodoForm';
import CurrentTodoIdContext from '../../contexts/CurrentTodoIdContext';

export const Todos: React.FC = () => {
    const [currentTodoId, setCurrentTodoId] = useState('');

    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const todos = useRootSelector(x => x.todo.todos);

    const openAddModal = () => {
        setShowAddModal(true);
    };

    const closeAddModal = () => {
        setShowAddModal(false);
    };

    const openDeleteModal = () => {
        setShowDeleteModal(true);
    };

    const closeDeleteModal = () => {
        setShowDeleteModal(false);
    };

    return (
        <CurrentTodoIdContext.Provider value={{ id: currentTodoId, setId: setCurrentTodoId }}>
            <div className={styles.todoPage}>
                <Modal show={showAddModal} onClose={closeAddModal}>
                    <AddTodoForm closeModal={closeAddModal} />
                </Modal>
                <Modal show={showDeleteModal} onClose={closeDeleteModal}>
                    <DeleteTodoForm closeModal={closeDeleteModal} />
                </Modal>
                <button onClick={openAddModal}>Создать</button>
                <section className={styles.todoPage__todos}>
                    <h2 className={styles.todoPage__header}>{todos.length > 0 ? 'Active tasks' : 'No tasks!'}</h2>
                    {todos.map(todo => (
                        <TodoBlock
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            status={todo.status}
                            openDeleteModal={openDeleteModal}
                        />
                    ))}
                </section>
            </div>
        </CurrentTodoIdContext.Provider>
    );
};
