import React, {Component} from "react"
import {Personne} from "./Personne"
//Création d'un component en utilisant une classe qui hérite de la classe component de React
export class Home extends Component {
    
    constructor() {
        //On rappelle le constructeur du parent
        super()
        this.personnes = [
            {nom : 'abadi', prenom : 'ihab'},
            {nom : 'tata', prenom : 'toto'},
            {nom : 'titi', prenom : 'minet'},
            {nom : 'sdfsd', prenom : 'sdf'},
        ]
    }
    //La qui represente le rendu de notre component
    render() {
        return(
            //jsx
            <div>
                <h1>Bonjour</h1>
                {/* <Personne nom="abadi" prenom="ihab" adresse="tourcoing" />
                <Personne nom="toto" prenom="tata" />
                <Personne nom="titi" prenom="minet" adresse="warner" /> */}
                {this.personnes.map((element) => (<Personne nom={element.nom} prenom={element.prenom} />))}
            </div>
        )
    }
}