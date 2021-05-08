import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo } from '../store/actions/AddTodoAction';

function TodoInput() {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const todos = useSelector(state => state.todosState.todos);

    function addToDoList() {
        dispatch(addToDo({
            id: todos.length + 1,
            text: value,
            completed: false,
        }));
        setValue('');
    }

    return (
        <div>
            <input className="form-control mb-3" value={value} type="text" onChange={(event) => setValue(event.target.value)}/>
            <button className="btn btn-primary" onClick={addToDoList}>Add To List</button>
        </div>
    )
}

export default TodoInput
