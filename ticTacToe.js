
// Load Page
document.addEventListener("DOMContentLoaded", function(){
	alert("Player One: You're Up!");

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



// Determine whose turn it is
var nextTurn= "X";

function click(){
	if(document.getElementById(this.id).innerHTML === ""){
		document.getElementById(this.id).innerHTML = nextTurn;
		switchTurn();
	}
	else{
		alert("I'm already selected...Try again!");
	}
}

// Switch turns
function switchTurn()
{
	if(nextTurn === "X")
	{	 
nextTurn = "O";
alert("It's Player Two's Turn!");
	}
	else {
		nextTurn = "X";
alert("It's Player One's Turn!");
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

// Couldn't get the win function - here is my work

//Check if a player won
// board: 1 2 3
// 		  4 5 6
// 		  7 8 9
// Winning combos:
// col1: (col1, col2, col3) (col1, col5, col9), (col1, col4, col7)
// col2: (col2, col5, col8)
// col3: (col3, col6, col9) (col3, col5, col7)
// col4: (col4, col5, col6) 
// col7: (col7, col8, col9)


// 	}
// } checkWin()

// function checkWin(){
// 	if (col2 === "X" && col5 === "X" && col8 === "X")
// 	{
// 		return 1
// 	}
// 	}
// etc...
// or

// switch(check){
// 	case col1 === "X" && col2 === "X" && col3 === "X":
// 		alert("Player One Won!")
// 		break;
// // }