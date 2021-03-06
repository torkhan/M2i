import React, { Component } from 'react';
import Annonce from './Annonce';

// class Annonces extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }

const Annonces = (props) => {

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return this.state != nextState || this.props != nextProps
    // }
    // render() { 
    return (
        <div className="container">
            {props.annonces.map(annonce => (
                <Annonce key={annonce.id} annonce={annonce}></Annonce>
            ))}
        </div>
    );
    // }
}

export default Annonces;