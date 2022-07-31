import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {TiDeleteOutline} from 'react-icons/ti'
import { todoSlice } from "../store/reducers/TodoSlice";

const ErrorMessage = () => {
  const { error } = useAppSelector((state) => state.todoReducer);
  const dispatch = useAppDispatch()
  const {deleteErrorMessage} = todoSlice.actions
  
  function handleCloseError() {
    dispatch(deleteErrorMessage())
  }

  return (
    <div className="mb-5 p-5 w-full bg-slate-600 md:mb-3 flex items-center">
      <p className="relative left-1/2 -translate-x-1/2 mr-4 text-red-500 text-xl text-bold md:text-base md:left-0 md:translate-x-0">
        {error} 
      </p>

      <button className="w-[40px] ml-auto min-w-[25px] text-white md:w-[25px]" onClick={handleCloseError}>
        <TiDeleteOutline size={'100%'} />
      </button>
    </div>
  );
};

export default ErrorMessage;
