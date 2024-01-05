import React, { useState, useContext } from "react";
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const handleLogin = () => {
        console.log(username, password);
        if(login(username, password)){
            console.log("Logged In");
            navigate("/MyCollection");
        }
        
        setError("Incorrect Username or Password: " + username + password);
    }

    return(
        <>
            <div id="error"></div>
            <div className="loginPanel">
                <form id = "loginForm" >
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        id="username" 
                        name="username" 
                        className="inputBox" 
                        autoFocus 
                        required 
                    />

                    <label htmlFor="password">Password:</label>
                    <input 
                        type="text"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        id="password" 
                        name="password" 
                        className="inputBox" 
                        required 
                    />
                    <br/>
                    <button onClick={handleLogin} type = "button" className = "buttons">Login</button>
                </form>

                <a href='NewAccount.html'><button className = "buttons">Create Account</button></a>
            </div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </>
    )
}

export default Login