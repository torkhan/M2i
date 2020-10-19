import React, { Component } from 'react'

export class Bonjour extends Component {
    constructor(props) {
        super(props)

        this.state =
        {
            bonjours: []

        }

    }
    addBonjour = () => {
        
        this.setState({
            bonjours: [...this.state.bonjours, "bonjour tout le monde"]
        })


    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <button onClick={this.addBonjour}>Dire bonjour</button>

                </div>
                { this.state.bonjours.map( b=> <div>{b}</div>)}
            </div>

        )
    }
}