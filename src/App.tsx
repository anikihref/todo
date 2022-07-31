import React from 'react';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
import TodoActionLine from './components/TodoActionLine';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useAppSelector } from './hooks/redux';
import './index.css'

function App() {
  const {isLoading, error} = useAppSelector(state => state.todoReducer)
  
  return (
    <div className='h-full flex-col flex justify-center items-center w-4/5 my-10'>   
      <TodoForm/>
      {isLoading && <Loader />}
      <TodoList />
      {error && <ErrorMessage />}
      <TodoActionLine />
    </div>
  );
}

export default App;
