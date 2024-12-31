let userscore = 0;
let compscore = 0;

let userscorepara = document.querySelector("#you");
let compscorepara = document.querySelector("#comp");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");



const genComChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const rndmIdx = Math.floor(Math.random() * 3);
    return options[rndmIdx];
}


const drawgame = () => {
    msg.innerText = "Game is Draw!";
    msg.style.backgroundColor = "black";
}


const ShowWinner = (UserWin,userchoice,compChoice) => {
    if(UserWin === true) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win! ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You Lose! ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playgame = (userchoice) => {
    const compChoice = genComChoice();

    if(userchoice === compChoice) {
        drawgame();
    } else {
        let UserWin = true;
        if(userchoice === "rock") {
            UserWin = compChoice === "paper" ? false : true;
        } else if(userchoice === "paper") {
            UserWin = compChoice === "scissors" ? false : true;
        } else {
            UserWin = compChoice === "rock" ? false : true;
        }
        ShowWinner(UserWin,userchoice,compChoice);
    }
}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})