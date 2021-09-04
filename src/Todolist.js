import React, { Component } from 'react';
import Todoform from './Todoform';
import Todo from './Todo'
import './TodoList.css';

class todolist extends Component {
    constructor(props) {
        super(props);
        this.state = { todoList: [] }
        this.updateTodo = this.updateTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.completedTodo = this.completedTodo.bind(this);
    }

    updateTodo(newTodo) {
        this.setState({
            todoList: [...this.state.todoList, newTodo]
        })
    }

    editTodo(todoToEdit, todoArray) {
        let index = this.state.todoList.indexOf(todoArray)
        let newList = [...this.state.todoList];
        newList[index].todo = todoToEdit;
        this.setState({ todoList: newList })
    }

    completedTodo(todoArray) {
        let index = this.state.todoList.indexOf(todoArray)
        let newList = [...this.state.todoList];
        newList[index].completed = !newList[index].completed ;
        this.setState({ todoList: newList})

    }

    removeTodo(idToRemove) {
        let newList = this.state.todoList.filter(task => task.id !== idToRemove);
        this.setState({ todoList: newList })
    }

    render() {
        let todoList = this.state.todoList.map((todo) =>
                <Todo todo={todo} key={todo.id} removeTodo={this.removeTodo} editTodo={this.editTodo} completedTodo={this.completedTodo}/>
        )
        return (
            <div className = "TodoList">
                <h1>Todo List<span>A simple react todo list app</span></h1>
                <ul>{todoList}</ul>
                <Todoform updateTodo={this.updateTodo}/>
            </div>
        );
    }
}

export default todolist;
