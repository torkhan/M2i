import React, { Component } from 'react';

export class Personnes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personnes : [],
            personne : {
                nom : '',
                prenom : ''
            },
            indexPersonne : 0
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
        let lastIndex = this.state.indexPersonne + 1
        let tmpPersonne = {...this.state.personne, id : lastIndex}
        let tmpPersonnes = [tmpPersonne, ...this.state.personnes]
        this.setState({
            personnes : [...tmpPersonnes],
            personne : {
                nom : '',
                prenom : ''
            },
            indexPersonne : lastIndex
        })
    }
    deletePersonne = (id) => {
        //supprimer la personne avec cet id dans la liste des personnes dans le state et on met à jour le state
        let tmpPersonnes = this.state.personnes.filter(p => p.id != id)
        this.setState({
            personnes : [...tmpPersonnes]
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
                        {this.state.personnes.map((personne, index) => (
                            <div className="row m-1" key={personne.id}>
                                <div className="col">{personne.nom}</div>
                                <div className="col">{personne.prenom}</div>
                                <button className="col btn btn-danger" onClick={(e) => {this.deletePersonne(personne.id)}}>Supprimer</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
         );
    }
}
 