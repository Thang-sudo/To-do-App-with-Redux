import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/types';

const initialState = {
    todos:[],
    todo:{}
}

export default function (state=initialState, action){
    switch(action.type){
        case ADD_TODO:
            let newState = {...state}
            let newTodo = {
                id: action.id,
                content:action.payload,
                completed: false
            }
            newState.todos.push(newTodo)
            newState.todo = newTodo
            return newState
        case TOGGLE_TODO:
            let returnState = {...state}
            returnState.todos.map(todo => todo.id === action.id? todo.completed = !todo.completed: todo )
            returnState.todo = {}
            return returnState
        case DELETE_TODO:
            let stateAfterDelete = {...state}
            stateAfterDelete.todos = state.todos.filter(todo => todo.id !== action.id)
            stateAfterDelete.todo = {}
            return stateAfterDelete
        default:
            return state
    }
}