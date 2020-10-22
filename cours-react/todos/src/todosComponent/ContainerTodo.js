import React, { Component } from 'react';
import FormulaireTodo from './FormulaireTodo';

class ContainerTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : [],
            completedTodos : [],
            compteurTodo : 0
        }
    }

    addTodo = (task) => {
        let id = this.state.compteurTodo + 1
        
        let todo = {
            id : id,
            task : task
        }
        
        let tmpTodos = [todo, ...this.state.todos]

        this.setState({
            todos : tmpTodos,
            compteurTodo : id
        })
    }
    render() {
        return (
            <div className="container">
                <FormulaireTodo addTodo={this.addTodo} />
            </div>
        );
    }
}

export default ContainerTodo;