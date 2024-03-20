const container = document.querySelector(".container")
const rocket = document.querySelector(".rocket")

container.addEventListener("mousemove", e =>{
    mouseX = e.pageX
    mouseY = e.pageY
    rocket.style.left = mouseX + "px"
    rocket.style.top = mouseY + "px"
})

function makeMeteor(){
    meteorCount = 50

    i = 0
    while(i<meteorCount){
        meteor = document.createElement("i")
        windowX = Math.floor(Math.random()* window.innerWidth)

        duration = Math.random() * 1 

        meteorwidth = Math.random() * 3
        meteorHeight = Math.random() * 150

        meteor.style.left = windowX + "px"
        meteor.style.width = meteorwidth + "px"
        meteor.style.height = meteorHeight+ "px"
        meteor.style.animationDuration = duration + "S"

        container.appendChild(meteor)
        i++
    
    }
}

makeMeteor()