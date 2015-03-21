# Netflix HTML5 Autoplay Bookmarklet

More info here: <a href="http://www.mattevanoff.com/2015/03/new-netflix-autoplay-bookmarklet/">http://www.mattevanoff.com/2015/03/new-netflix-autoplay-bookmarklet/</a>

Basically Autoplay-Bookmarklet.bookmarklet.js is the main bookmarklet.  Click it when you are watching a TV show on Netflix to get rid of that thing that comes up that asks if you are still watching.

Just drag this thing here up to your bookmark bar:
<a href="javascript:(function(undefined){if(window._ME&&window._ME.autoplayer){window._ME.autoplayer.playTime=window.prompt('Autoplay already started! Updating playtime. \n How many more minutes would you like to play for?')*60*1000;if(isNaN(window._ME.autoplayer.playTime)){window.alert('That\'s not a number jackass.')}window._ME.autoplayer.startTime=new Date();return}window._ME={autoplayer:{}};window._ME.autoplayer.playTime=window.prompt('How many minutes would you like to play for?')*60*1000;if(isNaN(window._ME.autoplayer.playTime)){window.alert('That\'s not a number jackass.')}window._ME.autoplayer.startTime=new Date();var lastUpdate=new Date();window._ME.autoplayer.interval=setInterval(function(){var currentTime=new Date();if(document.getElementsByClassName('player-autoplay-interrupter').length>0&&document.getElementsByClassName('continue-playing').length>0){document.getElementsByClassName('continue-playing')[0].click()}if(document.getElementsByClassName('player-postplay-autoplay-header')&&document.getElementsByTagName('video').length===0&&document.getElementsByClassName('player-postplay-still-hover').length>0){document.getElementsByClassName('player-postplay-still-hover')[0].click()}if(window._ME.autoplayer.playTime&&currentTime-window._ME.autoplayer.startTime>window._ME.autoplayer.playTime&&document.getElementsByClassName('player-play-pause').length>0){document.getElementsByClassName('player-play-pause')[0].click();clearInterval(window._ME.autoplayer.interval);delete(window._ME)}lastUpdate=currentTime},1000)})();">Netflix Autoplay Bookmarklet</a>

This one will restart the "sleep timer":
<a href="javascript:(function(){window._ME.autoplayer.startTime=new Date()})();">Reset Timer</a>

This one will disable the whole thing (clicking refresh on the page would basically have the same result):
<a href="javascript:(function(){clearInterval(window._ME.autoplayer.interval);delete(window._ME)})();">Autoplay Off</a>
