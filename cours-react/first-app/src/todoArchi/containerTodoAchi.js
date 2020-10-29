import React, { Component } from 'react';
import { FormulaireTodoArchi } from './formulaireTodoArchi';

export class ContainerTodoArchi extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            todos : [],
            completedTodos : [],
            task : '',
            compteurTodoId : 0
         }
    }

    
    confirm = (task) => {
        let id = this.state.compteurTodoId + 1
        let todo = {id: id,  task: task}
        let tmpTodos = [todo, ...this.state.todos]
        this.setState({
            todos:[...tmpTodos],
           
            compteurTodoId: id
        })
    }

    changeTodoStatus = (id) =>{
        let todo = this.state.todos.find(t => t.id == id)
        let tmpCompletedTodos = [todo, ...this.state.completedTodos]
        let tmpTodos = this.state.todos.filter(t => t.id != id)
        this.setState({
            todos : [...tmpTodos],
            completedTodos : [...tmpCompletedTodos]
        })
    }

    deleteTodo = (id, liste) => {
        switch(liste) {
            case 'todos':
                let tmpTodos = this.state.todos.filter(t=>t.id != id)
                this.setState({
                    todos : tmpTodos
                })
                break;
            case 'completedTodos':
                let tmpcompletedTodos = this.state.completedTodos.filter(t=>t.id != id)
                this.setState({
                    completedTodos : tmpcompletedTodos
                })
                break;
        }
    }
    render() { 
        return (  
            <div className="container">
                <h1>TODO LIST</h1>
                <div className="col">
                    <h2>Tasks</h2>
                    <FormulaireTodoArchi confirm={this.confirm}/>
                   
                </div>
                <div className="row">
                    <div className="col">
                        <h2 className="row">Liste des todos</h2>
                        {/* affiche les todos */}
                        {this.state.todos.map((todo,index)=> (
                            <div className="row" key={todo.id}>
                                <input className="col-1 form-control" type="checkbox" onChange={(e) => {this.changeTodoStatus(todo.id)}} />
                                <div className="col">{todo.task}</div>
                                <button className='col-2 btn btn-danger' onClick={(e) => {this.deleteTodo(todo.id, 'todos')}}>Supprimer</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h2 className="row">Liste des completed todos</h2>
                        {/* affiche les todos */}
                        {this.state.completedTodos.map((todo,index)=> (
                            <div className="row" key={todo.id}>
                                <div className="col">{todo.task}</div>
                                <button className='col-2 btn btn-danger' onClick={(e) => {this.deleteTodo(todo.id, 'completedTodos')}}>Supprimer</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}