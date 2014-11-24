
// Load Page
document.addEventListener("DOMContentLoaded", function(){
	alert("Player X: You're Up!");


// Variables
var winningCombo = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
var board = document.getElementsByClassName('square');
console.log(board);



// Display X or O in each square
var col1 = document.getElementById("col1").addEventListener("click", click)
var col2 = document.getElementById("col2").addEventListener("click", click)
var col3 = document.getElementById("col3").addEventListener("click", click)
var col4 = document.getElementById("col4").addEventListener("click", click)
var col5 = document.getElementById("col5").addEventListener("click", click)
var col6 = document.getElementById("col6").addEventListener("click", click)
var col7 = document.getElementById("col7").addEventListener("click", click)
var col8 = document.getElementById("col8").addEventListener("click", click)
var col9 = document.getElementById("col9").addEventListener("click", click)

// Check for Winner
var checkForWinner = function (){

	console.log("checking..");
	// for loop with winning combos
	// check each winning combo against board[]
	for (var i = 0; i< winningCombo.length; i++) {
		if(board[winningCombo[i][0]].innerText !== "" &&
			board[winningCombo[i][0]].innerText === board[winningCombo[i][1]].innerText &&
			board[winningCombo[i][1]].innerText === board[winningCombo[i][2]].innerText
		){
			alert("Congrats Player " + board[winningCombo[i][2]].innerText + "!"); 
		reset()
			}
			
	}

}

// Check for Tie
var checkForTie = function(){
	if(numMoves === 9 
			)
			{alert("You tied, try again!")
		reset()};
}

// Determine whose turn it is
var nextTurn= "X";
var numMoves= 0;

function click(){
	if(document.getElementById(this.id).innerHTML === ""){
		document.getElementById(this.id).innerHTML = nextTurn;
		checkForWinner();
		switchTurn();
		checkForTie();
	}
	else{
		alert("I'm already selected...Try again!");
	}
}

// Switch turns
var counterx=0
var countery=0


//Switch turn and increase counter
function switchTurn()
{
	if(nextTurn === "X")
	{	 
nextTurn = "O";
counterx ++;
numMoves++;
document.getElementById("counterx").innerHTML  = counterx; 
// alert("It's Player O's Turn!");
	}
	else {
		nextTurn = "X";
countery ++;
numMoves++;
document.getElementById("countery").innerHTML  = countery; 
// alert("It's Player X's Turn!");
	}
} 

// Reset button
var reset = function(){
	location.reload();
	};
document.getElementById("reset").addEventListener("click", function() {
 reset();
});

})
