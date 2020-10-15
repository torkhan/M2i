let direction = "R"
const decalage = 900
let pos = 0


const enfant = document.querySelector(".enfant")
const images = enfant.querySelectorAll("img")

const maxLength = decalage * images.length + (10 * images.length)
enfant.style.width = maxLength + "px"

const leftArrow = document.querySelector(".left")
const rightArrow = document.querySelector(".right")

leftArrow.addEventListener('click', arrowClick)
rightArrow.addEventListener('click', arrowClick)

let numeroImage = 1
function slider() {
    pos = (direction == "R") ? pos - decalage : pos + decalage
    numeroImage = (direction == "R") ? numeroImage + 1  : numeroImage - 1
    if(pos ==  -1 * decalage * (images.length-1)) {
        direction = "L"
    }
    else if(pos == 0) {
        direction = "R"   
    }
    enfant.style.transform = "translateX("+pos+"px)"
}

setInterval(slider, 3000)

function arrowClick(e) {
    //On déclare une variable pour stocker la valeur de la transformation
    let transformation
    //Si on clique sur un chevron right
    if(e.target.classList.contains("fa-chevron-right")) {
        // on verifie que le numero image est plus petit que le max de nombre d'images
        if(numeroImage < images.length) {
            //On indique la valeur du décalage en fonction du numero Image (déclage négatif car transformation vers la droite)
            transformation = -1 * (numeroImage * decalage)
            //On indique le changement d'image (on passe à l'image suivante)
            numeroImage++
            //on applique la transformation au parent des images
            enfant.style.transform = "translateX("+transformation+"px)"
        }
        
    }
    //si on clique sur le chevron left
    else if(e.target.classList.contains("fa-chevron-left")) {
        //on verifie les limites des numéro images
        if(numeroImage > 1) {
            //on indique la valeur du décalage (qui represente l'ancien valeur du décalage pour aller à droite moin un déclage)
            //transformation =  -1 * ((numeroImage-1) * decalage) + decalage
            transformation = decalage * (2-numeroImage)
             //On indique le changement d'image (on revient à l'image précedente)
            numeroImage--
            //on applique la transformation
            enfant.style.transform = "translateX("+transformation+"px)"
        }
        
    }
}