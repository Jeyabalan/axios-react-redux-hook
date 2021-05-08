import TodoService from "../../service/TodoService";

export const GET_TODO_SUCCESS = 'GET TODO SUCCESS';
export const GET_TODO_FAILURE = 'GET TODO FAILURE';

export const getAllTodos = () => async (dispatch) => {
    TodoService.getAllTodos().then((response) => {
        dispatch({
            type: GET_TODO_SUCCESS,
            payload: response.data
        });
    }, (error) => {
        dispatch({
            type: GET_TODO_FAILURE,
            error,
        });
    });
};
