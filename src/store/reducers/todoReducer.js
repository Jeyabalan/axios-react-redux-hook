import { initialState } from "../state";
import { ADD_TODO, ADD_TODO_FAILURE, ADD_TODO_SUCCESS } from '../actions/add.action';

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
                todos: [],
                loading: false,
                error: '',
            };
        default:
            return state;
    }
}