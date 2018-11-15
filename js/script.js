// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

var computerChoice="aye";
var winner=" ";
var randomNumber=0;
$("#shoot").click(function(){
    var userChoice=$("input").val();
    $("#userChoice").text(userChoice);
    //randomNumber=Math.floor((Math.random() * 3) + 1)
});

// DOCUMENT READY FUNCTION BELOW

