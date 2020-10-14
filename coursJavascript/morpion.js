const morpion = document.querySelector(".morpion")
const btnStart = document.querySelector(".btn-start")

morpion.addEventListener('click',clickCase)
btnStart.addEventListener('click', clearCase)


let firstPlayer = true
let nbreCaseRempli = 0
const maxCase = 9


function clickCase(e) {
    const maCase = e.target
    if(maCase.classList.contains("col")) {
        if(maCase.innerText == '') {
            //    if(firstPlayer) {
            //     maCase.innerText = "X"
            //    } else {
            //        maCase.innerText = "O"
            //    }
            maCase.innerText = (firstPlayer) ? 'X' : 'O'
            firstPlayer = !firstPlayer
            nbreCaseRempli++
            if(nbreCaseRempli == maxCase) {
                btnStart.style.display = "block"
            }
        } 
    }
}


function clearCase(e) {
    const cases = document.querySelectorAll(".morpion .col")
    for(let c of cases) {
        c.innerText = ''
    }
    e.target.style.display = "none"
    nbreCaseRempli = 0
}