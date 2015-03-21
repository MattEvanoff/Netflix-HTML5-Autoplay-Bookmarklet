//Turn off autoplay
(function() {
	clearInterval(window._ME.autoplayer.interval);
	delete(window._ME);
})();