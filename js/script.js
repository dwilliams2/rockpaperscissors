// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

var computerChoice="randomNumber";
var winner=" ";
var randomNumber=0;
$("#result").hide();
$("#shoot").click(function(){
    
    var userChoice=$("input").val();
    $("#userChoice").text(userChoice);
    randomNumber=Math.floor((Math.random() * 3) + 1);
    
    if(randomNumber === 1){
         $("#computerChoice").text("rock");
    }
     if(randomNumber === 2){
         $("#computerChoice").text("scissors");
    }
    if (randomNumber === 3){
         $("#computerChoice").text("paper");
    }
    if(userChoice === "rock" && randomNumber === 2 ){
         $("#result").show("you");
    }
    if (randomNumber === 2){
         $("#computerChoice").text("scissors");
    }
    if (randomNumber === 3){
         $("#computerChoice").text("paper");
    }
});

// DOCUMENT READY FUNCTION BELOW

