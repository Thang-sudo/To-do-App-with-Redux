import {combineReducers} from 'redux';
import TodosReducers from './TodosReducers';

export default combineReducers({
    todos: TodosReducers,
})