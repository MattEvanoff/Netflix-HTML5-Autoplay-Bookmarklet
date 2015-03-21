'use strict';
(function(undefined){
	//Check if user has already loaded an instance - if so, just update the play time;
	if(window._ME && window._ME.autoplayer) {
		//Get desired play time extension & convert to miliseconds
		window._ME.autoplayer.playTime = window.prompt('Autoplay already started! Updating playtime. \n How many more minutes would you like to play for?') * 60 * 1000;
		if(isNaN(window._ME.autoplayer.playTime)) {
			window.alert('That\'s not a number jackass.');
		}
		window._ME.autoplayer.startTime = new Date();
		return;
	}

	window._ME = {
		autoplayer: {}
	};

	//Get desired play time & convert to miliseconds
	window._ME.autoplayer.playTime = window.prompt('How many minutes would you like to play for?') * 60 * 1000;
	if(isNaN(window._ME.autoplayer.playTime)) {
		window.alert('That\'s not a number jackass.');
	}	
	window._ME.autoplayer.startTime = new Date();
	var lastUpdate = new Date();

	//Checks if the video has stopped or if we are done playing once a second
	window._ME.autoplayer.interval = setInterval(function() {
		var currentTime = new Date();

		// Check if autoplay-interrupt has fired
		if(document.getElementsByClassName('player-autoplay-interrupter').length > 0 && document.getElementsByClassName('continue-playing').length > 0) {
			//Just click the continue button!
			document.getElementsByClassName('continue-playing')[0].click();
		} 

		//Check if at end of season
		if (document.getElementsByClassName('player-postplay-autoplay-header') && document.getElementsByTagName('video').length === 0 && document.getElementsByClassName('player-postplay-still-hover').length > 0) {
			//Click the next video picture
			document.getElementsByClassName('player-postplay-still-hover')[0].click();
		}	

		//Check if we have reached the users max play time
		if(window._ME.autoplayer.playTime && currentTime - window._ME.autoplayer.startTime > window._ME.autoplayer.playTime && document.getElementsByClassName('player-play-pause').length > 0) {
			//click the pause button
			document.getElementsByClassName('player-play-pause')[0].click();

			//remove all traces of this autoplayer
			clearInterval(window._ME.autoplayer.interval);
			delete(window._ME);
		}

		lastUpdate = currentTime;
	}, 1000);
})();