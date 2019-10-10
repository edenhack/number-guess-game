let randomQNum=0;
let score=0;
let chances = 3;
let keysUsed =[];

//This generates the random number
function randomNum(){
    randomQNum=Math.floor(Math.random()*9);
}

//This updates the score and chances on screen
function scoreBoard(){
    document.querySelector("#score").innerHTML="Score: " + score;
    document.querySelector("#chances").innerHTML="Chances left: " + chances;
    document.querySelector("#keys-used").innerHTML="Keys Pressed: " + keysUsed;
}

//MAIN PROGRAM
//----------------------------------------------------

//Call functions to start game
randomNum();
scoreBoard();

//Pull user input key and run function
document.onkeyup = function(event) {
    const userInput = event.key;

    if(chances == 0){
        alert("You have run out of chances.");
        alert("Your score was: " + score);
        chances=3;
        score=0;
        keysUsed=[];
        randomNum();
        scoreBoard();
        return;
    }

    if (userInput == randomQNum){
        alert("Congrats that's the correct number");
        score++;
        randomNum();
        chances = 3;
        keysUsed=[];
        scoreBoard();
        return;
    } else if (userInput < randomQNum) {
        alert("Your guess is less than the number.");
        chances--;
        keysUsed.push(userInput);
        scoreBoard();
    } else if (userInput > randomQNum) {
        alert("Your guess is higher than the number.");
        chances--;
        keysUsed.push(userInput);
        scoreBoard();
    }
};