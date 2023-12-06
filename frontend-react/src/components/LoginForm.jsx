export function LoginForm() {
    return(
        <>
            <div id="error"></div>
            <div class="loginPanel">
                <form id = "loginForm">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" class="inputBox" autofocus required />

                    <label for="password">Password:</label>
                    <input type="text" id="password" name="password" class="inputBox" required />
                    <br/>
                    <button type = "submit" class = "buttons">Login</button>
                </form>

                <a href='NewAccount.html'><button class = "buttons">Create Account</button></a>
            </div>
        </>
    )
}