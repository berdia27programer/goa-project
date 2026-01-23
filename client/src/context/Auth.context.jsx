import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("goa_user");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const signup = async (formObj) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 800));

            const newUser = { 
                id: Date.now(), 
                name: formObj.name, 
                email: formObj.email 
            };

            setUser(newUser);
            localStorage.setItem("goa_user", JSON.stringify(newUser));
            alert("You have successfully signed up!");
        } catch (err) {
            alert("Signup failed");
        }
    };

    const login = async (formObj) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 800));

            const loggedInUser = { 
                id: 1, 
                name: "Demo User", 
                email: formObj.email 
            };

            setUser(loggedInUser);
            localStorage.setItem("goa_user", JSON.stringify(loggedInUser));
            alert("Welcome back! You have successfully logged in!");
        } catch (err) {
            alert("Login failed");
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("goa_user");
        alert("You have successfully logged out");
    };

    return (
        <AuthContext.Provider value={{ signup, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
}