const button = document.querySelectorAll("button");
const output = document.querySelector('#result');
const user_score = document.querySelector('#user');
const computer_score = document.querySelector('#computer');
 
let userScore=0;
let ComputerScore=0;

button.forEach((button)=>{
        button.addEventListener('click',()=>{
            const result = playGame(button.id, computerPlay());
            output.textContent = result;
        });
});

function computerPlay() {
    const choices = ["stone", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
  }
  
  function playGame(userSelection, computerSelection){
    if(userSelection===computerSelection){
        return 'Its a tie!';
    }
    else if(
        (userSelection==='rock'&& computerSelection==='scissors')||
        (userSelection==='scissors' && computerSelection==='paper')||
        (userSelection==='paper' && computerSelection==='rock')
    ){
        userScore++;
        user_score.textContent = userScore;
        return 'You win! ' + userSelection +' beats ' +computerSelection;
    }
    else{
        ComputerScore++;
        computer_score.textContent = ComputerScore;
        return 'You Lose! '+ computerSelection + " beats " + userSelection;
    }
  }