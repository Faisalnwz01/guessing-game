$(document).ready(function newGame() {
	
		var numberOfTurns = 5;
		var guessedAlready= [];
		

	var numberX = Math.floor((Math.random() * 100) + 1)
	console.log("why are you looking here, go play the game");
	$("#guessButton").on("click",function compare(user_input) {
		
		var user_input = parseInt($("#user_input").val());
		var distance = Math.abs(user_input - numberX);

		


	if (numberOfTurns > 0) {
					 // want to run this block of code 5 times
		if ( Number.isNaN(user_input) == true ) {
			alert("please input a valid number");
		}
		else if ((user_input > 100) || (user_input < 1)) {
			$("#guess_text").html("please input number between 1-100");
		}
		else if (user_input == numberX) {
			$("#rulesText").html("YOU WIN, YOU GUESSED RIGHT, NOW GO AND PLAY LOTO!"); 
			$( "#questionmark" ).append( $("#guessright").show());

			numberOfTurns = 0;
		}
		else if (user_input == guessedAlready[i]) {

			for (var i = 0; i < guessedAlready.length; i ++) {
				if (user_input == guessedAlready[i]) {
					alert("You already guessed that!");	
				};
			};
		}
		else {
			if ((distance >= 1) && (distance < 10)) {
				$("#guess_text").html("Super hot, you are within 10 range");
				$("#questionmark" ).hide();
				$("#firepic1").show();
				
			} 
			else if ((distance >= 11) && (distance < 20)) {
				$("#guess_text").html( "Hot, you are within 20 range");
				$("#questionmark" ).hide();
				$("#firepic1").show();
			} 
			else if ((distance >= 21) && (distance < 30)) {
				$("#guess_text").html("Warm, you are within 30 range");
				$("#questionmark" ).hide();
				$("#warm").show();
			} 
			else if ((distance >= 31) && (distance < 40)) {
				$("#guess_text").html("Cold, you are within 40 range");
				$( "#questionmark" ).hide(); 
				$("#icepic1").show();
			} 
			else if ((distance >= 41) && (distance < 100)) {
				$("#guess_text").html( "Ice cold, you are FAR off");
				$( "#questionmark" ).hide(); 
				$("#icepic1").show();
			};
			numberOfTurns -- ;
	
		}		
		guessedAlready += user_input;
	};
	if (numberOfTurns === 0){ $("#guess_text").html("game over your Five turns have passed");}
})

$("#hintButton").on("click",function hint() {
	$("#guess_text").html( "The correct answer is " + numberX + "!!!");
});


$("#playAgain").on("click", function playAgain() {

	window.location.reload()

})


});



