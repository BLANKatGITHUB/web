var drumEle = document.querySelectorAll("button");

for (var i = 0; i < drumEle.length; i++) {
  drumEle[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    var audi;

    switch (buttonInnerHTML) {
        case "w":
            audi = new Audio("sounds/crash.mp3");
            audi.play();
            break;
        case "a":
            audi = new Audio("sounds/kick-bass.mp3");
            audi.play();
            break;
        case "s":
            audi = new Audio("sounds/snare.mp3");
            audi.play();
            break;
        case "d":
            audi = new Audio("sounds/tom-1.mp3");
            audi.play();
            break;
        case "j":
            audi = new Audio("sounds/tom-2.mp3");
            audi.play();
            break;
        case "k":
            audi = new Audio("sounds/tom-3.mp3");
            audi.play();
            break;
        case "l":
            audi = new Audio("sounds/tom-4.mp3");
            audi.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
    });
}