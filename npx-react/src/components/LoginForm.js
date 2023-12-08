export function LoginForm() {
    return(
        <>
            <div id="error"></div>
            <div className="loginPanel">
                <form id = "loginForm">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" className="inputBox" autoFocus required />

                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" name="password" className="inputBox" required />
                    <br/>
                    <button type = "submit" className = "buttons">Login</button>
                </form>

                <a href='NewAccount.html'><button className = "buttons">Create Account</button></a>
            </div>
        </>
    )
}