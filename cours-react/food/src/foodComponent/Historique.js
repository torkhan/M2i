import React, { Component, useContext } from 'react';
import { isLogged } from '../services/DataService';
import ListeProduits from './ListeProduits'
import { ProduitsContext } from '../Tools/ProduitsContext'

// class Historique extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             listeProduit : []
//         }
//         //    if(!isLogged) {
//         //     props.history.push('/login')
//         // }
//     }

//     render() { 
//         const contextHisto = useContext(ProduitsContext)
//         return (  
//             <div>
//                {contextHisto}

//             </div>
//         );
//     }
// }
const Historique = (props) => {
    const contextHisto = useContext(ProduitsContext)
    return (
        <div>sdlgkjhdfogiudgoid
            {contextHisto}

        </div>
    )
}

export default Historique;