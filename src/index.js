
(function () {

	particlesJS.load('bg', 'src/opt.json', function() {
		console.log('callback - particles.js config loaded');
	});	
})();

function adaptIE(){

	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = 'src/ie.css';
	document.querySelector('head').appendChild(link);

	var bars = document.querySelectorAll('#bar .value li'),
		colors = ['#007ac6','#328ed5','#63b9fb','#88cafc'],
		widths = ['96%','87%','79%','92%'];
	for (var i = bars.length; i--;) {
		bars[i].style.width = widths[i];
		bars[i].style.background = colors[i];
	}
}