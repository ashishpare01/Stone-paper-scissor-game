let  userScore = 0; 
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice =() =>{
    const options = ["rock","paper","scissor"];
   const randId = Math.floor(Math.random() * 3);
   return options[randId];
     
};

// draw game
const drawGame = () => {
    //console.log("game Was Draw");
    msg.innerText="Game was Draw Play Again!";
    msg.style.backgroundColor = "#081b31";
};


//show winner
const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin){
        // userScore print
        userScore++;
        userScorePara.innerText= userScore;
       // console.log("You Win");
       msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor = "orange";
       
    }else{

        //compScore print

        compScore++;
        compScorePara.innerText= compScore;
        //console.log("You lose");
        msg.innerText=`You Lost! ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "green";
       
    }
};


// generate  userchoice choice
const playGame = (userChoice ) => {
   // console.log("userChoice = " , userChoice);

    // Generate Computer Choice
    const compChoice = genCompChoice();
   // console.log("Computer Choice =",compChoice)



// for draw 
if(userChoice === compChoice){
drawGame();
}
else{
    let userWin = true;
    if(userChoice==="rock"){
        // computer choice was scissor, paper
        userWin=compChoice==="paper" ? false : true;

     } else if(userChoice === "paper"){
        // computer choice was scissor, rock
        userWin=compChoice === "scissor" ? false : true

        }else{
              // computer choice was paper, rock

              userWin=compChoice==="rock" ? false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};



// its for user choice give event to the choice

choices.forEach((choice) => {
   // console.log(choice)

    choice.addEventListener("click", () =>{

const userChoice = choice.getAttribute("id");
       // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});