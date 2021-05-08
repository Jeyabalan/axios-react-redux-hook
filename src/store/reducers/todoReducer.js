import { initialState } from "../state";
import { ADD_TODO, ADD_TODO_FAILURE, ADD_TODO_SUCCESS } from '../actions/AddTodoAction';
import { GET_TODO_FAILURE, GET_TODO_SUCCESS } from "../actions/GetTodosAction";
import { COMPLETE_TOO_FAILURE } from '../actions/CompleteTodoAction';

export const toDoReducer = (state = initialState.todosState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: action.payload,
                loading: true,
                error: '',
            };
        case ADD_TODO_SUCCESS:
            return {
                todos: action.payload,
                loading: false,
                error: '',
            };
        case ADD_TODO_FAILURE:
            return {
                todos: [...state.todos],
                loading: false,
                error: action.error,
            };
        case GET_TODO_SUCCESS:
            return {
                todos: action.payload,
                loading: false,
                error: '',
            };
        case GET_TODO_FAILURE:
        case COMPLETE_TOO_FAILURE:
            return {
                todos: [...state.todos],
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
}