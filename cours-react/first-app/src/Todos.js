import React, { Component } from 'react';

export class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos : [],
            task : ''
         }
    }

    changeField = (e) => {
        this.setState({
            task : e.target.value
        })
    }
    confirm = () => {
        let tmpTodos = [this.state.task,...this.state.todos]
        this.setState({
            todos : tmpTodos,
            task : ''
        })
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
                        {/* affiche les todos */}
                        {this.state.todos.map((todo,index)=> (
                            <div className="row" key={index}><div className="col">{todo}</div></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}