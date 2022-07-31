import { v4 } from 'uuid';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../models/ITodo"


interface TodoState {
    todos: ITodo[];
    isLoading: boolean;
    error: string;
    editingTodo: ITodo | null;
}

const initialState: TodoState = {
    todos: [],
    isLoading: false,
    error: '',
    editingTodo: null
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        todosFetching(state) {
            state.isLoading = true
        },
        todosFetchingSuccess(state, action: PayloadAction<ITodo[]>) {
            state.isLoading = false
            state.error = ''

            const modifiedTodos = action.payload.map(todo => ({
                ...todo, 
                id: v4()
            }))
            
            state.todos = state.todos.concat(modifiedTodos)
        },
        todosFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        deleteErrorMessage(state) {
            state.error = ''
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        addTodo(state, action: PayloadAction<ITodo>)  {
            state.todos = state.todos.concat(action.payload)
        },
        deleteAllTodos(state) {
            state.todos = []
        },
        deleteCompletedTodos(state) {
            state.todos = state.todos.filter(todo => !todo.completed)
            
            const editingTodoExist = state.todos.find(todo => todo === state.editingTodo)

            if (!editingTodoExist) {
                state.editingTodo = null
            }
        },
        changeTodo(state, action: PayloadAction<{id: string; content: ITodo}>) {
           state.todos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return action.payload.content
                }

                return todo
           })
 
        },
        completeTodo(state, action: PayloadAction<string>) {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        },
        addEditingTodo(state, action: PayloadAction<ITodo>) {
            state.editingTodo = action.payload
        },
        removeEditingTodo(state) {
            state.editingTodo = null
        }
    }

})

export default todoSlice.reducer    