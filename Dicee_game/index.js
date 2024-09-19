
function rand() {

    var value1 = Math.floor(Math.random()*6)+1;
    var value2 = Math.floor(Math.random()*6)+1;

    if (value1>value2) {
        document.querySelector("h1").innerHTML = "player1 won";
    } 
    
    else if (value1 < value2) {
        document.querySelector("h1").innerHTML = "player2 won";
    }

    else {
        document.querySelector("h1").innerHTML = "Draw";
    }

    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice" + value1 + ".png");
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice" + value2+ ".png") ;

}
 rand();