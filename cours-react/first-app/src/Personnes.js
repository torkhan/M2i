import React, { Component } from 'react';

export class Personnes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personnes : [],
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
        let tmpPersonnes = [this.state.personne, ...this.state.personnes]
        this.setState({
            personnes : [...tmpPersonnes],
            personne : {
                nom : '',
                prenom : ''
            }
        })
    }

    render() { 
        return ( 
            <div className="container">
                {/* Formulaire pour ajouter une personne */}
                <div className="row m-1">
                    <input type="text" value={this.state.personne.nom} name="nom" onChange={this.changeField} className="col-5 form-control" placeholder="Votre nom" />
                    <input type="text"  value={this.state.personne.prenom} name="prenom" onChange={this.changeField} className="col-5 form-control" placeholder="Votre prénom" />
                    <button className="col-2 btn btn-info" onClick={this.ajouter}>Ajouter</button>
                </div>
                <div className="row m-1">
                    <div className="col">
                        <h1 className="row m-1">Liste des personnes</h1>
                        {/* on affiche les personnes ajoutées par le formulaire */}
                        {this.state.personnes.map(personne => (
                            <div className="row m-1"><div className="col">{personne.nom}</div><div className="col">{personne.prenom}</div></div>
                        ))}
                    </div>
                </div>
            </div>
         );
    }
}
 