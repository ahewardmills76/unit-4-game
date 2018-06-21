
$(document).ready(function() {
   var targetNumber = Math.floor(Math.random()*101+19)
   $('#target-score').text(targetNumber);

var jewelValues = []
var totalScore= 0;
var totalWins= 0;
var totalLosses= 0;

$('#wins').text(totalWins);
$('#losses').text(totalLosses);


function jewelNumberGenerator (){
  for (var i = 0; i < 4; i++) {
    var value = Math.floor(Math.random()*11+1);
    jewelValues.push(value);
  }
  
}

jewelNumberGenerator();

function initialize(){
  targetNumber=Math.floor(Math.random()*101+19);
  $('#target-score').text(targetNumber);
  jewelValues = [];
  jewelNumberGenerator();
  totalScore = 0;
  $('#total-score').text(totalScore);
  } 


function youWin(){
  alert("You won!!!");
  totalWins++;	
  $('#wins').text(totalWins);
  initialize();
  }
  
  
function youLose(){
  alert ("You lose!!!");
  totalLosses++;
  $('#losses').text(totalLosses);
  initialize();
  }
  
 
  
$('#blue').on('click', function(){
    totalScore = totalScore + jewelValues[0]  
    $('#total-score').text(totalScore);
    console.log(totalScore);

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
    console.log(totalScore);

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
    console.log(totalScore);

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
    console.log(totalScore);

    if (totalScore === targetNumber) {
      youWin();
    }
  
    else if (totalScore >= targetNumber) {
      youLose();
    }
  });
  
  
  


});

