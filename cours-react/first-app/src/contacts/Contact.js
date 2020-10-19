import React, { Component } from "react"

export class Contact extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="row">
                <div className="col">
                    {this.props.nom}
                </div>
                <div className="col">
                    {this.props.prenom}
                </div>
                <div className="col">
                    {this.props.email}
                </div>
                <div className="col">
                    {this.props.telephone}
                </div>
            </div>
        )
    }
}