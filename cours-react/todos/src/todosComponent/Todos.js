import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        return (
        <div className="row">
            <div className="col">
                <div className="row">
                    <h1 className="col">Liste des todos</h1>
                </div>
                {this.props.todos.map((t,index) => (
                    <Todo changeTodoState={this.props.changeTodoState} type='todos' deleteTodo={this.props.deleteTodo} todo={t} key={t.id}></Todo>
                ))}
            </div>
        </div>
        );
    }
}
 
export default Todos;