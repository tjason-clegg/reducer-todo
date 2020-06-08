import React, { useReducer, useState } from 'react';
import Todo from './Todo';
import { reducer, initialState } from '../reducers/listReducer';


const TodoList = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [formValue, setFormValue] = useState('');

    const handleChanges = e => {
        setFormValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (formValue !== '') {
            dispatch({ type: 'CREATE_TODO', payload: formValue })
            setFormValue('');
        }
    }

    const handleClear = (e, id) => {
        e.preventDefault();
        dispatch({ type: 'CLEAR_COMPLETED' });
        console.log(state);
    }

    const handleClickTodo = (id) => {
        dispatch({ type: 'TOGGLE_COMPLETED', payload: id });
    }

    return (
        <div>
            <form
                className='input-form'
                onSubmit={handleSubmit}
            >
                <input
                    className='todo-input'
                    name='item'
                    value={formValue}
                    onChange={handleChanges}
                    placeholder='Add Todo'
                /><br />
                <div className="button-div">
                    <button className='btn-add'>Add</button>
                    <button className='btn-clear' onClick={handleClear}>Clear</button>
                </div>
            </form>
            <div className='list'>
                {state && state.todos.map(todo =>
                    <Todo
                        key={todo.id}
                        todo={todo}
                        handleClickTodo={handleClickTodo}
                    />)}
            </div>
        </div>
    )
}
export default TodoList;