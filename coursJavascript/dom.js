//window.alert("Bonjour tout le monde")
//manipulation du dom en javascript
//objet => document
//slectionner des doms 
//la méthode querySelector et querySelectorAll

 const objetH1 = document.querySelector("h1")
// objetH1.innerText = "Un titre h1 ajouté en javascript"
// //Ajouter 5 boutons dans une div avec class row
// const row = document.querySelector(".container .row")
// for(let i=1; i <= 5; i++) {
//     row.innerHTML+="<div class='btn col btn-info'>Bouton N°"+i+"</div>"
// }

// //Selectionner la totalité des boutons
// const boutons = document.querySelectorAll(".btn")
// for(let b of boutons) {
//     b.innerHTML +=" new information"
// }

//Slectionner un element 
const lien = document.querySelector("#link")
//On récupère la valeur de l'attribut href
let href = lien.getAttribute("href")
//On modifie la valeur de l'attribut href
lien.setAttribute("href", "http://amazon.fr")

//Récuperer les class css du lien
//alert(lien.getAttribute("class"))
console.log(lien.classList)
//supprimer une classe des classes du noeux dom (on supprime la class à l'index 0)
lien.classList.remove(lien.classList[0])
console.log(lien.classList)
//ajouter une classe au noeux dom
lien.classList.add('class4', 'class5')
console.log(lien.classList)

//Ecouter un evenement
objetH1.addEventListener('click', fonctionClick)
//objetH1.onclick = fonctionClick

//Ecouter l'événement click sur chaque bouton
// const boutons = document.querySelectorAll("button")
// boutons.forEach(b => {
//     b.addEventListener('click', fonctionClick)
// })
//<=>
const divButtons = document.querySelector(".container-button")
divButtons.addEventListener('click', fonctionClick)
divButtons.addEventListener('dblclick', fonctionClick)

function fonctionClick(event)
{
    if(event.target.localName == "button") {
    //pour acceder à l'element qui démarre l'event => on utilise la propriété target du paramètre passé à la méthode
    console.log(event.target.localName)
    if(event.type == "click") {
        console.log(event.target.innerText)
    }
    else if(event.type == "dblclick") {
        alert(event.target.innerText)        
    }
    }
    
}

console.log(isNaN("15"))