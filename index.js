// first, need to get input from time on, time off, and rounds
var timeOnInput = $(".time-on");
var timeOn; 
var timeOffInput = $(".time-off");
var timeOff; 
var numRoundsInput = $(".rounds"); 
var numRounds; 

// select GO button
var start = $(".start-btn");

// bind one click listener to GO button so that users can't start multiple timers at once
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
	// try to grab values from inputs, if err occurs, show message and reload page
	try{
		timeOn = parseInt(timeOnInput.val()); 
		timeOff = parseInt(timeOffInput.val()); 
		numRounds = parseInt(numRoundsInput.val());
		const vals = [timeOn, timeOff, numRounds]; 
		for(val of vals){
			if(val<0 || isNaN(val)){
				throw "err"; 
			} 
			else{
				continue; 
			}
		}
	}
	catch(err){
		alert("All inputs must be non-negative integers! Thanks!"); 
		location.reload(true);
	}
	
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
		$('#coin')[0].play();
		$("#test-on").text("00:00"); 

		// timeOff 
		for(let i=timeOff; i>0; i--){
			$("#test-off").text('00:' + ( i<10 ? "0"+i : i));
			const a = await sleeb(1000); 
		}
		$('#coin')[0].play();
		$("#test-off").text("00:00");  
	}
	// wait for coin to finish, then play horn, display done, refresh page
	const a = await sleeb(500);
	$('#horn')[0].play();
	alert("DONE!");
	location.reload(true); 
}
