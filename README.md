# Netflix HTML5 Autoplay Bookmarklet

More info here: <a href="http://www.mattevanoff.com/2015/03/new-netflix-autoplay-bookmarklet/">http://www.mattevanoff.com/2015/03/new-netflix-autoplay-bookmarklet/</a>

Basically Autoplay-Bookmarklet.bookmarklet.js is the main bookmarklet.  Click it when you are watching a TV show on Netflix to get rid of that thing that comes up that asks if you are still watching.

Just drag this thing here up to your bookmark bar:
[Netflix Autoplay Bookmarklet]()

This one will restart the "sleep timer":
[Reset Timer](javascript:(function(){window._ME.autoplayer.startTime=new Date()})();)

This one will disable the whole thing (clicking refresh on the page would basically have the same result):
[Autoplay Off](javascript:(function(){clearInterval(window._ME.autoplayer.interval);delete(window._ME)})();)
