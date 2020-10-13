const morpion = document.querySelector(".morpion")
morpion.addEventListener('click',clickCase)
let firstPlayer = true
function clickCase(e) {
    const maCase = e.target
    if(maCase.classList.contains("col")) {
    //    if(firstPlayer) {
    //     maCase.innerText = "X"
    //    } else {
    //        maCase.innerText = "O"
    //    }
        if(maCase.innerText == '') {
            maCase.innerText = (firstPlayer) ? 'X' : 'O'
            firstPlayer = !firstPlayer
        } 
    }
}