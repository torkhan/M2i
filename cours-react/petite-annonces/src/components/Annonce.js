import React, { Component, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { annonces } from '../services/DataService';
import { ThemeContext } from '../Tools/ThemeContext';

// class Annonce extends Component {

//     static contextType = ThemeContext
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
    const Annonce = (props) => {
       
       
       
        const valueContext = useContext(ThemeContext)

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return this.state != nextState || this.props != nextProps
    // }
    // render() { 
        // const annonce = this.props.annonce
        return ( 
            <div style={{color : valueContext.color, backgroundColor : valueContext.bgColor}} className="row m-1 justify-content-center align-items-center">
                <div className="col-3">
                    <img src={props.annonce.images[0]} />
                </div>
                <div className="col-6">
                    <div className="row m-1">
                        <div className="col">
                            {props.annonce.titre}
                        </div>
                    </div>
                    <div className="row m-1">
                        <div className="col">
                            {props.annonce.description.substr(0,50)}
                        </div>
                    </div>
                </div>
                <div className="col-1">
                    {props.annonce.prix}

                </div>
                <div className="col-2">
                    <Link className="btn btn-primary" to={'/detail/'+props.annonce.id}>Detail</Link>
                </div>
            </div>
         );
    // }
}
 
export default Annonce;