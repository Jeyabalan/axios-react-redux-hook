import TodoService from "../../service/TodoService";
import { getAllTodos } from "./GetTodosAction";

export const COMPLETE_TOO_FAILURE = 'COMPLETE TODO FAILURE';

export const completeTodo = (payload, id) => async (dispatch) => {
    TodoService.completedTodo(id, payload).then((response) => {
        dispatch(getAllTodos());
    }, (error) => {
        dispatch(completeTodoFailure(error));
    });
}

const completeTodoFailure = (error) =>({
    type: COMPLETE_TOO_FAILURE,
    payload: error,
})
