import React, { useReducer } from 'react';
const Todo = ({ todo, handleClickTodo }) => {

    return (
        <div
            className={todo.completed ? 'todo completed' : 'todo'}
            onClick={() => handleClickTodo(todo.id)}
        >
            <p>{todo.item}</p>
        </div>
    )
}
export default Todo;