import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    text: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: [],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
         state.todos.push({ text: action.payload, completed: false })
           
        },
        toggleTodo: (state, action: PayloadAction<number>)  => {
            const todo = state.todos[action.payload]
            if (todo) {
                todo.completed = !todo.completed
            }
        },
        deleteTodo: (state, action: PayloadAction<number>)  => {
            state.todos = state.todos.filter((_, index) => index !== action.payload)
        }
    }
})

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;