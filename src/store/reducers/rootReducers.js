import { combineReducers, createStore } from "redux";
import { toDoReducer } from "./todoReducer";

const rootReducer = combineReducers({
    todosState: toDoReducer,
});

export const todoStore = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());