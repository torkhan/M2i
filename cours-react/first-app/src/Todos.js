import React, { Component } from 'react';

export class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            
            task: '',
            indexTodo : 0,
           tpmTask: undefined
        }
       
    }

    changeField = (e) => {
        this.setState({
            task: e.target.value
        })
    }
    confirm = (tmpTask) => {
        let lastIndex = this.state.indexTodo  +1
        let tmpTodo = {task:this.state.task, id : lastIndex}
        let tmpTodos = [tmpTodo, ...this.state.todos]
        if(tmpTask.id != undefined){
            this.state.todo.task = tmpTask.task
        }
        this.setState({
            todos: tmpTodos,
            task: '',
            indexTodo : lastIndex
            
        })
    }
    efffacerTodo = (id) => {
        let tmpTodo = this.state.todos.filter(t => t.id != id)
        this.setState({
            todos: [...tmpTodo]
        })
    }
    modifierTodo = (task, id) =>{
        let tmpTask = this.state.todos.find(t => t.task == task)
        console.log(tmpTask)
        document.querySelector('input[name="task"]').value = tmpTask.task
    }
    render() {
        return (
            <div className="container">
                <h1>TODO LIST</h1>
                <div className="col">
                    <h2>Tasks</h2>
                    <div className="row m-1">

                        <input type="text" value={this.state.task} onChange={this.changeField} placeholder="Votre todo" className="col form-control" name="task" />
                        <button className="col-2 btn btn-primary" onClick={this.confirm}>Valider</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {/* affiche les todos */}
                        <h2>Todos</h2>
                        {this.state.todos.map((todo, index) => (


                            <div className="row" key={index}>
                                <input className="col-1" type="checkbox" data-id={todo.id}></input>
                                <div className="col">{todo.task} </div>
                                <button onClick={(e) => {this.efffacerTodo(todo.id)}} className="col-2 btn btn-danger ml-3">Effacer</button>
                                <button onClick={(e) => {this.modifierTodo( todo.task)}} className="col-2 btn btn-warning ml-3">Modifier</button>


                            </div>

                        ))}
                    </div>
                </div>
            </div>
        );
    }
}