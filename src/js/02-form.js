
const formData = {
    email: "",
    message: ""
}
const dataForm = document.querySelector('.feedback-form');
const userEmail = document.querySelector('input[name="email"]');
const userMessage = document.querySelector('textarea[name="message"]');
const submitButton = document.querySelector('button[type="submit"]');

const getStorage = JSON.parse(localStorage.getItem('feedback-form-state'));

if (getStorage) {
    dataForm.email.value = getStorage.email;
    formData.email = getStorage.email;
}
if (getStorage) {
    dataForm.message.value = getStorage.message;
    formData.message = getStorage.message;
}

const handleUserEmail = userEmail.addEventListener('input', (evt) => {
    formData.email = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
})

const handleUserMessage = userMessage.addEventListener('input', (evt) => {
    formData.message = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
})

const onSubmit = submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (dataForm.email.value === '' || dataForm.message.value === '') {
        alert(`Fill please all fields`);
        return;
    } else {
        console.log(formData);
        localStorage.clear();
        dataForm.email.value = '';
        dataForm.message.value = '';
    }
});
