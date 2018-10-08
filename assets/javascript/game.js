$(document).ready(function () {


    var blueCrystal = Math.floor(Math.random() * 12) + 5
    var redCrystal = Math.floor(Math.random() * 12) + 5
    var greenCrystal = Math.floor(Math.random() * 12) + 5
    var clearCrystal = Math.floor(Math.random() * 12) + 5
    var guessedNumber = Math.floor(Math.random() * 120) + 19
    var userGuess = 0;

    $("#usernumber").html(userGuess)

    $("#numbertoguess").html(guessedNumber)

    console.log(blueCrystal)

    $(".bluecrystal").on("click", function () {


        userGuess = userGuess + blueCrystal;
        $("#usernumber").html(userGuess)
        console.log(userGuess)

        if (userGuess > guessedNumber) {
            $("#usernumber").html("YOU LOSE!")
            setTimeout(reset, 5000)
        }
    })

    $(".redcrystal").on("click", function () {


        userGuess = userGuess + redCrystal;
        $("#usernumber").html(userGuess)
        console.log(userGuess)

        if (userGuess > guessedNumber) {
            $("#usernumber").html("YOU LOSE!")
            setTimeout(reset, 5000)
        }
    })

    $(".greencrystal").on("click", function () {


        userGuess = userGuess + greenCrystal;
        $("#usernumber").html(userGuess)
        console.log(userGuess)

        if (userGuess > guessedNumber) {
            $("#usernumber").html("YOU LOSE!")
            setTimeout(reset, 5000)
        }
    })

    $(".clearcrystal").on("click", function () {


        userGuess = userGuess + clearCrystal;
        $("#usernumber").html(userGuess)
        console.log(userGuess)

        if (userGuess > guessedNumber) {
            $("#usernumber").html("YOU LOSE!")
            setTimeout(reset, 5000)
        }
    })

    function reset() {
        blueCrystal = Math.floor(Math.random() * 12) + 5
        redCrystal = Math.floor(Math.random() * 12) + 5
        greenCrystal = Math.floor(Math.random() * 12) + 5
        clearCrystal = Math.floor(Math.random() * 12) + 5
        guessedNumber = Math.floor(Math.random() * 120) + 19
        userGuess = 0;

        $("#usernumber").html(userGuess)

        $("#numbertoguess").html(guessedNumber)
    }


});