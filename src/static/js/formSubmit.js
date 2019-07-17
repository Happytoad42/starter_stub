window.onload = function() {

  let telInput = document.forms.lead.phone;

  telInput.addEventListener('input', function() {
    this.classList.remove('input-invalid', 'input-valid');
    if (!isValid(this.value)) {
      this.classList.add('input-invalid');
    } else {
      this.classList.add('input-valid');
    }
  })

	const isValid = (num) => {
		let telRegEx = new RegExp('^\\+7\\s?[\\(]{0,1}9[0-9]{2}[\\)]{0,1}\\s?\\d{3}\\s?\\d{2}\\s?\\d{2}');
		return telRegEx.test(num);
	}

  document.forms.lead.addEventListener('submit', function() {
    submitForm(event, this);
  })


  function submitForm(e, form){
    e.preventDefault();
    
    var data = {phone: form.phone.value};

    fetch('https://api.myjson.com/bins', {
      method: 'post',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => successForm())
    .catch(error => console.error('Ошибка:', error));
  }

  const successForm = function() {
    document.forms.lead.classList.add('form__submitted');
    document.querySelector('.form__message').innerHTML = 'Спасибо, что оставили заявку. <br>Мы скоро вам перезвоним.';
  }

};