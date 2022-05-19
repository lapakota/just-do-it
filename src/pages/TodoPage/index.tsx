import styles from './index.module.scss';
import React, { useState } from 'react';
import { useRootSelector } from '../../hooks/storeHooks';
import { TodoBlock } from './Todo';
import { Modal } from '../../components/Modal';
import { AddTodoForm } from './AddTodoForm';

export const Todos: React.FC = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const todos = useRootSelector(x => x.todo.todos);

    const openAddModal = () => {
        setShowAddModal(true);
    };

    const closeAddModal = () => {
        setShowAddModal(false);
    };

    return (
        <div className={styles.todoPage}>
            <Modal show={showAddModal} onClose={closeAddModal}>
                <AddTodoForm closeModal={closeAddModal} />
            </Modal>
            <button onClick={openAddModal}>Создать</button>
            <section className={styles.todoPage__todos}>
                <h2 className={styles.todoPage__header}>{todos.length > 0 ? 'Active tasks' : 'No tasks!'}</h2>
                {todos.map(todo => (
                    <TodoBlock key={todo.id} id={todo.id} text={todo.text} status={todo.status} />
                ))}
            </section>
        </div>
    );
};
