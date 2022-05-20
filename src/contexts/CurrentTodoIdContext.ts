import { createContext } from 'react';

interface ICurrentTodoId {
    id: string;
    setId: (newId: string) => void;
}

const defaultState = {
    id: '',
    setId: () => {}
};

const CurrentTodoIdContext = createContext<ICurrentTodoId>(defaultState);

export default CurrentTodoIdContext;