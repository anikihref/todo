import React, { FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { todoSlice } from "../store/reducers/TodoSlice";
import { v4 } from "uuid";
import { IoMdAdd } from "react-icons/io";

const TodoForm = () => {
  const [value, setValue] = useState<string>("");
  const { addTodo, changeTodo, removeEditingTodo } = todoSlice.actions;
  const dispatch = useAppDispatch();
  const { editingTodo, todos } = useAppSelector((state) => state.todoReducer);

  useEffect(() => {
    if (editingTodo) {
      setValue(editingTodo.title);
    } else {
      setValue("");
    }
  }, [editingTodo]);

  function handleAddTodo(e: FormEvent) {
    e.preventDefault();

    if (!value) {
      return;
    }

    if (editingTodo) {
      dispatch(
        changeTodo({
          id: editingTodo.id,
          content: {
            ...editingTodo,
            title: value,
          },
        })
      );
      dispatch(removeEditingTodo());
      return;
    }

    dispatch(
      addTodo({
        completed: false,
        id: v4(),
        title: value,
      })
    );

    setValue("");
  }

  return (
    <form
      onSubmit={handleAddTodo}
      className="bg-slate-600 w-full flex justify-between items-center p-5 text-white mb-5 md:flex-col md:p-3 md:mb-3"
    >
      <div className="flex items-center w-[80%] md:flex-col md:w-full">
        <input
          className="text-black min-w-[300px] p-2 text-xl outline-none w-[70%] lg:p-1 lg:text-lg md:w-full md:min-w-[0px] md:text-base"
          placeholder="Enter todo title"
          type="text"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />

        <div className="ml-5 text-lg lg:text-sm md:mt-3 md:ml-0 ">
          {editingTodo ? `editing todo №${todos.indexOf(editingTodo) + 1}` : 'creating todo...'}
        </div>
      </div>

      <button className="w-[40px] md:mt-5 md:w-[25px]" type="submit">
        <IoMdAdd size={"100%"} />
      </button>
    </form>
  );
};

export default TodoForm;
