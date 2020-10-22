import React, { Component } from 'react';

class FormulaireTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task : ''
        }
    }

    changeTaskField = (event) => {
        this.setState({
            task : event.target.value
        })
    }

    validClick = () => {
        this.props.addTodo(this.state.task)
        this.setState({
            task : ''
        })
    }

    render() {
        return (
            <div className="row m-1">
                <input type="text" value={this.state.task} onChange={this.changeTaskField} className="col form-control" placeholder="Merci de saisir la task à faire" />
                <button onClick={this.validClick} className="col-2 btn btn-primary">Valider</button>
            </div>
        );
    }
}

export default FormulaireTodo;