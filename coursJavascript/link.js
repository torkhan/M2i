const contenu = {
    google : "contenu de la page google",
    facebook : "contenu de la page facebook"
}

const content = document.querySelector(".content")
const link = document.querySelector(".nav")
link.addEventListener('click', function(e) {
    //preventDefault => permet de bloquer le comportement par defaut des evenements 
    e.preventDefault()
    //récuperer la valeur de l'attribut href
    const href = e.target.getAttribute("href") 
    content.innerHTML = contenu[href]
})