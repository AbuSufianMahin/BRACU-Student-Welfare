import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    
    // console.log(user);
    if (!user) {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }

    return children;
};

export default PrivateRoute;