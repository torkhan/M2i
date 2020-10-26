import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Annonce extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const annonce = this.props.annonce
        return ( 
            <div className="row m-1 justify-content-center align-items-center">
                <div className="col-3">
                    <img src={annonce.images[0]} />
                </div>
                <div className="col-7">
                    <div className="row m-1">
                        <div className="col">
                            {annonce.titre}
                        </div>
                    </div>
                    <div className="row m-1">
                        <div className="col">
                            {annonce.description.substr(0,50)}
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <Link className="btn btn-primary" to={'/detail/'+annonce.id}>Detail</Link>
                </div>
            </div>
         );
    }
}
 
export default Annonce;