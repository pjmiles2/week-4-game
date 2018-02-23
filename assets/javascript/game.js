


//global variables

var randomNumber;
var redCrystal;
var blueCrystal;
var yellowCrystal;
var greenCrystal;
var runningTotal;
var wins = 0;
var losses = 0;

$(document).ready(function(){

//random number generator
function startgame() {
    runningTotal = 0;
    var minNumber = 19;
    var maxNumber = 120;
    randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    $("#computer").html(randomNumber);

    function getRandomNumber(){
        var minCrystal = 1;
        var maxCrystal = 12;
    
    return Math.floor(Math.random() * (maxCrystal - minCrystal + 1) + minCrystal);
    }
    
    
    redCrystal = getRandomNumber();
    blueCrystal = getRandomNumber();
    yellowCrystal = getRandomNumber();
    greenCrystal = getRandomNumber();

};

startgame();

//way to compare total score to random number generator and determine
//win or loss
function winloss(){

    if ( runningTotal === randomNumber ) {
    
        wins++;
        $("#status").text("You win! Try again");
        $("#wins").text("Wins: "+ wins);
        startgame();
    } else if (runningTotal > randomNumber) {
        losses++;
        $("#status").text("You lose. Try again!");
        $("#losses").text("Losses: "+ losses);
        startgame();
    } 

   else {  
    
        $("#status").text("Keep clicking on crystals to match the total");
    }
    
};





//buttons with crystal images and random numbers attached







function clickCrystal (value, id) {

    $("#"+ id).on("click", function () {
        runningTotal += value;
        console.log(runningTotal);
        $("#tally").html(runningTotal);
        winloss();
        });

}

clickCrystal(redCrystal, "red");
clickCrystal(blueCrystal, "blue");
clickCrystal(yellowCrystal, "yellow");
clickCrystal(greenCrystal, "green");











});