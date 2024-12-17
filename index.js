let wins = 0;
let losses = 0;
let draws = 0;

if (document.getElementById('feedback')) {
    document.querySelectorAll('.choice').forEach(button => {
        button.onclick = function() {
            const playerChoice = this.dataset.choice;
            const computerChoice = getComputerChoice();
            const result = determineWinner(playerChoice, computerChoice);

            document.getElementById('feedback').textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
            updateScore(result);
        };
    });

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function determineWinner(player, computer) {
        if (player === computer) {
            return "It's a draw!";
        } else if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'scissors' && computer === 'paper') ||
            (player === 'paper' && computer === 'rock')
        ) {
            return "You win!";
        } else {
            return "You lose!";
        }
    }

    function updateScore(result) {
        if (result === "You win!") {
            wins++;
        } else if (result === "You lose!") {
            losses++;
        } else {
            draws++;
        }
        document.getElementById('score').textContent = `Wins: ${wins} | Losses: ${losses} | Draws: ${draws}`;
    }
}

if (document.getElementById('finalScore')) {
   const finalWins = localStorage.getItem('wins') || 0;
   const finalLosses = localStorage.getItem('losses') || 0;
   const finalDraws = localStorage.getItem('draws') || 0;

   document.getElementById('finalScore').textContent =
       `Final Score - Wins: ${finalWins}, Losses: ${finalLosses}, Draws: ${finalDraws}`;

   
}