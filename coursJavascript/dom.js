//window.alert("Bonjour tout le monde")
//manipulation du dom en javascript
//objet => document
//slectionner des doms 
//la méthode querySelector et querySelectorAll

const objetH1 = document.querySelector("h1")
objetH1.innerText = "Un titre h1 ajouté en javascript"
//Ajouter 5 boutons dans une div avec class row
const row = document.querySelector(".container .row")
for(let i=1; i <= 5; i++) {
    row.innerHTML+="<div class='btn col btn-info'>Bouton N°"+i+"</div>"
}

//Selectionner la totalité des boutons
const boutons = document.querySelectorAll(".btn")
for(let b of boutons) {
    b.innerHTML +=" new information"
}