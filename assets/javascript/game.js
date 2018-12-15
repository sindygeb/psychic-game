
//Game variables and outcomes
var ourWins = 0;
var ourLosses = 0;
var guessCount = 10;
var usedGuess = [];
var compChoice = compChoice;
var validKeys = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    //generates the computer's random letter from array
    compChoice = validKeys[Math.floor(Math.random()*validKeys.length)];
    console.log(compChoice);
    
    function jsGuess() {
        compChoice = validKeys[Math.floor(Math.random()*validKeys.length)];
        console.log(compChoice);
    
    }

    document.onkeyup = function(event) {
    
        var userChoice = event.key;
          
        //Winning
        if (userChoice === compChoice) {
            ourWins.textContent = "You Win!"
            ourWins++;
            guessCount = 10;
            usedGuess = [];
        }

        //Incorrect Guess
        jsGuess();
        if (userChoice !== compChoice) {
            guessCount--;
        }

        //Losing - when counter reaches 0
        
        if (guessCount == 0) {
            ourLosses.textContent = "You Lose!"
            ourLosses++;
            usedGuess = [];
            guessCount = 10;
        }
            document.getElementById('playerGuess').html = usedArray;
            document.getElementById('ourWins').innerHTML = ourWins;
            document.getElementById('ourLosses').innerHTML = ourLosses;
            document.getElementById('guessCount').innerHTML = guessCount;
        }
