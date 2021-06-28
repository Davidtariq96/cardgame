var scores, roundScore, activePlayer,gamePlaying,holdScore;

var previousRoll;
startGame();

document.querySelector(".btn-roll").addEventListener("click",function(){
    if (gamePlaying){
        var dice = Math.floor(Math.random() * 6 + 1);

     var diceRoll = document.querySelector(".dice")
     diceRoll.style.display = "block";
     
     diceRoll.src = 'dice-'+ dice +'.png';
     
     if( dice === 6 && previousRoll === 6){
         scores[activePlayer] = 0;
        document.querySelector("#score-" + activePlayer).textContent = "0";
         next ();
     }else if (dice > 1){
        roundScore += dice;
        document.querySelector("#current-"+ activePlayer).textContent = roundScore;
    } else{
        next();
    }

     previousRoll = dice;
    }
    
})


document.querySelector(".btn-hold").addEventListener("click", function() {
    document.querySelector("#current-" + activePlayer).textContent = "0";
    // add current scores to Global score
    scores [activePlayer] += roundScore;
    if (holdScore){
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer]
    }
        var maxScore = document.querySelector(".maxScore");
        // Check if a USER have won the game
        if (scores[activePlayer] >=maxScore.value){
         document.querySelector("#player-" + activePlayer).textContent = "WINNER!"
         document.querySelector(".dice").style.display = "none";
         document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner")
         document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active")
         gamePlaying = false;
         holdScore = false;
         }  else{
            next();
            
         }
        
})


document.querySelector(".btn-new").addEventListener("click", function() {
    startGame();
})

//  A function to change the activePlayer
function next() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector(".player-0-panel").classList.toggle("active")
    document.querySelector(".player-1-panel").classList.toggle("active")

    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
}

// a start function

function startGame() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    // A state variable to tell if our game is ON or has ENDED
    gamePlaying = true;
    holdScore= true;
    document.querySelector(".dice").style.display = "none";

    document.querySelector("#current-0" ).textContent = "0";
    document.querySelector("#current-1" ).textContent = "0";
    document.querySelector("#score-1").textContent = "0";
    document.querySelector("#score-0").textContent = "0";

    document.querySelector("#player-0").textContent = "PLAYER 1"
    document.querySelector("#player-1" ).textContent = "PLAYER 2"
    document.querySelector(".player-0-panel").classList.remove("winner")
    document.querySelector(".player-1-panel").classList.remove("winner")
    document.querySelector(".player-0-panel").classList.remove("active")
    document.querySelector(".player-1-panel").classList.remove("active")
    document.querySelector(".player-0-panel").classList.add("active")
}