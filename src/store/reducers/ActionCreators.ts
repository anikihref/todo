import { todoSlice } from './TodoSlice';
import { ITodo } from './../../models/ITodo';
import axios from 'axios';
import { AppDispatch } from './../store';

const url = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = (occurError: boolean) => async (dispatch: AppDispatch) => {
    const {todosFetching, todosFetchingError, todosFetchingSuccess} = todoSlice.actions
    try {
        dispatch(todosFetching())
        const {data} = await axios.get<ITodo[]>(`${occurError ? url + '123123123' : url}`, {
            params: {
                _limit: 3
            }
        })

        dispatch(todosFetchingSuccess(data))
    } catch (e: any) {
        dispatch(todosFetchingError(e.message))
    }

}