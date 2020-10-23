import React, { Component } from 'react';
import { Personne } from './Personne';

export class ListePersonnes extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return(
        <div className="col">
            <h1 className="row m-1">Liste des personnes</h1>
            {/* on affiche les personnes ajoutées par le formulaire */}
            {this.props.personnes.map((personne, index) => (
                <Personne history={this.props.history} deletePersonne={this.props.deletePersonne} personne={personne} key={index}></Personne>
            ))}
        </div>
        );
    }
}
 