var astronaut = document.getElementById("astronaut");
//initial character position
var positionX = window.innerWidth/2;
var positionY = window.innerHeight/2;

astronaut.style.top = positionY + "px";
astronaut.style.left = positionX + "px";

//call moveCharacter upon keydown
document.addEventListener("keydown", moveCharacter)

//moveCharacter function
function moveCharacter (e) {
    console.log(e);
    switch (e.key){
        case "ArrowUp":
            positionY-=20;
            astronaut.style.top = positionY + "px";
            break;
        case "ArrowDown": 
            positionY+=20;
            astronaut.style.top = positionX + "px";
            break;
        case "ArrowRight":
            positionX+=20;
            astronaut.style.left = positionX + "px";
            break;

        case "ArrowLeft": 
            positionX-=20;
            astronaut.style.left-= positionX + "px";
            break;

    }
}
