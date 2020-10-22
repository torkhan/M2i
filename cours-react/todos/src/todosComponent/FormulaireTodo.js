import React, { Component } from 'react';
export class FormulaireTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            task: ''
         }
    }

    render() { 
        return ( 
            <div>
                <input className="col form-control" placeholder="Entrez votre task"></input>
            </div>
         );
    }
}
 
