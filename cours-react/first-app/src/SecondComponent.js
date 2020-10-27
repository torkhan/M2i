import React, { Component } from 'react';
import { ColorContext } from './ColorContext';

class SecondComponent extends Component {

    static contextType = ColorContext
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div style={{color : this.context}}>
            second component<br/>
            {this.context}
        </div> );
    }
}
 
export default SecondComponent;