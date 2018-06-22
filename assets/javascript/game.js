$(document).ready(function() {
  //THIS GENERATES THE NUMBER THAT PLAYERS ARE TARGETING
   var targetNumber = Math.floor(Math.random()*101+19)
   /*THIS WRITES THE TEXT TO THE SPAN WITH AN ID OF 'TARGET-SCORE' 
   USING THE INFORMATION FROM THE VARIABLE 'TARGETNUMBER'*/
   $('#target-score').text(targetNumber);
//VARIABLES
var jewelValues = []
var totalScore= 0;
var totalWins= 0;
var totalLosses= 0;
/*THIS WRITES THE TEXT TO THE SPAN WITH AN ID OF 'WINS' OR 'LOSSES' 
USING THE INFORMATION FROM THE VARIABLES 'TOTALWINS AND 'TOTAL LOSSES'*/
$('#wins').text(totalWins);
$('#losses').text(totalLosses);

//THIS FUNCTION POPULATES THE ARRAY OF VALUES FOR EACH INDIVIDUAL JEWEL
function jewelNumberGenerator (){
  for (var i = 0; i < 4; i++) {
    var value = Math.floor(Math.random()*11+1);
    jewelValues.push(value);
  }
  
}
//FUNCTION IS CALLED
jewelNumberGenerator();

//FUNCTION THAT INITIALIZES THE GAME UPON WIN OR LOSS
function initialize(){
  targetNumber=Math.floor(Math.random()*101+19);
  $('#target-score').text(targetNumber);
  jewelValues = [];
  jewelNumberGenerator();
  totalScore = 0;
  $('#total-score').text(totalScore);
  } 

//FUNCTION THAT RUNS UPON WINNING
function youWin(){
  alert("You win!!!");
  totalWins++;	
  $('#wins').text(totalWins);
  initialize();//INITIALIZE IS CALLED
  }
  
 //FUNCTION THAT RUNS UPON LOSING 
function youLose(){
  alert ("You lose!!!");
  totalLosses++;
  $('#losses').text(totalLosses);
  initialize();//INITIALIZE IS CALLED
  }
  
 
  /*INDIVIDUAL BUTTON FUNCTIONS THAT CREATE CLICK EVENTS, ASSIGN VALUES BASED ON THE GLOBAL ARRAY, 
  ADD TO TOTAL SCORE, AND PROVIDE WIN/LOSS CONDITIONALS*/
$('#blue').on('click', function(){
    totalScore = totalScore + jewelValues[0]  
    $('#total-score').text(totalScore);
    

    if (totalScore === targetNumber) {
      youWin();
    }
  
    else if (totalScore >= targetNumber) {
      youLose();
    }
  });
       

  $('#yellow').on('click', function(){
    totalScore = totalScore + jewelValues[1]  
    $('#total-score').text(totalScore);
    

    if (totalScore === targetNumber) {
      youWin();
    }
  
    else if (totalScore >= targetNumber) {
      youLose();
    }
  });

  $('#green').on('click', function(){
    totalScore = totalScore + jewelValues[2]    
    $('#total-score').text(totalScore);
    

    if (totalScore === targetNumber) {
      youWin();
    }
  
    else if (totalScore >= targetNumber) {
      youLose();
    }
  });

  $('#pink').on('click', function(){
    totalScore = totalScore + jewelValues[3]  
    $('#total-score').text(totalScore);
    

    if (totalScore === targetNumber) {
      youWin();
    }
  
    else if (totalScore >= targetNumber) {
      youLose();
    }
  });
  
  
  


});

