import { ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_TODO } from "./actionsTypes";

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
};

export const deleteAll = () => {
    return {
        type: DELETE_ALL
    }
};

export const removeTodo = (payload) => {
    return {
        type: REMOVE_TODO,
        payload
    }
};

export const handleEditSubmit = (payload) => {
    return {
        type: UPDATE_TODO,
        payload
    }
};