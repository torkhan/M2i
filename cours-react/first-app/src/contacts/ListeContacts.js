import React, { Component } from "react"
import { Contact } from "./Contact"

export class ListeContacts extends Component {
    constructor(props) {
        super(props)
        this.contacts = [
            {nom : "n contact 1", prenom : 'p contact 1', telephone : '01010101010', email : 'a@p.fr'},
            {nom : "n contact 1", prenom : 'p contact 1', telephone : '01010101010', email : 'a@p.fr'},
            {nom : "n contact 1", prenom : 'p contact 1', telephone : '01010101010', email : 'a@p.fr'},
            {nom : "n contact 1", prenom : 'p contact 1', telephone : '01010101010', email : 'a@p.fr'},
        ]
    }

    render() {
        return(
            <div className="container">
                {this.contacts.map((contact)=>(<Contact nom={contact.nom} prenom={contact.prenom} telephone={contact.telephone} email={contact.email} />))}
            </div>
        )
    }
}