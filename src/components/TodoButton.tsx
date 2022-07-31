import React from 'react'

interface TodoButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit'
  className?: string;
  onClick?: (e: React.MouseEvent) => void
}

const TodoButton: React.FC<TodoButtonProps> = ({ children, className, onClick, type }) => {
  return (
    <button type={type || 'button'} className={`ml-3 cursor-pointer ${className || ''}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default TodoButton