let randomQNum=0;
let score=0;
let chances = 3;

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

    if(chances = 0){
        alert("You have run out of chances.");
        alert("Your score was: " + score);
        chances=3;
        score=0;
        randomNum();
        scoreBoard();
    }

    if (userInput === randomQNum){
        alert("Congrats that's the correct number");
        score++;
        randomNum();
        scoreBoard();
        chances = 3;
    } else if (userInput < randomQNum) {
        alert("Your guess is less than the number.");
        chances--;
    } else if (userInput > randomQNum) {
        alert("Your guess is higher than the number.");
        chances--;
    } else {
        alert("That is not a number, please try again.");
    }
}