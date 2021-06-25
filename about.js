console.log("hello world");
const img = document.querySelector('img');
let form = document.querySelector('form#contact');

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submited')
}
let complitmentUser = () => {
	alert('Good Taste');
}



form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', complitmentUser)