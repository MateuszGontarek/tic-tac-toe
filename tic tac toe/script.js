var lista = [null,null,null,null,null,null,null,null,null];
var color = "red";
var playactive = true;
var red = 0;
var blue = 0;
var wins = [
    [0,1,2], // pozioma
    [3,4,5], // pozioma
    [6,7,8], // pozioma
    [0,3,6], // pionowa
    [1,4,7], // pionowa
    [2,5,8], // pionowa
    [0,4,8], // skośna
    [2,4,6] // skośna
]
var tura = 1;
function move(event) {
    var id = event.target.id;
    document.getElementById("tura").innerHTML = "Round number: " + tura;
    if (id && playactive){
        if (color === "red" && !lista[id]) {
            lista[id] = 'red';
            document.getElementById(id).style.backgroundColor = color;
            document.getElementById("Status").innerHTML = "Color turn: blue";
            checkWIn();
            color = "blue";
            return;
        }
        if (color === "blue" && !lista[id]) {
            lista[id] = "blue";
            document.getElementById(id).style.backgroundColor = color;
            document.getElementById("Status").innerHTML = "Color turn: red";
            checkWIn();
            color = "red";
            return;
        }
    }
}
function checkWIn(){
    if(playactive){
        for (i = 0; i <=9; i++) {
            if (!lista.includes(null)){
                document.getElementById("Status").innerHTML = "tie";
                playactive = false;
            }
        }
        for(i = 0;i < 8; i++) {
            listaToCheck = wins[i];
            if (lista[listaToCheck[0]]) {
                if ((lista[listaToCheck[0]] === lista[listaToCheck[1]] &&  lista[listaToCheck[1]] === lista[listaToCheck[2]])) {
                    console.log(listaToCheck[0])
                    console.log(listaToCheck[1])
                    console.log(listaToCheck[2])
                    document.getElementById("Status").innerHTML = "Color wins: " + color;
                    if (color === "red") { 
                        red += 1;
                        document.getElementById(color + "Score").innerHTML = "Red score: " + red;
                    }
                    else {
                        blue += 1;
                        document.getElementById(color + "Score").innerHTML = "Blue score: " + blue;
                    }
                    playactive = false;
                }
            }
        }   
    }       
}
function restart() {
    lista = [null,null,null,null,null,null,null,null,null];
    color = "red";
    playactive = true;
    tura += 1
    document.getElementById("Status").innerHTML = "";
    for (i = 0; i <= 8; i ++) {
        document.getElementById(i).style.backgroundColor = "grey";
    }
}
