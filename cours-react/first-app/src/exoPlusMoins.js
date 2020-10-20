import React, {Component} from "react"

export class PlusMoins extends Component{
    constructor(props){
        super(props)
        this.state = {
            choix: 0
        }
    }

    getNumber = () =>{
        let random = Math.floor((Math.random()*100) / 2)
    }

    testChoix = (e) => {
        let choix = {...this.state}
        choix[e.target.getAttribute("name")] = parseInt(e.target.value )
            this.setState({
                ...choix
            })

        
        console.log(choix)
    }
   

    render(){
        return(
            <div className="container ">
                <div className="row ">
                    <h2 className="text-center">Entrez un chiffre entre 0 et 50</h2>
                </div>
                <div className="row">
                    <input type="number" placeholder="Entrez votre chiffre" name="choix" onChange={this.testChoix}></input>
                </div>

            </div>
        )
    }
}
