
// const gestProduits = {
//     produits : [],
//     compteur : 0,
//     editProductId : undefined,
//     ajouterProduit : function(titre, prix,description, image) {
//         let produit = {
//             titre : titre,
//             prix : prix,
//             description : description,
//             image : image,
//             id : ++this.compteur
//         }
//         //produits.push(produit)
//         this.produits = [produit, ...this.produits]
//     },
//     modifierProduit : function(titre, prix, description, image) {
//         const produitAEdite = this.produits.find(p => p.id == this.editProductId)
//         produitAEdite.titre = titre
//         produitAEdite.prix = prix
//         produitAEdite.image = image
//         produitAEdite.description = description
//         document.querySelector('.btn-submit').innerText = "Valider"
//     },
//     afficherProduits : function() {
//         const placeProduits = document.querySelector(".liste-produits .row")
//         placeProduits.innerHTML = ""
//         for(let produit of this.produits) {
//           placeProduits.innerHTML += `<div class='col-3'>
//                 <div class='row'>
//                     <div class='col'>
//                     ${produit.titre}
//                     </div>
//                 </div>
//                 <div class='row'>
//                     <img src='${produit.image}' />
//                 </div>
//                 <div class='row'>
//                     <div class='col'>
//                     ${produit.prix}
//                     </div>
//                 </div>
//                 <div class='row'>
//                     <div class='col'>
//                         <button data-id='${produit.id}' class='btn btn-danger btn-delete'>Supprimer</button>
//                     </div>
//                     <div class='col'>
//                         <button data-id='${produit.id}' class='btn btn-info btn-edit'>Modifier</button>
//                     </div>
//                 </div>
//           </div>`
//       }
//     },
//     clearForm : function() {
//         const inputFields = document.querySelectorAll('input')
//         for(let input of inputFields) {
//             input.value = ''
//         }
//         //on vide la valeur du champ description => qui est un textarea
//         document.querySelector("textarea").value = ''
//     },
//     startForm : function() {
//         const form = document.querySelector(".form-produits form")
//         form.addEventListener('submit', (e) => {
//             e.preventDefault()
//             const titre = document.querySelector('input[name="titre"]').value
//             const prix = document.querySelector('input[name="prix"]').value
//             const image = document.querySelector('input[name="image"]').value
//             const description = document.querySelector('textarea[name="description"]').value  
//             //Si editProductId est à undefined on ajoute un nouveau produit   
//             if(this.editProductId == undefined) {
//                 this.ajouterProduit(titre, prix, description, image)
//             }
//             //Si editProductId contient l'identifiant d'un produit alors on modifie ce produit
//             else {
//                 this.modifierProduit(titre, prix, description, image)
//                 this.editProductId = undefined
//             }
//             this.afficherProduits()
//             this.clearForm()
//         }) 
//     },
//     hideSections : function() {
//         const sections = document.querySelectorAll('section')
//         for(let s of sections) {
//             s.style.display = "none"
//         }
//     },
//     displayByClass : function (classe) {
//         const element = document.querySelector("."+classe)
//         element.style.display = "block"
//     },
//     remplirForm : function(produit) {
//         document.querySelector('input[name="titre"]').value = produit.titre
//         document.querySelector('input[name="prix"]').value = produit.prix
//         document.querySelector('input[name="image"]').value = produit.image
//         document.querySelector('textarea[name="description"]').value = produit.description
//         document.querySelector('.btn-submit').innerText = "Modifier"
//         this.editProductId = produit.id
//     },
//     clickGridProduits : function(event) {
//         if(event.target.classList.contains("btn-delete")) {
//             //Récuperer l'identifiant du produit dans l'attribut data-id 
//             const id = event.target.getAttribute("data-id")
//             //supprimer le produit
//             this.produits = this.produits.filter(p=> p.id!=id)
//             //afficherProduits()
//             //remonter jusqu'au parent du produit et ensuite supprimer uniquement ce produit du dom
//             //event.target.parentNode.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode.parentNode)
//             this.deleteFromDom(event.target, 3)
//         }
//         //Clique sur le bouton modifier
//         else if(event.target.classList.contains("btn-edit")) {
//             const id = event.target.getAttribute("data-id")
//             const produit = this.produits.find(p=>p.id == id)
//             this.remplirForm(produit)
//             this.hideSections()
//             this.displayByClass("form-produits")
//         }
//     },
//     deleteFromDom : function(element, level) {
//         let compteur = 1 
//         let parent = element.parentNode
//         let enfant  = element.parentNode
//         do {
//             if(compteur < level)
//                 enfant = enfant.parentNode
//             parent = parent.parentNode 
//             compteur++    
//         }while(compteur != level+1)
//         parent.removeChild(enfant)
//     },

//     start : function() {
//         const nav = document.querySelector(".navbar-nav")
//         nav.addEventListener('click', (e) => {
//         e.preventDefault()
//             if(e.target.localName =="a") {
//                 const href = e.target.getAttribute('href')
//                 this.hideSections()
//                 this.displayByClass(href)
//             }
//         })
//         const gridProduits = document.querySelector(".liste-produits .row")
//         gridProduits.addEventListener('click',(e) => {this.clickGridProduits(e)})
//         this.startForm()
//         this.hideSections()
//     }
// }


class GestProduits {
    constructor() {
        this.produits  = [],
        this.compteur = 0,
        this.editProductId = undefined
    }

    ajouterProduit(titre, prix,description, image) {
        let produit = {
            titre : titre,
            prix : prix,
            description : description,
            image : image,
            id : ++this.compteur
        }
        //produits.push(produit)
        this.produits = [produit, ...this.produits]
    }
    modifierProduit(titre, prix, description, image) {
        const produitAEdite = this.produits.find(p => p.id == this.editProductId)
        produitAEdite.titre = titre
        produitAEdite.prix = prix
        produitAEdite.image = image
        produitAEdite.description = description
        document.querySelector('.btn-submit').innerText = "Valider"
    }
    afficherProduits() {
        const placeProduits = document.querySelector(".liste-produits .row")
        placeProduits.innerHTML = ""
        for(let produit of this.produits) {
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
    clearForm() {
        const inputFields = document.querySelectorAll('input')
        for(let input of inputFields) {
            input.value = ''
        }
        //on vide la valeur du champ description => qui est un textarea
        document.querySelector("textarea").value = ''
    }
    startForm() {
        const form = document.querySelector(".form-produits form")
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const titre = document.querySelector('input[name="titre"]').value
            const prix = document.querySelector('input[name="prix"]').value
            const image = document.querySelector('input[name="image"]').value
            const description = document.querySelector('textarea[name="description"]').value  
            //Si editProductId est à undefined on ajoute un nouveau produit   
            if(this.editProductId == undefined) {
                this.ajouterProduit(titre, prix, description, image)
            }
            //Si editProductId contient l'identifiant d'un produit alors on modifie ce produit
            else {
                this.modifierProduit(titre, prix, description, image)
                this.editProductId = undefined
            }
            this.afficherProduits()
            this.clearForm()
        }) 
    }
    hideSections() {
        const sections = document.querySelectorAll('section')
        for(let s of sections) {
            s.style.display = "none"
        }
    }
    displayByClass(classe) {
        const element = document.querySelector("."+classe)
        element.style.display = "block"
    }
    remplirForm(produit) {
        document.querySelector('input[name="titre"]').value = produit.titre
        document.querySelector('input[name="prix"]').value = produit.prix
        document.querySelector('input[name="image"]').value = produit.image
        document.querySelector('textarea[name="description"]').value = produit.description
        document.querySelector('.btn-submit').innerText = "Modifier"
        this.editProductId = produit.id
    }
    clickGridProduits(event) {
        if(event.target.classList.contains("btn-delete")) {
            //Récuperer l'identifiant du produit dans l'attribut data-id 
            const id = event.target.getAttribute("data-id")
            //supprimer le produit
            this.produits = this.produits.filter(p=> p.id!=id)
            //afficherProduits()
            //remonter jusqu'au parent du produit et ensuite supprimer uniquement ce produit du dom
            //event.target.parentNode.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode.parentNode)
            this.deleteFromDom(event.target, 3)
        }
        //Clique sur le bouton modifier
        else if(event.target.classList.contains("btn-edit")) {
            const id = event.target.getAttribute("data-id")
            const produit = this.produits.find(p=>p.id == id)
            this.remplirForm(produit)
            this.hideSections()
            this.displayByClass("form-produits")
        }
    }
    deleteFromDom(element, level) {
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

    start() {
        const nav = document.querySelector(".navbar-nav")
        nav.addEventListener('click', (e) => {
        e.preventDefault()
            if(e.target.localName =="a") {
                const href = e.target.getAttribute('href')
                this.hideSections()
                this.displayByClass(href)
            }
        })
        const gridProduits = document.querySelector(".liste-produits .row")
        gridProduits.addEventListener('click',(e) => {this.clickGridProduits(e)})
        this.startForm()
        this.hideSections()
    }
}

const gestionProduits = new GestProduits()

gestionProduits.start()