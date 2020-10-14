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
            testWin(maCase.innerText)
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

function testWin(joueur) {
    testWinRow(joueur)
    testWinCol(joueur)
    testWinDiag(joueur)
    testWinReverseDiag(joueur)
}

function testWinRow(joueur) {
    for(let i=1; i<=3; i++) {
        const casesRow = document.querySelectorAll(".morpion .col[data-i='"+i+"']")
        //On compare les valeurs de chaque case en utilisant une boucle for par exemple
        let win = true
        for(let c of casesRow) {
            if(c.innerText != joueur) {
                win = false
                break
            }
        }
        if(win) {
            alert("Bravo le joueur "+ joueur+ " a gagné" )
        }
    }
}

function testWinCol()
{

}

function testWinDiag() {

}

function testWinReverseDiag() {

}