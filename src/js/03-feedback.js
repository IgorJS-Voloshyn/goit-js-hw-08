import throttle from 'lodash.throttle';

const refs = {
	form: document.querySelector('.feedback-form'),
	textarea: document.querySelector('.feedback-form textarea'),
	email: document.querySelector('.feedback-form input'),
};

const formData = {};
const STORAGE_KEY = 'feedback-form-state';
const savedData = localStorage.getItem(STORAGE_KEY, JSON.stringify(formData));
const parsedData = JSON.parse(savedData);

entryFormInput();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle((evt) => {
	formData[evt.target.name] = evt.target.value;
	localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500));


function onFormSubmit(evt) {
	evt.preventDefault();

	console.log(formData);
		  
	if (refs.email.value === "" || refs.textarea.value === "") {
        alert ('Ви незаповнили форму')
	}
	
	evt.currentTarget.reset();
	localStorage.removeItem(STORAGE_KEY);


}


function entryFormInput() {
	try {
 const savedlocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));

	if (savedlocalStorage) {
		refs.email.value = parsedData.email;
		refs.form.message.value = parsedData.message;
		
	}
} catch (error) {
		console.log(error.name);
}
	
	
}
