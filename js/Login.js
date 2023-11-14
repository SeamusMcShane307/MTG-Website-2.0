// Login.js
//const mysql = require('mysql2')
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit',  (event) => {
    // Access the form data
    const username= document.getElementById('username').value;
    const password= document.getElementById('password').value;
    let messages = [];
    const errorElement = document.getElementById('error')

    if (password.length < 5 || password.length > 15){
        messages.push("The password should be 5-15 characters long")
    }

    if (messages.length > 0){
        event.preventDefault();
        errorElement.innerText = messages.join("/n")
    }

    //return 'Form submitted!\nName: ' + username + '\nPassowrd: ' + password;
    // Process the form data (you can replace this with your desired functionality)
    //alert('Form submitted!\nName: ' + username + '\nPassowrd: ' + password);

    // const connection = mysql.createConnection({ host: "127.0.0.1", port: "3306", database: "card_db" })
    // //const connection = mysql.createConnection({host:"localhost", user:"root", password:"", database:"card_db"})
    // connection.connect(function (err) {
    //     if (err) throw err;
    //     console.log("Connected!");
    // });
});
