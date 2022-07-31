import React from 'react'
import { useAppDispatch } from '../hooks/redux'
import { fetchTodos } from '../store/reducers/ActionCreators'
import { todoSlice } from '../store/reducers/TodoSlice'

const TodoActionLine = () => {
    const dispatch = useAppDispatch()
    const {deleteCompletedTodos, deleteAllTodos} = todoSlice.actions

    function handleDeleteCompletedTodos() {
        dispatch(deleteCompletedTodos())
    }

    function handleDeleteAllTodos() {
        dispatch(deleteAllTodos())
    }

  return (
    <div className='bg-slate-600 w-full p-5 text-white text-lg flex justify-center flex-wrap gap-x-5 md:text-base md:p-3'>
        <button onClick={handleDeleteCompletedTodos} className=''>
            delete completed
        </button>

        <button onClick={handleDeleteAllTodos} className=''>
            delete all
        </button>

        <button onClick={() => dispatch(fetchTodos(false))} className=''>
            fetch 
        </button>

        <button onClick={() => dispatch(fetchTodos(true))} className=''>
            generate error 
        </button>
    </div>
  )
}

export default TodoActionLine