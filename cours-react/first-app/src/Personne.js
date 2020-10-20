import React,{ Component } from "react";

export class Personne extends Component {

    constructor(props){
        super(props)
        this.state = {
            nom : props.nom,
            prenom : props.prenom,
            adresse : props.adresse
        }
    }

    // changeNom = (e) => {
    //     //alert(e.target.value)
    //     this.setState({
    //         nom : e.target.value
    //     })
    // }

    // changePrenom = (e) => {
    //     //alert(e.target.value)
    //     this.setState({
    //         prenom : e.target.value
    //     })
    // }

    changeField = (e) => {
        let tmpState = {...this.state}
        tmpState[e.target.getAttribute("name")] = e.target.value
        this.setState({
            ...tmpState
        })
    }
    render() {
        return(
            <div className="container">
                <div className="row">
                    <input type="text" defaultValue={this.state.nom} name="nom" onChange={this.changeField} className="col form-control" placeholder="votre nom" />
                </div>
                <div className="row">
                    <input type="text"  defaultValue={this.state.prenom} name="prenom" onChange={this.changeField} className="col form-control" placeholder="votre prénom" />
                </div>
                <div className="row">
                    <input type="text"  defaultValue={this.state.adresse} name="adresse" onChange={this.changeField} className="col form-control" placeholder="votre adresse" />
                </div>
                <div className="row">
                    <div className="col">
                        {/* ici on affiche le nom */}
                        {this.state.nom}
                    </div>
                    <div className="col">
                        {/* ici on affiche le prénom */}
                        {this.state.prenom}
                    </div>
                    <div className="col">
                        {/* ici on affiche l'adresse */}
                        {this.state.adresse}
                    </div>
                </div>
            </div>
        )
    }
}