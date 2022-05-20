import { useState } from 'react';

type UseModalReturn = () => [boolean, () => void, () => void];

export const useModal: UseModalReturn = () => {
    const [showModal, setShowModal] = useState(false);

    const [openModal, closeModal] = [
        () => {
            setShowModal(true);
        },
        () => {
            setShowModal(false);
        }
    ];

    return [showModal, openModal, closeModal];
};