//Variables
var winningCombo = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];

var nextTurn= "X";

// Functions 
// Click X or O and say square is already clicked
var squareClick = function () {
	if ( $(this).text() === "" ) {
	
		$(this).text(nextTurn).css("color",(nextTurn === "X") ? "red" :  "brown");

		nextTurn = (nextTurn === "X") ? "O" :  "X";

		checkForWinner();
	} else{

		this.disabled=true;
		alert("You already clicked me!");
	}
	
}

// Reset board
var reset = function(){
	$(".square").text("");
	}

//Check for Winner
var checkForWinner = function (){
	var board = $(".square");
	console.log("checking..");
	for (var i = 0; i< winningCombo.length; i++) {
		if(board[winningCombo[i][0]].innerText !== "" &&
			board[winningCombo[i][0]].innerText === board[winningCombo[i][1]].innerText &&
			board[winningCombo[i][1]].innerText === board[winningCombo[i][2]].innerText
		){
			alert("Congrats Player " + board[winningCombo[i][2]].innerText + "!"); 
		reset();
		return;
			}
}
}

// Load Page and execute functions
 $(function(){
 	alert("Player X: You're Up!");

// Display X or O in each square
	$(".square").on("click", squareClick);
	$("#reset").on("click", reset)

});


