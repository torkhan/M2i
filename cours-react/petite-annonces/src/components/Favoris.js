import React, { Component, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { favoris, isLogged } from '../services/DataService';
import Annonces from './Annonces';

// class Favoris extends Component {
//     constructor(props) {
//         super(props);
//         if(!isLogged) {
//             this.props.history.push("/login/favoris")
//         }
//         this.state = { 
//             annonces : favoris
//          }
//     }
//     render() { 
//         return ( 
//         <div className="container">
//             <Annonces annonces={this.state.annonces}></Annonces>
//         </div> 
//         );
//     }
// }

const Favoris = (props) => {
    const [annonces, setAnnonces] = useState(favoris)
    const [firstLoading , setFirstLoading] = useState(false)
    const history = useHistory()
    useEffect(() => {
        if(!isLogged) {
            history.push("/login/favoris")
        }
    }, [firstLoading])
    return (
        <div className="container">
            <Annonces annonces={annonces}></Annonces>
        </div>
    )
}

export default Favoris;