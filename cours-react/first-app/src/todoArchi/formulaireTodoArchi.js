import React, { Component } from 'react';

export class FormulaireTodoArchi extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    changeField = (e) => {
        this.setState({
            task: e.target.value
        })
    }
    confirm = () => {
        this.props.confirm(this.state.task)
        this.setState({
            task: ''
        })
    }
    render() {
        return (
            <div className="row m-1">

                <input type="text" value={this.state.task} onChange={this.changeField} placeholder="Votre todo" className="col form-control" name="task" />
                <button className="col-2 btn btn-primary" onClick={this.confirm}>Valider</button>
            </div>
        )
    }
}