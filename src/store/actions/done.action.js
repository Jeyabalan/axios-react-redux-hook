const DONE_TOO = 'DONE TODO';
const DONE_TOO_SUCCESS = 'DONE TODO SUCCESS';
const DONE_TOO_FAILURE = 'DONE TODO_FAILURE';

export const doneTodo = (id) =>({
    type: DONE_TOO,
    payload: id,
})

export const doneTodoSuccess = (success) =>({
    type: DONE_TOO_SUCCESS,
    payload: success,
})

export const doneTodoFailure = (error) =>({
    type: DONE_TOO_FAILURE,
    payload: error,
})
