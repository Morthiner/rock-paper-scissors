// WHAT TO DO
    // Remove the five loops logic
    // Add three buttons for rock, paper and scissors
    // Add an event that calls singleRound() with the correct 
        // playerSelection for each button
    // Add a div that displays the results of each round
    // Display the running score and announce the winner
        // after five rounds.
        

// PSEUDOCODE
    // Comment the 5 rounds loop
    // Add a button for each option with the correct id
    // Add a function to get the player choice 





//function game() {
    var counterPlayer = 0;
    var counterComputer = 0;
    let rock = document.querySelector("#rock")
    let paper = document.querySelector("#paper")
    let scissors = document.querySelector("#scissors")
    let text = ''
    let div = document.querySelector("#log")
    let scorePlayer = document.querySelector("#scorePlayer")
    let scoreComputer = document.querySelector("#scoreComputer")
    let refreshButton = document.querySelector("#refreshButton")

    refreshButton.addEventListener('click', () => location.reload());

//    scorePlayer.innerHTML = `You: ${counterPlayer}` 
   // scoreComputer.innerHTML = 'Computer: 0'

    // paper.addEventListener('click', game())
    // scissors.addEventListener('click', game())    
    
    function playerButton(e) {
        if( counterPlayer + counterComputer == 5) {
            if(counterPlayer > counterComputer){
                div.innerHTML = "<p>You won!</p>"
                console.log('You won!')
            } else {
                div.innerHTML = "<p>You lost!</p>"
                console.log('You lost!')
            }
            return
        } else {
            text = e.target.textContent
            console.log(text)
            game()

        }
    } 
    
     rock.addEventListener('click', playerButton)
     paper.addEventListener('click', playerButton)
     scissors.addEventListener('click', playerButton)
    
    

    function computerPlay() {
        let options = ['Rock', 'Paper', 'Scissors'];
        return options[Math.floor(Math.random()*options.length)];
    }

function game() {  
 // for(let i = 1; i <= 2; i++) {
        
        function singleRound(playerSelection, computerSelection) {
            playerSelection = text
            computerSelection = computerPlay()
            let player = playerSelection;
            console.log(player)
            let computer = computerSelection;
            let currentScore = [counterPlayer, counterComputer];
        
            function factChecker() {
                if (player.toLowerCase() == "paper" && computer.toLowerCase() == "rock") {
                    div.innerHTML = '<p>You won! Paper beats Rock</p>'
                    console.log("You won! Paper beats Rock");
                     
                     counterPlayer = counterPlayer + 1
                } else if(player.toLowerCase() == "paper" && computer.toLowerCase() == "scissors") {

                     div.innerHTML = '<p>You lost. Scissors beat Paper</p>'
                     console.log("You lost. Scissors beat Paper :(")
                     counterComputer += 1 
                } else if(player.toLowerCase() == "rock" && computer.toLowerCase() == "scissors") {

                     div.innerHTML = '<p>You won! Rock beats Scissors</p>'
                     console.log("You won! Rock beats Scissors")
                    counterPlayer = counterPlayer + 1 
                } else if (player.toLowerCase() == "rock" && computer.toLowerCase() == "paper"){

                     div.innerHTML = '<p>You lost. Paper beats Rock</p>'
                     console.log("You lost. Paper beats Rock :(")
                     counterComputer += 1
                } else if (player.toLowerCase() == "scissors" && computer.toLowerCase() == "paper" ) {

                    div.innerHTML = '<p>You won! Scissors beat Paper</p>'
                    console.log("You won! Scissors beat Paper")
                    counterPlayer = counterPlayer + 1
                } else if (player.toLowerCase() == "scissors" && computer.toLowerCase() == "rock") {

                     div.innerHTML = '<p>You lost. Rock beats Scissors</p>'
                    console.log("You lost. Rock beats Scissors :(")
                    counterComputer += 1
                }
            }
        
            console.log("You picked " + player)
            console.log("The computer picked " + computer)
            factChecker()
            scorePlayer.innerHTML = "You: " + counterPlayer + " Computer: " + counterComputer
            
            console.log("Player: " + counterPlayer + " Computer: " + counterComputer)
            
        
            if (player.toLowerCase() == computer.toLowerCase()) {
                div.innerHTML = "<p>It's a draw. Try again</p>"
                console.log("It's a draw. Try again")
                singleRound() 
            }
        }
        singleRound()

  //  }
  //  if(counterPlayer > counterComputer) {
  //      console.log("Congratulations you won the game!")
  //  } else {
  //      console.log("You lost the game :(")
  //  }
 }
//game()
console.log(rock)
console.log(document.getElementById("rock").value)