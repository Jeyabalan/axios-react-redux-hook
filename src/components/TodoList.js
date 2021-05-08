import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../store/actions/GetTodosAction';
import { completeTodo } from '../store/actions/CompleteTodoAction';

function TodoList() {
    const todos = useSelector(state => state.todosState.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos());
    }, [dispatch]);

    const makeCompleteTodo = (todo, id) => {
        dispatch(completeTodo({
            ...todo,
            completed: true,
        },
        todo.id));
    }

    return (
        <div className="mt-3 container-fluid w-100">
            <table className="table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Todo</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, index) => {
                            let textDecoration = {}, completedTodo = {};
                            if (todo.completed) {
                                textDecoration = {
                                    "text-decoration": "line-through"
                                }
                                completedTodo = {
                                    opacity: 0.5
                                }
                            }
                            return <tr key={todo.id}>
                                <td style={textDecoration}>{index + 1}</td>
                                <td style={textDecoration}>{todo.text}</td>
                                <td>
                                    <button style={completedTodo} className="btn btn-class btn-primary" onClick={() => todo.completed === false && makeCompleteTodo(todo, todo.id)}>Done</button>
                                </td>
                            </tr>
                        })
                    }
                    {
                        todos.length === 0 ? <tr>No more TODO</tr> : ''
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodoList
