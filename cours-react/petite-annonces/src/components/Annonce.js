<<<<<<< HEAD
import React, { Component, useContext, useState } from 'react';
=======
import React, { Component, useContext } from 'react';
>>>>>>> master
import { Link } from 'react-router-dom';
import { annonces } from '../services/DataService';
import { ThemeContext } from '../Tools/ThemeContext';

// class Annonce extends Component {

//     static contextType = ThemeContext
//     constructor(props) {
//         super(props);
<<<<<<< HEAD
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
=======
//         this.state = {}
//     }
//     shouldComponentUpdate(nextProps, nextState, nextContext) {
//         return this.state != nextState || this.props != nextProps
//     }
//     render() {
//         const annonce = this.props.annonce
//         return (
//             <div style={{ color: this.context.color, backgroundColor: this.context.bgColor }} className="row m-1 justify-content-center align-items-center">
//                 <div className="col-3">
//                     <img src={annonce.images[0]} />
//                 </div>
//                 <div className="col-7">
//                     <div className="row m-1">
//                         <div className="col">
//                             {annonce.titre}
//                         </div>
//                     </div>
//                     <div className="row m-1">
//                         <div className="col">
//                             {annonce.description.substr(0, 50)}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-2">
//                     <Link className="btn btn-primary" to={'/detail/' + annonce.id}>Detail</Link>
//                 </div>
//             </div>
//         );
//     }
// }


const Annonce = (props) => {
    const annonce = props.annonce
    const valueContext = useContext(ThemeContext)
    return (
        <div style={{ color: valueContext.color, backgroundColor: valueContext.bgColor }} className="row m-1 justify-content-center align-items-center">
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
                        {annonce.description.substr(0, 50)}
                    </div>
                </div>
            </div>
            <div className="col-2">
                <Link className="btn btn-primary" to={'/detail/' + annonce.id}>Detail</Link>
            </div>
        </div>
    )
>>>>>>> master
}
export default Annonce;