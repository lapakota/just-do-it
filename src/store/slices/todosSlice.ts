import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoStatuses } from '../../models/TodoStatuses';
import { generateId } from '../../utils/generateId';
import { TodosState } from '../../models/TodosState';

const initState: TodosState = {
    todos: []
};

export const todosSlice = createSlice({
    extraReducers: undefined,
    initialState: initState,
    name: 'todos',
    reducers: {
        addTodo: (state, action: PayloadAction<{ text: string }>) => {
            state.todos.push({ id: generateId(), status: TodoStatuses.Active, text: action.payload.text });
        },
        deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
            state.todos = state.todos.filter(x => x.id !== action.payload.id);
        },
        changeStatus: (state, action: PayloadAction<{ id: string; status: TodoStatuses }>) => {
            state.todos.filter(x => x.id === action.payload.id)[0].status = action.payload.status;
        },
        updateTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
            const todo = state.todos.filter(x => x.id === action.payload.id)[0];
            todo.text = action.payload.text;
        }
    }
});

export const { addTodo, deleteTodo, changeStatus, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;
