function play(playerMove){
    document.getElementById("computerMove").innerHTML = "";
    document.getElementById("playerMove").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    var round = document.getElementById("round").innerHTML;
    var playerScore = document.getElementById("player_acore").innerHTML;
    var computerScore = document.getElementById("computer_acore").innerHTML;
    var draw = document.getElementById("draw").innerHTML;
    round++;
    document.getElementById("round").innerHTML = round;
    var computerMove = Math.floor(Math.random() * 3 +1);
    if (computerMove == 1){
        computerMove = "Rock";
    }
    else if (computerMove == 2){
        computerMove = "Paper";
    }
    else {
        computerMove = "Scissors";
    }
    document.getElementById("computerMove").innerHTML = computerMove;
    document.getElementById("playerMove").innerHTML = playerMove;
    document.getElementById("playerMovePic").src = playerMove + ".png";
    document.getElementById("computerMovePic").src = computerMove + ".png";
    document.getElementById("playerMovePic").classList.remove("hide");
    document.getElementById("computerMovePic").classList.remove("hide");
    if(playerMove == computerMove){
        document.getElementById("result").innerHTML = "Draw";
        draw++;
        document.getElementById("draw").innerHTML = draw;
        bodyColorChange("yellow");
    }
    else if(playerMove == "Rock" && computerMove == "Scissors" || playerMove == "Paper" && computerMove == "Rock" || playerMove == "Scissors" && computerMove == "Paper"){
        document.getElementById("result").innerHTML = "Player win";
        playerScore++;
        document.getElementById("player_acore").innerHTML = playerScore;
        bodyColorChange("green");
    }
    else {
        document.getElementById("result").innerHTML = "Computer wins";
        computerScore++;
        document.getElementById("computer_acore").innerHTML = computerScore;
        bodyColorChange("red");
    }
    precent();
}
function bodyColorChange(color){
    resultColorChange(color);
    document.body.style.background = color;
    setTimeout(() => {
        document.body.style.background = "white";
    },200);
}
function resultColorChange(color){
    document.getElementById("result").style.backgroundColor = color;
}
function precent(){
    var playerScore = Number(document.getElementById("player_acore").innerHTML);
    var computerScore = Number(document.getElementById("computer_acore").innerHTML);
    var draw = Number(document.getElementById("draw").innerHTML);
    var round = Number(document.getElementById("round").innerHTML);
    if (round == 0){
        round = 1;
    }
    var playerPrecent = (playerScore / round) * 100;
    var computerPrecent = (computerScore / round) * 100;
    var drawPrecent = (draw / round) * 100;
    document.getElementById("player_precent").innerHTML = playerPrecent.toFixed(2).toString() + "%";
    document.getElementById("computer_precent").innerHTML = computerPrecent.toFixed(2).toString() + "%";
    document.getElementById("draw_precent").innerHTML = drawPrecent.toFixed(2).toString() + "%";
}
