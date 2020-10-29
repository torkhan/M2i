import React, { Component } from "react"
import {Contact} from "./contacts"

export class ListeContact extends Component {
    constructor(props) {
        super(props)
        this.listContacts = [
            { email: 'accordeon@free.fr  ', nom: 'Horner', prenom: 'Yvette', telephone: '0606060605' },
            { email: 'chocolat@alpes.fr', nom: 'Milka', prenom: 'Vache', telephone: '0327958545' },
        ]
    }

    render() {
        return (
            <div>
                
                {this.listContacts.map((contact) => (<Contact mail={contact.email} nom = {contact.nom} prenom = {contact.prenom} telephone ={contact.telephone}/> ))}
            </div>
        )
    }
}