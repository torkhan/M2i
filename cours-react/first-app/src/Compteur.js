import React, { Component } from "react"


export class Compteur extends Component {
    constructor(props) {
        super(props)
        //Définir le compteur à l'interieur du state
        this.state = {
            compteur : 0
        }
    }

    moin = (e) => {
        //Mettre à jour du state
        this.setState({
            compteur : this.state.compteur - 1
        })   
    }

    plus = (e) => {
        this.setState({
            compteur : this.state.compteur + 1
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.moin}>Moin</button>
                <span>{this.state.compteur}</span>
                <button onClick={this.plus}>Plus</button>
            </div>
        )
    }
}