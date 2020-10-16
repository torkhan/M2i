/**
 * Créer un tableau des produits, chaque produit sous forme de  {titre, prix, description, image}
 */

 let produits = []

 let compteur = 0

 /**
  * Permet de stocker l'identifiant du produit à modifier, si valeur est à undefined, le formulaire ajoutera un produit
  */
 let editProductId = undefined
 
 /**
  * Créer une fonction pour ajouter un produit dans notre tableau de produits
  */
  const ajouterProduit = (titre, prix, description, image) => {
        let produit = {
            titre : titre,
            prix : prix,
            description : description,
            image : image,
            id : ++compteur
        }
        //produits.push(produit)
        produits = [produit, ...produits]
  }

/**
 * Une fonction qui permet de modifier un produit dans le tableau des produits en fonction de l'identifiant stocké
 * la variable editProductId
 */
  const modifierProduit = (titre, prix, description, image) => {
      const produitAEdite = produits.find(p => p.id == editProductId)
      produitAEdite.titre = titre
      produitAEdite.prix = prix
      produitAEdite.image = image
      produitAEdite.description = description
      document.querySelector('.btn-submit').innerText = "Valider"
  }

  /**
   * Fonction qui permet d'afficher la liste des produits 
   */
  const afficherProduits = () => {
      const placeProduits = document.querySelector(".liste-produits .row")
      placeProduits.innerHTML = ""
      for(let produit of produits) {
          placeProduits.innerHTML += `<div class='col-3'>
                <div class='row'>
                    <div class='col'>
                    ${produit.titre}
                    </div>
                </div>
                <div class='row'>
                    <img src='${produit.image}' />
                </div>
                <div class='row'>
                    <div class='col'>
                    ${produit.prix}
                    </div>
                </div>
                <div class='row'>
                    <div class='col'>
                        <button data-id='${produit.id}' class='btn btn-danger btn-delete'>Supprimer</button>
                    </div>
                    <div class='col'>
                        <button data-id='${produit.id}' class='btn btn-info btn-edit'>Modifier</button>
                    </div>
                </div>
          </div>`
      }
  }

 /**
  * Fonction pour vider les champs du formulaire
  */
  const clearForm = () => {
      //on vide les champs titre, image, prix => qui sont des inputs
      const inputFields = document.querySelectorAll('input')
      for(let input of inputFields) {
          input.value = ''
      }
      //on vide la valeur du champ description => qui est un textarea
      document.querySelector("textarea").value = ''
  }


  /**
   * Fonction qui permet d'ecouter le submit du formulaire
   */
 const startForm = () => {
    const form = document.querySelector(".form-produits form")
    form.addEventListener('submit', function(e) {
        e.preventDefault()
        const titre = document.querySelector('input[name="titre"]').value
        const prix = document.querySelector('input[name="prix"]').value
        const image = document.querySelector('input[name="image"]').value
        const description = document.querySelector('textarea[name="description"]').value  
        //Si editProductId est à undefined on ajoute un nouveau produit   
        if(editProductId == undefined) {
            ajouterProduit(titre, prix, description, image)
        }
        //Si editProductId contient l'identifiant d'un produit alors on modifie ce produit
        else {
            modifierProduit(titre, prix, description, image)
            editProductId = undefined
        }
        afficherProduits()
        clearForm()
    })
 }

/**
 * Fonction pour cacher les sections
 */
 const hideSections = () => {
    const sections = document.querySelectorAll('section')
    for(let s of sections) {
        s.style.display = "none"
    }
 }

/**
 * Fonction pour afficher une element en fonction de sa classe css
 */
const displayByClass = (classe) => {
    const element = document.querySelector("."+classe)
    element.style.display = "block"
}

 /**
  * Ecouter click sur le menu
  */

  const nav = document.querySelector(".navbar-nav")
  nav.addEventListener('click', function(e) {
    e.preventDefault()
    if(e.target.localName =="a") {
        const href = e.target.getAttribute('href')
        hideSections()
        displayByClass(href)
    }
  })

  //Fonction pour remplir notre formulaire avec les informations d'un produit

  const remplirForm = (produit) => {
    document.querySelector('input[name="titre"]').value = produit.titre
    document.querySelector('input[name="prix"]').value = produit.prix
    document.querySelector('input[name="image"]').value = produit.image
    document.querySelector('textarea[name="description"]').value = produit.description
    document.querySelector('.btn-submit').innerText = "Modifier"
    editProductId = produit.id
  }

  //Selectionner la grille des produits
  const gridProduits = document.querySelector(".liste-produits .row")


  //Fonction à executer à chaque clique à l'interieur de la grille des produits
  const clickGridProduits = (event) => {
    //Clique sur les boutons pour supprimer des produits
    if(event.target.classList.contains("btn-delete")) {
        //Récuperer l'identifiant du produit dans l'attribut data-id 
        const id = event.target.getAttribute("data-id")
        //supprimer le produit
        produits = produits.filter(p=> p.id!=id)
        //afficherProduits()
        //remonter jusqu'au parent du produit et ensuite supprimer uniquement ce produit du dom
        //event.target.parentNode.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode.parentNode)
        deleteFromDom(event.target, 3)
    }
    //Clique sur le bouton modifier
    else if(event.target.classList.contains("btn-edit")) {
        const id = event.target.getAttribute("data-id")
        const produit = produits.find(p=>p.id == id)
        remplirForm(produit)
        hideSections()
        displayByClass("form-produits")
    }
  }



  //Ecouter un clique à l'interieur de la grille des produits
  gridProduits.addEventListener('click',clickGridProduits)
 startForm()
 hideSections()


 function deleteFromDom(element, level)  {
     let compteur = 1 
     let parent = element.parentNode
     let enfant  = element.parentNode
     do {
        if(compteur < level)
            enfant = enfant.parentNode
        parent = parent.parentNode 
        compteur++    
     }while(compteur != level+1)
     parent.removeChild(enfant)
 }
