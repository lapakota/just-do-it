import { useState } from 'react';

type UseModalReturn = (initial: boolean) => [boolean, () => void];

export const useToggle: UseModalReturn = (initial: boolean) => {
    const [checked, setChecked] = useState(initial);

    const toggle = () => setChecked(prev => !prev);

    return [checked, toggle];
};