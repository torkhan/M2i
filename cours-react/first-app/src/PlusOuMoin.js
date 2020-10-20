import React, { Component } from 'react';

export class PlusOuMoin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            randomNumber : Math.floor(Math.random()*100),
            number : undefined,
            message : undefined  
         }
    }
    changeNumber = (e) => {
        let newMessage 
        if(e.target.value != '') {
            if(parseInt(e.target.value) > this.state.randomNumber) {
                newMessage = "Plus petit"
            }
            else if(parseInt(e.target.value) < this.state.randomNumber) {
                newMessage = "Plus grand"
            }
            else {
                newMessage = "Bravo vous avez gagné"
            }
            this.setState({
                message : newMessage,
                number : parseInt(e.target.value)
            })
        }
        
    }

    start =() => {
        this.setState({
            randomNumber : Math.floor(Math.random()*100),
            number : undefined,
            message : undefined
        })
    }
    victory = () => {
        if(this.state.message != undefined) {
            return(
                <div className="col">{this.state.message}</div>
            )
        }
    }
    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    <input type="number" onChange={this.changeNumber} placeholder="Merci d'indiquer un nombre entre 0 et 100" className="col from-control" />
                </div>
                <div className="row">
                    <button onClick={this.start} className="col btn btn-info">start</button>
                </div>
                <div className="container">
        {/* {this.state.message != undefined ? (<div className="col">{this.state.message}</div>) : null} */}
        {this.victory()}
                </div>
            </div>
         );
    }
}
 
