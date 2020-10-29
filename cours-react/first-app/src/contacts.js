import React,{Component} from "react";

export class Contact extends Component {

    constructor(props){
        super(props)
    }
    render(){
        return( 
            <div>
               {this.props.email}{this.props.nom}{this.props.prenom}{this.props.telephone}
            </div>
        )
    }
}
