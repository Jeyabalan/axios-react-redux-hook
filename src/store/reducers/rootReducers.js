import { combineReducers } from "redux";
import { toDoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
    todosState: toDoReducer,
});
