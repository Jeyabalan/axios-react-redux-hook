export const ADD_TODO = 'ADD TODO';
export const ADD_TODO_SUCCESS = 'ADD TODO SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const addToDo = (payload) =>({
    type: ADD_TODO,
    payload,
})

export const addToDoSuccess = (success) =>({
    type: ADD_TODO_SUCCESS,
    payload: success
})

export const addToDoFailure = (error) =>({
    type: ADD_TODO_FAILURE,
    payload: error,
})
