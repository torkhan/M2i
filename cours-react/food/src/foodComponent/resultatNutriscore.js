import React from 'react';




export const ResultatNutriscore = (props) => {

    return (
        <div className="row">
            {props.produit != undefined ?
                (<div className="col-8 m-2"><h1>{props.produit.nom}</h1></div>) : null}

            {props.produit != undefined ?
                (<div className="col-8  m-2"><img className="image" src={props.produit.image}></img></div>) : null}

            {props.produit != undefined ?
                // ingredients
                (<div className="col-8 ingredients m-2"><h2>Listes des ingrédients</h2><div className="fontProps2 pb-3">{props.produit.ingredients} </div></div>) : null}

            {props.produit != undefined ?
                (<div className="col-8 m-2"><div className="row">
                    <div className="col-6 allergens ">
                        {/* allergie */}
                        <h2>Liste des allergènes</h2>
                        <div className="fontProps pb-3">
                        {props.produit.allergens}</div>
                    </div>
                    <div className="col-6">

                        {<img className="imgNutri mt-4" src="./img/c.jpg" alt="mauvaise adresse"></img>}
                    </div>
                </div>
                </div>) : null}
        </div>


    )
}
