import React  from 'react';


 export const ResultatNutriscore = (props) => {
     return (
         <div className="row">
             {props.produit != undefined ?
             (<div className="col-8">{props.produit.product_name}</div>)
            
            : null
            }
         </div>
     )
 }
