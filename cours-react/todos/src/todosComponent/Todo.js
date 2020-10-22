import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="row m-1">
                {this.props.type == 'todos' 
                    ? (
                        <input type="checkbox" onChange={() => {
                            this.props.changeTodoState(this.props.todo.id)
                        }} className="col-1 form-control" />
                    ) 
                : null}
                <div className="col">
                    {this.props.todo.task}
                </div>
                <button onClick={() => {
                    this.props.deleteTodo(this.props.todo.id, this.props.type)
                    }} className="col-2 btn btn-danger">
                    Supprimer
                </button>
            </div>
         );
    }
}
 
export default Todo;