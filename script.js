const form = document.querySelector('form');
const email = document.getElementById('email');
const error = document.getElementById('error');
const submit = document.getElementById('btn'); 
const wrapper = document.querySelector('.wrapper');
const success = document.querySelector('.success');


form.addEventListener('submit', (e) => { 
    e.preventDefault();
    const checkmsg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email.value === "" || email.value === null) {
        email.classList.add('error');
        error.textContent = 'Please enter an email address.';
        return;
    }

    if (!checkmsg.test(email.value)) {
        error.textContent = "Please enter a valid email";
        email.classList.add('error');
        return;
    }

    wrapper.classList.add('hide');
    success.classList.remove('hide');

});


const dismiss = document.getElementById('dismiss');
dismiss.addEventListener('click', (e) => {
    e.preventDefault();

    success.classList.add('hide');
    wrapper.classList.remove('hide');

})