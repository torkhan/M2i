import React, { Component } from 'react';
export class AnnonceSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            {this.props.tmpAnnonce}
        </div> );
    }
}
 
