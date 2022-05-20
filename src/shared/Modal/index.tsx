import React, { ReactElement, useEffect } from 'react';
import './index.scss';
import cn from 'classnames';

type ModalProps = {
    onClose: () => void;
    show: boolean;
    children: ReactElement;
};

export const Modal: React.FC<ModalProps> = ({ onClose, show, children }) => {
    useEffect(() => {
        const closeOnEscapeKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.body.addEventListener('keydown', closeOnEscapeKeyDown);
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
        };
    }, [onClose]);

    return (
        <div className={cn('modal', show ? 'show' : '')} onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};
