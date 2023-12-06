export function Navbar() {
    return(
            <header>
                <a href="home/index.html"></a>
                <img src="../css/logo.jpg"></img>
                <nav className="navbar">
                    <ul>
                        <li><a href="Trade.html"><button className="navButtons">Trade</button></a></li>
                        <li><a href="User.php"><button className="navButtons">My Collection</button></a></li>
                        <li><a href="User.php"><button className="navButtons">Deck Builder</button></a></li>
                        <li><a href="Login.html"><button className="navButtons">Logout</button></a></li>
                    </ul>
                </nav>
            </header>
    )
}