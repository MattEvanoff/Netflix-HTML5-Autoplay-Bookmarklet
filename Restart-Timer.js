//Restart Timer
(function() {
	if(!window._ME || !window._ME.autoplayer) {
		alert('You never started the actual autoplayer dumbass.');
		return;
	}
	window._ME.autoplayer.startTime = new Date();

	if (!document.getElementById('_ME-MSG')) {
		var mydiv = document.body.appendChild(document.createElement('div'));
		mydiv.id = '_ME-MSG';
		mydiv.innerHTML = 'Sleep Timer Reset For '+ window._ME.autoplayer.playTime / 60 / 1000 +' Minutes';
		mydiv.style.cssText = 'position: fixed; text-align: center; top: 100px; border: 30px; font-size: 30px; color: #FFFFFF; padding: 15px; margin: auto auto auto -150px; width: 300px; left: 50%; background-color: #000000;'
	} 

	document.getElementById('_ME-MSG').style.display = 'block';

	setTimeout(function(){
		document.getElementById('_ME-MSG').style.display = 'none';
	}, 3000);
})();