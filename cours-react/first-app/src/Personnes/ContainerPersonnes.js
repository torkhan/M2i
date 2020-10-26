import React, { Component } from 'react';
import { FormulairePersonne } from './FormulairePersonne';
import { ListePersonnes } from './ListePersonnes';
import {personnes, indexPersonne, modifierIndexPersonne, isLogged} from "./../services/DataService"
export class ContainerPersonnes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personnes : personnes,
            indexPersonne : indexPersonne
        }
        if(!isLogged) {
            props.history.push('/login')
        }
    }

    ajouter = (personne) => {   
        let lastIndex = this.state.indexPersonne + 1
        let tmpPersonne = {...personne, id : lastIndex}
        let tmpPersonnes = [tmpPersonne, ...this.state.personnes]
        //On ajoute la personne dans le tableau de personnes dans le service dataService
        personnes.push(tmpPersonne)
        modifierIndexPersonne(lastIndex)
        this.setState({
            personnes : [...tmpPersonnes],
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
                {/* <div className="row m-1">
                    <input type="text" value={this.state.personne.nom} name="nom" onChange={this.changeField} className="col-5 form-control" placeholder="Votre nom" />
                    <input type="text"  value={this.state.personne.prenom} name="prenom" onChange={this.changeField} className="col-5 form-control" placeholder="Votre prénom" />
                    <button className="col-2 btn btn-info" onClick={this.ajouter}>Ajouter</button>
                </div> */}
                <FormulairePersonne ajouter={this.ajouter}/>
                <div className="row m-1">    
                    {/* <div className="col">
                        <h1 className="row m-1">Liste des personnes</h1>
                        
                        {this.state.personnes.map((personne, index) => (
                            <div className="row m-1" key={personne.id}>
                                <div className="col">{personne.nom}</div>
                                <div className="col">{personne.prenom}</div>
                                <button className="col btn btn-danger" onClick={(e) => {this.deletePersonne(personne.id)}}>Supprimer</button>
                            </div>
                        ))}
                    </div> */}
                    <ListePersonnes history={this.props.history} personnes={this.state.personnes} deletePersonne={this.deletePersonne}></ListePersonnes>
                </div>
            </div>
         );
    }
}
 