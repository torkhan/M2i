const div = document.querySelector(".timer")
//setInterval => une fonction qui permet d'executer une fonction à interval régulier 
let compteur = 0
// setInterval(()=> {
//     div.innerText = ++compteur
// },1000)


//Animer un carré
const carre = document.querySelector('.carre')
const btn = document.querySelector('.start')

btn.addEventListener('click',function(e) {
    let posX = 0
    let directionX = "R"
    let directionY = 'B'
    let posY = 0
    let vitesse = 10
    setInterval(() => {
        posX = (directionX == "R") ? posX + 1 : posX - 1 
        if(posX == 600) {
            directionX = "L"
        }
        if(posX == 0) {
            directionX = "R"
        }
        posY = (directionY == "B") ? posY + 1 : posY - 1
        if(posY == 400) {
            directionY = "T"
        }
        if(posY == 0) {
            directionY = "B"
        }
        //posY+= 1
        // carre.style.transform = "translateX("+pos+"px)"
        // carre.style.transform = "translateY("+pos+"px)"
        carre.style.transform = "translate("+posX+"px, "+posY+"px)"
    },vitesse)
})


//Utilisation d'un settimeout
let timer= 1001
const notreSetInterval= function () {
    timer = timer - 50
    setTimeout(() => {
        div.innerText = ++compteur
        if(compteur < 3000)
            notreSetInterval()
    },timer)    
}
notreSetInterval()
