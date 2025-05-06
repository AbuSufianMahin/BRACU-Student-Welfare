import React, { createContext, useState } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const userDetails = {
        user,
        setUser
    }

    return (
        <AuthContext value={userDetails}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;