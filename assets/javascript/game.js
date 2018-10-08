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

    function startUp() {

    $(".bluecrystal").on("click", function () {


        userGuess = userGuess + blueCrystal;
        $("#usernumber").html(userGuess)
        console.log(userGuess)

        winLoseFunc()

    })

    $(".redcrystal").on("click", function () {


        userGuess = userGuess + redCrystal;
        $("#usernumber").html(userGuess)
        console.log(userGuess)

        winLoseFunc()
        
    })

    $(".greencrystal").on("click", function () {


        userGuess = userGuess + greenCrystal;
        $("#usernumber").html(userGuess)
        console.log(userGuess)

        winLoseFunc()

        
    })

    $(".clearcrystal").on("click", function () {


        userGuess = userGuess + clearCrystal;
        $("#usernumber").html(userGuess)
        console.log(userGuess)
        winLoseFunc()


    })
}

    function reset() {
        blueCrystal = Math.floor(Math.random() * 12) + 5
        redCrystal = Math.floor(Math.random() * 12) + 5
        greenCrystal = Math.floor(Math.random() * 12) + 5
        clearCrystal = Math.floor(Math.random() * 12) + 5
        guessedNumber = Math.floor(Math.random() * 120) + 19
        userGuess = 0;

        $("#usernumber").html(userGuess)

        $("#numbertoguess").html(guessedNumber)

        startUp();

    
    }

    function winLoseFunc () {

        if (userGuess > guessedNumber) {
            $("#usernumber").html("YOU LOSE!")
            $(".bluecrystal").off("click")
            $(".redcrystal").off("click")
            $(".greencrystal").off("click")
            $(".clearcrystal").off("click")
            setTimeout(reset, 5000)
        }

        if (userGuess === guessedNumber) {
            $("#usernumber").html("YOU WIN!")
            $(".bluecrystal").off("click")
            $(".redcrystal").off("click")
            $(".greencrystal").off("click")
            $(".clearcrystal").off("click")
            setTimeout(reset, 5000)
        }

    }
    
    startUp()
});