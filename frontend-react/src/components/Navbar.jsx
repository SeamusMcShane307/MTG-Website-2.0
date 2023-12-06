export function Navbar() {
    return(
            <header>
                <a href="home/index.html"></a>
                <image src="css/logo.jpg"></image>
                <nav class="navbar">
                    <ul>
                        <li><a href="Trade.html"><button class="navButtons">Trade</button></a></li>
                        <li><a href="User.php"><button class="navButtons">My Collection</button></a></li>
                        <li><a href="User.php"><button class="navButtons">Deck Builder</button></a></li>
                        <li><a href="Login.html"><button class="navButtons">Logout</button></a></li>
                    </ul>
                </nav>
            </header>
    )
}