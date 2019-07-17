document.addEventListener('DOMContentLoaded', function() {
	let telInput = document.querySelector("#phone");

	Inputmask({"mask": "+7 (999) 999 9999"}).mask(telInput);
});