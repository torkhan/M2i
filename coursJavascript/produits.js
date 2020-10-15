/**
 * Créer un tableau des produits, chaque produit sous forme de  {titre, prix, description, image}
 */

 let produits = []

 
 /**
  * Créer une fonction pour ajouter un produit dans notre tableau de produits
  */
  const ajouterProduit = (titre, prix, description, image) => {
        let produit = {
            titre : titre,
            prix : prix,
            description : description,
            image : image
        }
        //produits.push(produit)
        produits = [produit, ...produits]
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
        ajouterProduit(titre, prix, description, image)
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
    const href = e.target.getAttribute('href')
    hideSections()
    displayByClass(href)
  })
 startForm()