import React from 'react';
import add from '../../../assets/icons/add.svg';
import { ButtonColors, CustomButton } from '../../../shared/CustomButton';

type AddTodoButtonProps = {
    onClick: () => void;
};

export const AddTodoButton: React.FC<AddTodoButtonProps> = ({ onClick }) => {
    return (
        <CustomButton onClick={onClick} color={ButtonColors.Red}>
            <>
                <img src={add} alt={'add icon'} />
                Add task
            </>
        </CustomButton>
    );
};