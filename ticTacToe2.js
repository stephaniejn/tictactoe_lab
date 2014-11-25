//Variables
var winningCombo = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];

var nextTurn= "X";

var numMoves = 0;

// Functions 
// Click X or O and say square is already clicked
var squareClick = function () {
	if ( $(this).children('span').text() === "" ) {
	
		// $(this).hide().text(nextTurn).css("color",(nextTurn === "X") ? "red" :  "brown").fadeIn((nextTurn === "X") ? 3000 :  2500000)
		$(this).children('span').hide().text(nextTurn).css("color",(nextTurn === "X") ? "red" :  "brown").fadeIn((nextTurn === "X") ? 3000 :  300)
		nextTurn = (nextTurn === "X") ? "O" :  "X";

		numMoves++;

		checkForWinner();
		

	} else{
		alert("You already clicked me!");
	}
}

// Check for Tie
var checkforTie = function(){
	if(numMoves === 9 
			)
			{alert("You tied, try again!")
		reset()};
}

// Reset board
var reset = function(){
	$(".hello").text("");
	}

	// Not working
	// $(".hello").effect("puff").then(function () {
	// 	$(".hello").text("");
	// });

//Check for Winner
var checkForWinner = function (){
	var board = $(".square");
	console.log("checking..");
	for (var i = 0; i< winningCombo.length; i++) {
		// $(board[winningCombo[i][0]])   //converts DOM to jQuery
		//  $(board[winningCombo[i][0]]).children('span').text()
		if(board[winningCombo[i][0]].innerText !== "" &&
			board[winningCombo[i][0]].innerText === board[winningCombo[i][1]].innerText &&
			board[winningCombo[i][1]].innerText === board[winningCombo[i][2]].innerText
		){
			alert("Congrats Player " + board[winningCombo[i][2]].innerText + "!"); 
		reset();
		return;
			}
}
checkforTie()
}


// Load Page and execute functions
 $(function(){
 	alert("Player X: You're Up!");
 	$(".container1").effect("bounce", { times: 4 }, 3000);
 	$(".header").effect("slide");

// Display X or O in each square
	$(".square").on("click", squareClick);
	$("#reset").on("click", reset)

});


