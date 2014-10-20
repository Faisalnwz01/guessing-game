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
			$("#questionmark").hide("slow");
			$("#firepic1").hide("slow");
			$("#icepic1").hide("slow");

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
			if ((distance >= 1) && (distance < 10)) {
				$("#guess_text").html("Super hot");
				$("#questionmark").hide("slow");
			} else if ((distance >= 11) && (distance < 20)) {
				$("#guess_text").html( "Hot");
				$("#questionmark").hide("slow");
			} else if ((distance >= 21) && (distance < 30)) {
				$("#guess_text").html("Warm");
			} else if ((distance >= 31) && (distance < 40)) {
				$("#guess_text").html("Cold");
				$("#firepic1").hide("slow");
				$("#questionmark").hide("slow");
			} else if ((distance >= 41) && (distance < 100)) {
				$("#guess_text").html( "Ice cold");
				$("#questionmark").hide("slow");
				$("#firepic1").hide("slow");
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
