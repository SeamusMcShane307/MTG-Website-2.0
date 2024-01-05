// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [allUsers, setAllUsers] = useState([]);
    // const navigate = useNavigate();

    const login = async (username, password) => {
        try {
            const response = await fetch('/user/users');
            if(!response.ok) {
                throw new Error("Network response was not ok");
            }

            const json = await response.json();
            if(Array.isArray(json)) {
                setAllUsers(json);
                console.log(allUsers);

                if(checkCredentials(username, password, json)) {
                    setUser(username);
                    return true;
                }
            }
        } catch (error) {
            console.error("There was a problem attempting to login: ", error);
        }
        return false;
    };

    const checkCredentials = (username, password, users) => {
        console.log(users);
        if (users) {
            const userFound = users.find((user) => user.username === username && user.password === password);
            if(userFound){
                console.log("userFound is true")
                return true;
            }
            return false;
        }
        return false;
    };


    const logout = () => {
        // Perform logout logic (clear token, user data, etc.)
        setUser(null);
        console.log("Logout");
        
        //setUser(null);
    };

    const isAuthenticated = () => {
        return !!user; // Check if user is logged in
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;