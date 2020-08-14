import React, { Component } from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {addTodo} from '../actions/todoActions'
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo: {
                id: 0,
                content:'',
                completed: false
            }
        }
        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }
   
    onChange(e){
        this.setState({content: e.target.value})
    }

    onClick(e){
        e.preventDefault();
        const todo = this.state.content
        this.props.addTodo(todo)
        this.setState({content: ''})
    }
    render() {
        return (
            <div className="form-container">
                <Form.Control size="lg" type="text" placeholder="Add Todo..." value = {this.state.content} onChange = {this.onChange} />
                <hr/>
                <Button variant="primary" type = "submit" onClick = {this.onClick}>Submit</Button>
            </div>
        )
    }
}

AddTodo.propTypes={
    addTodo: propTypes.func.isRequired,
}
export default connect(null,{addTodo})(AddTodo);
