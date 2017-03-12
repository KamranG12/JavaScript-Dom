

var myVar = setInterval(myTimerRed ,5000);
function myTimerRed (){
    document.getElementById("red").style.backgroundColor='gray';
}


var myVar = setInterval(myTimerYellow,5000);
function myTimerYellow (){
    document.getElementById("yellow").style.backgroundColor='yellow';
}

var myVar = setInterval(myTimerGreen,7000);
function myTimerGreen (){
    document.getElementById("green").style.backgroundColor='green';
}