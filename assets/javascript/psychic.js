// Declarations
const alphabet =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const chosen =[];
let randomNumber = '';
let tempLetter = '';
let chances = 10;
let wins = 0;
let losses= 0;
let userGuess = '';

// Generate Random Letter
function genRandom(){
    randomNumber = Math.floor(Math.random() * alphabet.length);
    tempLetter = alphabet[randomNumber];
    console.log("In genRandom. tempLetter: " + tempLetter); 
    if (chosen.includes(tempLetter) && chosen.length<26){ //Will generate new letter if tempLetter was already guessed
            console.log("Letter already chosen. Generating another.")
            genRandom();
    }   
}



// User guessing letter
function guess(){
    genRandom();
    document.onkeyup = function(event){
        userGuess = event.key;
        chosen.push(userGuess);
        console.log("inside guess: chosen: " + chosen + " userGuess: " + userGuess + " tempLetter: " + tempLetter)           
        compare();
        output();   
        checkEndGame();     
    }     
} 

// Compare Random Letter to Guess
function compare(){
    if(tempLetter===userGuess){
        wins++;
        alert("Correct!");
    }
    else{       
        losses++;
        chances--;
    }
}

// Output results to console & screen
function output(){
    document.getElementById("chosenLetter").innerHTML = "You Guessed: " + userGuess;
    document.getElementById("previousChoices").innerHTML = "Previous Guesses:  " + chosen;
    document.getElementById("genLetter").innerHTML = "Random Letter: " + tempLetter;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("chances").innerHTML = "chances: " + chances;
}

// Checks for end of game condition
function checkEndGame(){
    if (chances === 0 && chosen.length < 26){ //endless loop on 26th letter if length not checked
        document.onkeyup = null; // Turns off event listener
        document.getElementById("btn").removeAttribute("disabled");
        alert("Game Over");
    }
    console.log("chances: " + chances);
    if (chances > 0){
        guess();
    }
}

// Reset counters and new game
function restart(){
    tempLetter = '';
    chances = 10;
    wins = 0;
    losses= 0;
    userGuess = '';
    chosen.length = 0; // setting array to zero clears all cells
    document.getElementById("chosenLetter").innerHTML = "You Guessed: ";
    document.getElementById("previousChoices").innerHTML = "Previous Guesses:  ";
    document.getElementById("genLetter").innerHTML = "Random Letter: ";
    document.getElementById("wins").innerHTML = "Wins: ";
    document.getElementById("losses").innerHTML = "Losses: ";
    document.getElementById("chances").innerHTML = "chances: ";
    guess();
}

// Main code section
    guess();