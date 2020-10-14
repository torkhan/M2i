let direction = "R"
const decalage = 900
let pos = 0
const enfant = document.querySelector(".enfant")
const images = enfant.querySelectorAll("img")
const maxLength = decalage * images.length + (10 * images.length)
enfant.style.width = maxLength + "px"
function slider() {
    pos = (direction == "R") ? pos - decalage : pos + decalage
    if(pos ==  -1 * decalage * images.length) {
        direction = "L"
        pos = 0
    }
    if(pos == 0) {
        direction = "R"
    }
    enfant.style.transform = "translateX("+pos+"px)"
}

setInterval(slider, 3000)