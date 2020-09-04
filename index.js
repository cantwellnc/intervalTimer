// TODO 
// do error handling for null/nonvalid values captured from inputs in timerHandler()
// send alert, then hit reset() 


// var express = require("express"); 
// var app = express(); 
// var {Howl, Howler} = require("howler");
// app.get("/", (req, res)=> {
// 	res.sendFile("index.html")
// })


// first, need to get input from time on, time off, and rounds
var timeOnInput = $(".time-on");
var timeOn; 
var timeOffInput = $(".time-off");
var timeOff; 
var numRoundsInput = $(".rounds"); 
var numRounds; 

// select GO button
var start = $(".start-btn");

// bind ONE click listener to GO button so that users can't start multiple timers at once
start.one("click", timerHandler);

// select Reset button
var reset = $(".reset-btn"); 

reset.on("click", ()=> {
	// reset values to default by refreshing page
	location.reload(true); 
})


// Helper Functions

function sleeb(ms){
	// resolves the promise you return after waiting for prescribed # of milliseconds
	return new Promise(resolve => setTimeout(resolve, ms)); 

}

function timerHandler(){
	// grab values from inputs

	timeOn = parseInt(timeOnInput.val());
	timeOff = parseInt(timeOffInput.val()); 
	numRounds = parseInt(numRoundsInput.val());

	// try{

	// 	if(!timeOn || !timeOff || !numRounds){
		 
	// 	}
	// }
	

	// set Active/Rest fields above inputs
	$("#active-info").text("00:" + (timeOn<10 ? "0"+timeOn : timeOn)); 
	$("#rest-info").text("00:" + (timeOff<10 ? "0"+timeOff : timeOff));  
	// start interval timer 
	timer(timeOn, timeOff,numRounds); 
	
}

async function timer(timeOn, timeOff, numRounds){
	for(var i=1; i<=numRounds; i++){
		// increment round counter, then display on page
		$("#round").text(`${i}`);

		// timeOn
		for(let i=timeOn; i>0; i--){
			$("#test-on").text('00:' + ( i<10 ? "0"+i : i));
			const a = await sleeb(1000); 
		}
		$("#test-on").text("00:00"); 

		// timeOff 
		for(let i=timeOff; i>0; i--){
			$("#test-off").text('00:' + ( i<10 ? "0"+i : i));
			const a = await sleeb(1000); 
		}
		$("#test-off").text("00:00"); 
		// var roundSound = new Howl({src: 'coin.mp3'}); 
		// roundSound.play();
	}
	// var doneSound = new Howl({src: 'coin.mp3'}); 
	// doneSound.play(); 
}



// Serve
// app.listen("3000", ()=> {
// 	console.log("serving on localhost:3000");
// })



// consider people not enter integer values of seconds. Send error. 




