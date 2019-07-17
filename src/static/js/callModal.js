document.addEventListener('DOMContentLoaded', function(){
	let modalCallers = document.querySelectorAll('.call-modal');

	if (modalCallers) {
		[].forEach.call(modalCallers, function(el){
			el.addEventListener('click', function(){
				
				let targetModal = document.querySelector(`.${el.dataset.modal}`);
				let closeBtn = targetModal.querySelector('.modal__close')

				const toggleModal = function() {
					targetModal.classList.toggle('modal__open');
				}
				
				closeBtn.onclick = function(event) {
					toggleModal();
				}

				window.onclick = function(event) {
					if (event.target === targetModal) {
						toggleModal();
					}
				}
				toggleModal();
			});

			
		});
	}
})
