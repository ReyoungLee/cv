
(function () {

	var theme = location.hash.substr(1);
	particlesJS.load('bg', 'src/opt.json');

	document.body.className = 'theme-' + theme;

	window.adaptIE = function(){

		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = 'src/ie.css';
		document.querySelector('head').appendChild(link);

		var bars = document.querySelectorAll('#bar .value li'),
			colors = ['#007ac6','#328ed5','#63b9fb','#88cafc'],
			widths = ['96%','87%','79%','92%'];
		var themes = {
			n: ['#df3b3b','#e94f4f','#f66767','#fc7e7e'],
			a: ['#ea7804','#ff8100','#fc9326','#ffa74c']
		};

		colors = themes[theme] || colors;
		for (var i = bars.length; i--;) {
			bars[i].style.width = widths[i];
			bars[i].style.background = colors[i];
		}
	}
})();