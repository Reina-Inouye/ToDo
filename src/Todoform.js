import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css';

class todoform extends Component {
    constructor(props) {
        super(props);
        this.state = {todo:""}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(evt) {
        this.setState({todo:evt.target.value});
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const newTodo = { ...this.state, id: uuid(), completed: false };
        this.props.updateTodo(newTodo);
        this.setState({todo: ""});
    }


    render() {
        return (
            
                <form className="NewTodoForm" onSubmit = {this.handleSubmit}>
                
                    <label htmlFor="todo">New Todo:</label>
                    <input
                        type = "text"
                        placeholder = "New todo"
                        id="todo"
                        name="todo"
                        value={this.state.todo}
                        onChange={this.handleChange}
                    />
                    
                    <button>Add Todo</button>
                </form>
                
            
        );
    }
}

export default todoform;
