import React, { Component } from 'react';
import './Todo.css';

class todo extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false, todoEdited: this.props.todo.todo };
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCompleted = this.handleCompleted.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleRemove() {
        this.props.removeTodo(this.props.todo.id);
    }

    handleCompleted() {
        this.props.completedTodo(this.props.todo);
    }

    handleEdit() {
        this.setState({ isEditing: !this.state.isEditing })
    }

    handleChange(evt) {
        this.setState({ todoEdited: evt.target.value });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        console.log(this.state.todoEdited)
        this.props.editTodo(this.state.todoEdited, this.props.todo);
        this.setState({ isEditing: false })
    }

    render() {


        return (
            <div>
                {!this.state.isEditing ? (
                    <div className="Todo">
                         <li className={this.props.todo.completed ? "Todo-task completed" : "Todo-task"} onClick={this.handleCompleted}> {this.props.todo.todo} </li>
                        <div className="Todo-buttons">
                            <button onClick={this.handleRemove}>
                                <i  className="fas fa-trash" />
                            </button>
                            <button onClick={this.handleEdit} >
                                <i className="fas fa-pen" />
                            </button>

                        </div>
                       

                    </div>
                ) : (
                    <div className="Todo">
                        <form className = "Todo-edit-form" onSubmit={this.handleSubmit}>
                            <div>
                                <label htmlFor="todo"></label>
                                <input
                                    type="text"
                                    id="todoEdited"
                                    name="todoEdited"
                                    value={this.state.todoEdited}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button>Save</button>
                        </form>
                    </div>
                )}
            </div>
        );
    }
}

export default todo;

