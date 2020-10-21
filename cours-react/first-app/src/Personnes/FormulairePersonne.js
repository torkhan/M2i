import React, { Component } from 'react';

export class FormulairePersonne extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            personne : {
                nom : '',
                prenom : ''
            }
         }
    }

    changeField = (e) => {
        let tmpPersonne = {...this.state.personne}
        tmpPersonne[e.target.getAttribute('name')] = e.target.value
        this.setState({
            personne : {...tmpPersonne}
        })
    }

    ajouter = () => {
        this.props.ajouter(this.state.personne)
        this.setState({
            personne : {
                nom : '',
                prenom : ''
            }
        })
    }
    render() { 
        return ( 
            <div className="row m-1">
                <input type="text" value={this.state.personne.nom} name="nom" onChange={this.changeField} className="col-5 form-control" placeholder="Votre nom" />
                <input type="text"  value={this.state.personne.prenom} name="prenom" onChange={this.changeField} className="col-5 form-control" placeholder="Votre prénom" />
                <button className="col-2 btn btn-info" onClick={this.ajouter}>Ajouter</button>
            </div>
         );
    }
}
 