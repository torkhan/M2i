import React, {Component} from "react"
import {Personne} from "./Personne"
//Création d'un component en utilisant une classe qui hérite de la classe component de React
export class Home extends Component {
    
    constructor() {
        //On rappelle le constructeur du parent
        super()
    }
    //La qui represente le rendu de notre component
    render() {
        return(
            //jsx
            <div>
                <h1>Bonjour</h1>
                <Personne />
            </div>
        )
    }
}