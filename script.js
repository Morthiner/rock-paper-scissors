/*
WHAT TO DO
    -Create a function called computerPlay that will randomly return either 'Rock', 'Paper' or 'Scissors'
    -Create a function that plays a single round of RPS. The function should take two parameters: playerSelection
     and computerSelection and then return a string that declares the winner of the round 
     like so:"You lose! Paper beats Rock"
    -Make the playerSelection parameter to be case-insensitive
    -Write a new function called game() and put the previous function inside of this one. Put the function to
     play a 5 round game that keeps scores and reports a winner and a loser at the end.

    The objective is to create a game of RPS bewtween the user and the computer.toLowerCase() through the command line
    The computer.toLowerCase(), each turn, will randomly generate a value of RPS, while the user does it manually through the
    prompt. The code will then compare the results and return a positive message in case, by the rules of RPS,
    the winner wins or a negative message, case he loses, recording each win to a counter.
    The code will run a loop of 5 rounds and then report who has the largest counter of wins as the winner.
PLANNING
    -Does your program have a user interface?
     At the first moment it will run only by the command line, but i will implement a HTML and CSS interface later
    
    -What inputs will your program have? Will the user enter the data or will you get your input from somewhere else?
     There will be both user based input, entered by the prompt, and randomly generated input from a function
    
    -What's the desired output?
     A string message for each round and then after five rounds, a string that tells the winner based on the 
     number of wins stored in the counter.
    
    -Given your inputs, what are the steps necessary to return the desired output?
     Once you have the computer.toLowerCase() and user's strings, compare them and evaluate by the rules of RPS
     if the user won the round, return a positive message and add a win to the user's counter
     if the user lost the round, return a negative message and add a win to the computer.toLowerCase()'s counter
     After 5 rounds, end the loop and compare both win counters to see which one is bigger
     If the user's counter is bigger then print "You won! What a lucky bastard"
     If the user's counter is smaller then print "You lost the game. Today is not your day :("
PSEUDOCODE
    -Create a function called computerPlay that will randomly return either
    'Rock', 'Paper' or 'Scissors'

    -Create a function that plays a single round of RPS. 
     The function should take two parameters: playerSelection
     and computerSelection and then return a string that declares the winner 
     of the round like so:"You lose! Paper beats Rock"
     
    -Create two variables: counterPlayer and counterComputer and, each round, 
     add 1 to the one that corresponds the winner of the round

    -Make the playerSelection parameter to be case-insensitive

    -Write a new function called game() and put the previous function
     inside of this one. Put the function to
     play a 5 round game that keeps scores and reports a 
     winner and a loser at the end.    

*/

function game() {
    var counterPlayer = 0;
    var counterComputer = 0;

    for(let i = 1; i <= 5; i++) {
        function computerPlay() {
            let options = ['Rock', 'Paper', 'Scissors'];
            return options[Math.floor(Math.random()*options.length)];
        }
        
        function singleRound(playerSelection, computerSelection) {
            playerSelection = prompt("Rock, Paper or Scissors?");
            computerSelection = computerPlay()
            let player = playerSelection;
            let computer = computerSelection;
            let currentScore = [counterPlayer, counterComputer];
        
            function factChecker() {
                if (player.toLowerCase() == "paper" && computer.toLowerCase() == "rock") {
                     console.log("You won! Paper beats Rock");
                     counterPlayer = counterPlayer + 1
                } else if(player.toLowerCase() == "paper" && computer.toLowerCase() == "scissors") {
                     console.log("You lost. Scissors beat Paper :(")
                     counterComputer += 1 
                } else if(player.toLowerCase() == "rock" && computer.toLowerCase() == "scissors") {
                     console.log("You won! Rock beats Scissors")
                    counterPlayer = counterPlayer + 1 
                } else if (player.toLowerCase() == "rock" && computer.toLowerCase() == "paper"){
                     console.log("You lost. Paper beats Rock :(")
                     counterComputer += 1
                } else if (player.toLowerCase() == "scissors" && computer.toLowerCase() == "paper" ) {
                    console.log("You won! Scissors beat Paper")
                    counterPlayer = counterPlayer + 1
                } else if (player.toLowerCase() == "scissors" && computer.toLowerCase() == "rock") {
                    console.log("You lost. Rock beats Scissors :(")
                    counterComputer += 1
                }
            }
        
            console.log(player.toLowerCase())
            console.log(computer.toLowerCase())
            console.log("You picked " + player)
            console.log("The computer picked " + computer)
            factChecker()
            console.log("Player: " + counterPlayer, "Computer: " + counterComputer)
            
        
            if (player.toLowerCase() == computer.toLowerCase()) {
                console.log("It's a draw. Try again")
                singleRound() 
            }
        }
        singleRound()

    }
    if(counterPlayer > counterComputer) {
        console.log("Congratulations you won the game!")
    } else {
        console.log("You lost the game :(")
    }
}
game()