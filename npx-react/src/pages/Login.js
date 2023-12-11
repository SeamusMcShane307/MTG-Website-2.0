import { useState } from "react"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return(
        <>
            <div id="error"></div>
            <div className="loginPanel">
                <form id = "loginForm">
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
                    <button type = "submit" className = "buttons">Login</button>
                </form>

                <a href='NewAccount.html'><button className = "buttons">Create Account</button></a>
            </div>
        </>
    )
}

export default Login