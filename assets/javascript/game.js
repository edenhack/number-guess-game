let randomQNum=0;
let score=0;

//This generates the random number
function randomNum(){
    randomQNum=Math.floor(Math.random()*9)-1;
}

//This updates the score on screen
function scoreBoard(){
    document.querySelector("#score").innerHTML="Score " + scoreBoard;
}

//MAIN PROGRAM
//----------------------------------------------------

//Call functions to start game
randomNum();
scoreBoard();

//Pull user input key and run function
document.onkeyup = function(event){
    const userInput = event.key();
    if (userInput === randomQNum){
        alert("Congrats that's the correct number");
        score++;
    } else if (userInput < randomQNum) {
        alert("Your guess is less than the number.");
    } else {
        alert("Your guess is higher than the number.");
    }
}