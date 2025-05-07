import React, { useState } from 'react';
import { AuthContext } from './AuthContext';



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