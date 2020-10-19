import React,{ Component } from "react";

export class Personne extends Component {

    constructor(props){
        super(props)
    }
    render() {
        return(
            <div>
                <div>
                    Nom complet : {this.props.nom} {this.props.prenom}
                </div>
                {(this.props.adresse != undefined) ? <div>
                    Adresse : {this.props.adresse}
                </div> : null}
            </div>
        )
    }
}