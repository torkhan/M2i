const div = document.querySelector(".timer")
//setInterval => une fonction qui permet d'executer une fonction à interval régulier 
let compteur = 0
setInterval(()=> {
    div.innerText = ++compteur
},1000)

//Animer un carré
const carre = document.querySelector('.carre')
const btn = document.querySelector('.start')

btn.addEventListener('click',function(e) {
    let posX = 0
    let directionX = "R"
    let posY = 0
    setInterval(() => {
        posX = (directionX == "R") ? posX + 1 : posX - 1 
        if(posX == 400) {
            directionX = "L"
        }
        if(posX == 0) {
            directionX = "R"
        }
        //posY+= 1
        // carre.style.transform = "translateX("+pos+"px)"
        // carre.style.transform = "translateY("+pos+"px)"
        carre.style.transform = "translate("+posX+"px, "+posY+"px)"
    },10)
})