import { TodoStatuses } from './TodoStatuses';

export interface Todo {
    id: string;
    status: TodoStatuses;
    text: string;
}
