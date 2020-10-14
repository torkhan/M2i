let direction = "R"
const decalage = 900
let pos = 0
function slider() {
    const enfant = document.querySelector(".enfant")
    pos = (direction == "R") ? pos - decalage : pos + decalage
    if(pos == -2700) {
        direction = "L"
        pos = 0
    }
    if(pos == 0) {
        direction = "R"
    }
    enfant.style.transform = "translateX("+pos+"px)"
}

setInterval(slider, 3000)