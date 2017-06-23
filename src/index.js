
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
}