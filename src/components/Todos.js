import React, { Component } from 'react'
import {connect} from 'react-redux'
import {toggleTodo} from '../actions/todoActions'
import {deleteTodo} from '../actions/todoActions'
import {Button} from 'react-bootstrap'
class Todos extends Component {

    render() {
        const buttonStyle ={
            marginLeft: '1%',
            marginRight: '0.5%',
        }
        const todoItems = this.props.todos.map(todo =>(
            <div className="todo-element" >
                <div>
                    <p style = {{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.content}</p>
                </div>
                <Button style={buttonStyle} variant="success"  onClick = {() => this.props.toggleTodo(todo.id)}>Toggle</Button>
                <Button style={buttonStyle} variant="danger" onClick = {() => this.props.deleteTodo(todo.id)}>Delete</Button>
            </div>
        ))
         return (
            <div>
                {todoItems}
            </div>
        )
    }
}
const mapStateToProps = state =>({
  todos: state.todos.todos,
  newTodo: state.todos.todo  
})

const mapDispatchToProps = (dispatch) =>{
    return{
        toggleTodo: id => dispatch(toggleTodo(id)),
        deleteTodo: id => dispatch(deleteTodo(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);