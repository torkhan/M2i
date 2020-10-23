import React, { Component } from 'react';

export class Personne extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="row m-1">
                    <div className="col">{this.props.personne.nom}</div>
                    <div className="col">{this.props.personne.prenom}</div>
                    <button className="col btn btn-info" onClick={() => {
                        this.props.history.push('/pendu/'+this.props.personne.id)
                    }}>Jouer pendu</button>
                    <button className="col btn btn-danger" onClick={(e) => {this.props.deletePersonne(this.props.personne.id)}}>Supprimer</button>
            </div>
         );
    }
}
 