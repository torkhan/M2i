// const data = {
//     google : "contenu de la page google",
//     facebook : "contenu de la page facebook"
// }

const data = [
    {
        titre : "",
        prix : "",
        image : ""
    },
    {

    }
]

const content = document.querySelector(".content")
const link = document.querySelector(".nav")

for(let key in data) {
    link.innerHTML+= `<a href='${key}'>${key}</a>`
}

//Click sur les liens du menu
link.addEventListener('click', function(e) {
    //preventDefault => permet de bloquer le comportement par defaut des evenements 
    e.preventDefault()
    //récuperer la valeur de l'attribut href
    const href = e.target.getAttribute("href") 
    content.innerHTML = data[href]
})

//Modifier le fonctionnement du formulaire
const monForm = document.querySelector("#monForm")

//ecouter l'event submit du formulaire
monForm.addEventListener('submit',function(e) {
    //bloque l'envoie du formulaire
    e.preventDefault()
    //recuperer le contenu du champ titre
    const champTitre = document.querySelector("input[name='titre']")
    const champContenu = document.querySelector("input[name='contenu']")
    content.innerHTML  =""
    const errors = []
    if(testChampInput(champTitre)) {
        errors.push("Erreur titre")
    }
    if(testChampInput(champContenu)){
        errors.push("Erreur contenu")
    }
    if(errors.length == 0) {
        data[champTitre.value] = champContenu.value
        link.innerHTML+= `<a href='${champTitre.value}'>${champTitre.value}</a>`
        champTitre.value = ""
        champContenu.value = ""
    }
    else {
        let contenuError = "<div class='alert alert-danger'>"
        for(let e of errors) {
            contenuError +="<div>"+e+"</div>"
        }
        contenuError+= "</div>"
        content.innerHTML = contenuError
    }
   
})

function testChampInput(champ) {
    if(champ.value == '') {
        champ.classList.add("error")
        return true
    }
    return false
}

//supprimer les bordures après changement dans un champ
monForm.addEventListener('keyup', function(e) {
    e.target.classList.remove("error")
})