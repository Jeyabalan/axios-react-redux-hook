import axios from "axios";
const BASE_URL = `http://localhost:3006`;

const getAllTodos = () => {
    return axios.get(`${BASE_URL}/todoList`);
}

const addTodo = (params) => {
    return axios.post(`${BASE_URL}/todoList`, params);
}

const completedTodo = (id, params) => {
    return axios.put(`${BASE_URL}/todoList/${id}`, params);
}

const TodoService = {
    getAllTodos,
    addTodo,
    completedTodo
};

export default TodoService;
