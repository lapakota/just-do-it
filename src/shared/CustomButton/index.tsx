import styles from './index.module.scss';
import React, { ReactElement } from 'react';
import cn from 'classnames';

type CustomButtonProps = {
    className?: string;
    onClick?: () => void;
    color?: ButtonColors;
    type?: 'button' | 'submit' | 'reset';
    children: any;
};

export enum ButtonColors {
    Red,
    DangerRed,
    Green
}

export const CustomButton: React.FC<CustomButtonProps> = ({
    className = '',
    onClick,
    color = ButtonColors.Green,
    type = 'button',
    children
}) => {
    const getColorClassName = (color: ButtonColors) => {
        switch (color) {
            case ButtonColors.Red:
                return styles.red;
            case ButtonColors.DangerRed:
                return styles.dangerRed;
            case ButtonColors.Green:
                return styles.green;
            default:
                return '';
        }
    };

    return (
        <button className={cn(styles.customButton, className, getColorClassName(color))} onClick={onClick} type={type}>
            {children}
        </button>
    );
};