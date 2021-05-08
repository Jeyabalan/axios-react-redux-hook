import TodoService from "../../service/TodoService";
import { getAllTodos } from "./GetTodosAction";

export const ADD_TODO = 'ADD TODO';
export const ADD_TODO_SUCCESS = 'ADD TODO SUCCESS';
export const ADD_TODO_FAILURE = 'ADD TODO FAILURE';

export const addToDo = (payload) => async (dispatch) => {
    TodoService.addTodo(payload).then((response) => {
        dispatch(getAllTodos());
    }, (error) => {
        dispatch(addToDoFailure(error));
    });
};

const addToDoSuccess = (success) =>({
    type: ADD_TODO_SUCCESS,
    payload: success
})

const addToDoFailure = (error) =>({
    type: ADD_TODO_FAILURE,
    payload: error,
})
