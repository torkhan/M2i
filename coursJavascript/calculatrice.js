const tab = ['C', '+/-', '%', '/', '7', '8', '9', 'X' , '4', '5', '6', '-', '1', '2', '3', '+', '0',',', '=']
const div = document.querySelector(".calculatrice-container")
//Html de la calculatrice
let rendu = ""
rendu += "<div class='row'><div class='col ecran'>0</div></div>"
let ligne = "<div class='row'>"
let k = 0
for(let i=0; i < tab.length; i++) {
    //Créer une chaine de caractère avec les classes Css en fonction de la valeur du bouton
    let classCss = (tab[i] === '0') ? "col-6 btn " : 'col-3 btn ' 
    //Ajouter à notre classe css gris ou orange en fonction si le bouton est à la fin de la ligne ou non
    classCss += ((k+1)%4 == 0) ? 'orange' : 'gris'
    //Construire la ligne à ajouter dans notre rendu
    ligne += "<button class='"+classCss+"'>"+tab[i]+"</button>"
    if((k+1)%4 == 0) {
        //Si on arrive à la fin de la ligne, on ferme la ligne, on l'ajoute au rendu et on commence une nouvelle ligne
        ligne +="</div>"
        rendu += ligne;
        ligne = "<div class='row'>"
    }
    //k une variable qui augmente avec i
    k++
    if(tab[i] == '0') {
        //k est incrementée une fois de plus car le bouton 0 prend deux case
        k++
    }
}
div.innerHTML = rendu

//Ecouter l'evenement click

div.addEventListener('click',clickBouton)

function clickBouton(e) {
    //Slectionner l'ecran par la class  ecran
    const ecran = document.querySelector(".ecran")
    //type de l'evenement est accessible dans  par l'attribut type du paramètre (e)
    //Element déclencheur de l'event est accessible par l'attribut target du paramètre (e)
    //Accéder au type du déclencheur de l'event par l'attribut localName du target
    if(e.target.localName == "button") {
        ecran.innerText = e.target.innerText
    }
    
}