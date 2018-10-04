window.onload = function () {
    $("#usernumber").html(userGuess)

}


var blueCrystal = Math.floor(Math.random() * 12) + 5
var redCrystal = Math.floor(Math.random() * 12) + 5
var greenCrystal =  Math.floor(Math.random() * 12) + 5 
var clearCrystal = Math.floor(Math.random() * 12) + 5
var guessedNumber = Math.floor(Math.random() * 120) + 19
var userGuess = 0;

console.log(blueCrystal)

function bluePlus() {
    $("#bluecrystal").click(userGuess + blueCrystal)
    $("#usernumber").html(userGuess)
}

function redPlus () {

}

function greenPlus () {

}

function clearPlus (){

}

function reset () {
    blueCrystal = Math.floor(Math.random() * 12) + 5
    redCrystal = Math.floor(Math.random() * 12) + 5
    greenCrystal =  Math.floor(Math.random() * 12) + 5 
    clearCrystal = Math.floor(Math.random() * 12) + 5
    guessedNumber = Math.floor(Math.random() * 120) + 19
    userGuess = 0;
}

bluePlus();