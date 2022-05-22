import styles from './index.module.scss';
import React from 'react';
import cn from 'classnames';

type CustomButtonProps = {
    className?: string;
    onClick?: () => void;
    color?: ButtonColors;
    type?: 'button' | 'submit' | 'reset';
    width?: string | number;
    height?: string | number;
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
    width = 'fit-content',
    height = '40px',
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
        <button
            className={cn(styles.customButton, className, getColorClassName(color))}
            onClick={onClick}
            type={type}
            style={{ width: width, height: height }}
        >
            {children}
        </button>
    );
};