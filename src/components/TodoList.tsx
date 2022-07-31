import React from 'react'
import { useAppSelector } from '../hooks/redux'
import TodoItem from './TodoItem'

const TodoList = () => {
  const {todos} = useAppSelector(state => state.todoReducer)


  return (
    <div className={`w-full mx-auto mb-5 md:mb-3`}>
      {todos.toString() ? todos.map((todo, num) => (
        <TodoItem key={todo.id} todoNumber={num + 1} todo={todo}/>
      )) : <div className='p-5 bg-slate-600 select-none text-white font-bold text-center text-2xl md:text-base md:p-2'>No todos</div>}
    </div>
  )
}

export default TodoList