document.addEventListener('DOMContentLoaded', function() {
	let telInput = document.querySelector("#phone");

	var im = new Inputmask("+7 999 999 9999");
	im.mask(telInput);
});