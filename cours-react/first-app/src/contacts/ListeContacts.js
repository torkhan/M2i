import React, { Component } from "react"
import { Contact } from "./Contact"

export class ListeContacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts : [
                {nom : "n contact 1", prenom : 'p contact 1', telephone : '01010101010', email : 'a@p.fr'},
                {nom : "n contact 1", prenom : 'p contact 1', telephone : '01010101010', email : 'a@p.fr'},
                {nom : "n contact 1", prenom : 'p contact 1', telephone : '01010101010', email : 'a@p.fr'},
                {nom : "n contact 1", prenom : 'p contact 1', telephone : '01010101010', email : 'a@p.fr'},
            ]
        }
    }

    addContact = () => {
        const contact = {nom : "n contact 1", prenom : 'p contact 1', telephone : '01010101010', email : 'a@p.fr'}
        this.setState({
            contacts : [...this.state.contacts, contact]
        })
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <button onClick={this.addContact}>Ajouter contact</button>
                </div>
                {this.state.contacts.map((contact)=>(<Contact nom={contact.nom} prenom={contact.prenom} telephone={contact.telephone} email={contact.email} />))}
            </div>
        )
    }
}