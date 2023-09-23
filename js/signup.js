document.addEventListener('DOMContentLoaded', function() {
    const showSignupForm = document.getElementById('showSignupForm');
    const signupForm = document.querySelector('#signupForm');
    const errorMessage = document.getElementById('errorMessage');

    showSignupForm.addEventListener('click', function() {
        signupForm.style.display = 'block';
        errorMessage.textContent = '';
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const confirmPassword = document.querySelector('#confirmPassword').value;

        errorMessage.textContent = '';

        if (!name || !email || !password || !confirmPassword) {
            errorMessage.textContent = 'Por favor, completa todos los campos.';
            return;
        }

        if (password !== confirmPassword) {
            errorMessage.textContent = 'Las contraseñas no coinciden.';
            return;
        }

        const Users = JSON.parse(localStorage.getItem('users')) || [];
        const isUserRegistered = Users.find(user => user.email === email);

        if (isUserRegistered) {
            errorMessage.textContent = 'El usuario ya está registrado.';
            return;
        }

        Users.push({ name: name, email: email, password: password });
        localStorage.setItem('users', JSON.stringify(Users));

        alert('Registro Exitoso!');
        window.location.href = 'login.html';
    });
});
