import {ADD_TODO,  TOGGLE_TODO, DELETE_TODO } from './types';
let nextTodoId = 0
export const addTodo = todo => dispatch =>{
    dispatch({
        type: ADD_TODO,
        id: nextTodoId++,
        payload: todo
    })
}


export const toggleTodo = id =>{
    return{
        type: TOGGLE_TODO,
        id: id
    }
}

export const deleteTodo = id =>{
    return{
        type: DELETE_TODO,
        id: id
    }
}
