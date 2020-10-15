const data = {
    google : "contenu de la page google",
    facebook : "contenu de la page facebook"
}

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
    data[champTitre.value] = champContenu.value
    link.innerHTML+= `<a href='${champTitre.value}'>${champContenu.value}</a>`
})