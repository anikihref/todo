import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { ITodo } from "../models/ITodo";
import { todoSlice } from "../store/reducers/TodoSlice";
import TodoButton from "./TodoButton";
import { FiEdit2 } from "react-icons/fi";

interface TodoItemProps {
  todo: ITodo;
  todoNumber: number;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, todoNumber }) => {
  const dispatch = useAppDispatch();
  const { removeTodo, addEditingTodo, removeEditingTodo, completeTodo } = todoSlice.actions;
  const { editingTodo } = useAppSelector((state) => state.todoReducer);

  function handleEditMode(e: React.MouseEvent) {
    e.stopPropagation()

    if (editingTodo && editingTodo === todo) {
      dispatch(removeEditingTodo());
    } else {
      dispatch(addEditingTodo(todo));
    }
  }

  return (
    <div
      onClick={() => dispatch(completeTodo(todo.id))}
      className={`relative flex justify-between items-center p-5 bg-slate-600 select-none text-white md:p-3  ${
        editingTodo === todo &&
        "before:content-[''] before:h-full before:w-[8px] before:absolute before:bg-cyan-400 before:right-0 md:before:w-[4px]"
      } ${todo.completed && 'bg-slate-700'}`}
    >
      <div className="mr-4 text-xl md:text-base">{todoNumber}</div>
      <div className={`text-xl font-bold md:text-base`}>{todo.title}</div>

      <div className="ml-auto flex pl-4">
        <TodoButton className="ml-[0px] w-[20px] sm:w-[15px]" onClick={handleEditMode}>
          <FiEdit2 size={"100%"} />
        </TodoButton>

        <TodoButton
          className="w-[25px] sm:w-[20px]"
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          <IoIosRemoveCircleOutline size={"100%"} />
        </TodoButton>
      </div>
    </div>
  );
};

export default TodoItem;
