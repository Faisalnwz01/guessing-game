$(document).ready(function newGame() {
	

	var numberX = Math.floor((Math.random() * 100) + 1)
	$("#guessButton").on("click",function compare(user_input) {
		$("#guess_text").html("THE GAME IS ON");
		var guessedAlready= [];
		var numberOfTurns = 5;
		var user_input = parseInt($("#user_input").val());
		var distance = Math.abs(user_input - numberX);



	while (numberOfTurns > 0) {  // want to run this block of code 5 times
		if ( Number.isNaN(user_input) == true ) {
			alert("please input a valid number");
		}
		else if ((user_input > 100) || (user_input < 1)) {
			$("#guess_text").html("please input number between 1-100");
		}
		else if (user_input == numberX) {
			$("#guess_text").html("YOU WIN, YOU GUESSED RIGHT, NOW GO AND PLAY LOTO!"); 
			numberOfTurns = 0;
		}
		else if (user_input == guessedAlready[i]) {

			for (var i = 0; i < guessedAlready.length; i ++) {
				if (user_input == guessedAlready[0]) {
					alert("You already guessed that!");	
				};
			};
		}
		else {
			if ((distance >= 1) && (distance < 20)) {
				$("#guess_text").html("Super hot");
			} else if ((distance >= 20) && (distance < 40)) {
				$("#guess_text").html( "Hot");
			} else if ((distance >= 40) && (distance < 60)) {
				$("#guess_text").html("Warm");
			} else if ((distance >= 60) && (distance < 80)) {
				$("#guess_text").html("Cold");
			} else if ((distance >= 80) && (distance < 100)) {
				$("#guess_text").html( "Ice cold");
			}
			numberOfTurns -- ;	
		}		
		return guessedAlready += user_input;
	}
	$("#guess_text").html("game over your Five turns have passed");
})

$("#hintButton").on("click",function hint() {
	$("#guess_text").html( "The correct answer is " + numberX + "!!!");
});
});

$("#playAgain").on("click", function playAgain() {
	newGame();

})


///jquery css and dom
$(".jumbotron").hide();
$(".jumbotron").append("<button>Reveal Spoiler!</button>");
$("button").click(function(){
	 $(".jumbotron").show();
});


$("#questionmark").hide().show("slow");
