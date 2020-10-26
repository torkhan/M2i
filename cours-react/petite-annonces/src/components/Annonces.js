import React, { Component } from 'react';
import Annonce from './Annonce';

class Annonces extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                {this.props.annonces.map(annonce=>(
                    <Annonce key={annonce.id} annonce={annonce}></Annonce>
                ))}
            </div>
         );
    }
}
 
export default Annonces;