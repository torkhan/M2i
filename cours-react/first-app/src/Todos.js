import React, { Component } from 'react';

export class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos : [],
            completedTodos : [],
            task : '',
            compteurTodoId : 0
         }
    }

    changeField = (e) => {
        this.setState({
            task : e.target.value
        })
    }
    confirm = () => {
        let id = this.state.compteurTodoId + 1
        let todo = {
            id : id,
            task : this.state.task
        }
        let tmpTodos = [todo,...this.state.todos]
        this.setState({
            todos : tmpTodos,
            task : '',
            compteurTodoId : id
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
                <div className="row m-1">
                    <input type="text" value={this.state.task} onChange={this.changeField} placeholder="Votre todo" className="col form-control" />
                    <button className="col-2 btn btn-primary" onClick={this.confirm}>Valider</button>
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