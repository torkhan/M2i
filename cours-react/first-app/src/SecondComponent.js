import React, { Component, useEffect, useState, useContext } from 'react';
import { ColorContext } from './ColorContext';

// class SecondComponent extends Component {

//     static contextType = ColorContext
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return ( <div style={{color : this.context}}>
//             second component<br/>
//             {this.context}
//         </div> );
//     }
// }

const SecondComponent = (props) => {
    const [nom, setNom] = useState('')
    const [firstLoading, setFirstLoading] = useState(true)
    const valueContext = useContext(ColorContext)
    useEffect(()=> {
        console.log("test use effect didmount")
        //Si on modifie le state dans l'useEffect => erreur cyclique
        // setNom("test")
        // return () => {
        //     console.log("used on unmount component")
        // }
    }, [firstLoading])

    useEffect(()=> {
        console.log("any component update")
    })
    return(
        <div style={{color : valueContext}}>
            <div><input type="text" onChange={(e) => {
                setNom(e.target.value)
                // setLoading(!loading)
            }} /></div>
            second component {props.test}<br/>
            Nom : {nom}
        </div>
    )
}
 
export default SecondComponent;