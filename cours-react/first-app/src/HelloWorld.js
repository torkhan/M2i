import React, {Component} from 'react';

export class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            bonjours: []
        }
    }

    ajouter = () => {
        this.setState({
            bonjours : [...this.state.bonjours, "bonjour tout le monde"]
        })
    }

    supprimer = () => {
        let newTabBonjour = [...this.state.bonjours]
        newTabBonjour.splice(newTabBonjour.length-1,1)
        this.setState({
            bonjours : newTabBonjour
        })
    }
    render() { 
        return (
            <div>
                <div>
                    <button onClick={this.ajouter}>Ajouter</button>
                    <button onClick={this.supprimer}>Supprimer</button>
                </div>
                {this.state.bonjours.map((b,index)=>(
                    <div>{b} : {index}</div>
                ))}
            </div>
        );
    }
}
 