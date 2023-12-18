// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        // Perform login logic, receive token or user data from the server
        // Set user data in the state
        setUser(userData);
    };

    const logout = () => {
        // Perform logout logic (clear token, user data, etc.)
        console.log(1);
        
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