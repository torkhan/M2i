import React, { Component } from 'react';

export class ContainerTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos:[],
            completedTodos:[],
            compteurTodo : 0
         }
    }

    addTodo = (task) => {
        let id = this.state.compteurTodo +1
        let todo ={
            id : id,
            task : task
        }
        
    }

    render() { 
        return ( 
            <div>
                <FormulaireTodo />
            </div>
         );
    }
}
 
