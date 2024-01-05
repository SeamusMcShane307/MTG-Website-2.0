import { Link, useNavigate} from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { useContext } from "react";

import logo from '../css/logo.jpg';

export function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(user);

    const handleLogout = () => {
        logout();
        navigate("/Login")
    }

    return(
            <header>
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
                <nav className="navbar">
                    <ul>
                        <li><a href="/Trade"><button className="navButtons">Trade</button></a></li>
                        <li><a href="/MyCollection"><button className="navButtons">My Collection</button></a></li>
                        <li><a href="/DeckBuilder"><button className="navButtons">Deck Builder</button></a></li>
                        { user !== null ? (
                            <li><a href="/Logout"><button className="navButtons" onClick={handleLogout}>Logout</button></a></li>
                        ): (
                            <li><a href="/Login"><button className="navButtons">Login</button></a></li>
                        )}
                    </ul>
                </nav>
                
            </header>
    )
}

export default Navbar