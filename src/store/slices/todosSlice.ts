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
            state.todos.push({ id: generateId(), status: TodoStatuses.Pending, text: action.payload.text });
        },
        deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
            state.todos = state.todos.filter(x => x.id !== action.payload.id);
        },
        fulfillTodo: (state, action: PayloadAction<{ id: string }>) => {
            state.todos.filter(x => x.id === action.payload.id)[0].status = TodoStatuses.Fulfilled;
        }
    }
});

export const { addTodo, deleteTodo, fulfillTodo } = todosSlice.actions;

export default todosSlice.reducer;
