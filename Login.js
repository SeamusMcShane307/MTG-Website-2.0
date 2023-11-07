// Login.js
const mysql  =  require('mysql2')

document.getElementById('login-form').addEventListener('submit', function (event) {
    //event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const connection = mysql.createConnection
    // You should replace these with your actual authentication logic.
    if (username === 'yourusername' && password === 'yourpassword') {
        // Successful login, you can redirect to another page or perform other actions.
        alert('Login successful!');
    } else {
        const loginError = document.getElementById('login-error');
        loginError.textContent = 'Invalid username or password';
        loginError.style.display = 'block';
    }
});
