import React, { Component } from 'react';

export class Todos extends Component {
    constructor(props) {
        super(props);
<<<<<<< HEAD
        this.state = {
            todos: [],
            
            task: '',
            indexTodo : 0,
           tpmTask: undefined
        }
       
=======
        this.state = { 
            todos : [],
            completedTodos : [],
            task : '',
            compteurTodoId : 0
         }
>>>>>>> d534cc6fea403268b4d83b4a1ddd7430128be671
    }

    changeField = (e) => {
        this.setState({
            task: e.target.value
        })
    }
<<<<<<< HEAD
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
=======
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
>>>>>>> d534cc6fea403268b4d83b4a1ddd7430128be671
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
                        <h2 className="row">Liste des todos</h2>
                        {/* affiche les todos */}
<<<<<<< HEAD
                        <h2>Todos</h2>
                        {this.state.todos.map((todo, index) => (


                            <div className="row" key={index}>
                                <input className="col-1" type="checkbox" data-id={todo.id}></input>
                                <div className="col">{todo.task} </div>
                                <button onClick={(e) => {this.efffacerTodo(todo.id)}} className="col-2 btn btn-danger ml-3">Effacer</button>
                                <button onClick={(e) => {this.modifierTodo( todo.task)}} className="col-2 btn btn-warning ml-3">Modifier</button>


                            </div>

=======
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
>>>>>>> d534cc6fea403268b4d83b4a1ddd7430128be671
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}