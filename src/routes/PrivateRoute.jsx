import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if(loading) {
        return <Spinner animation="border" variant="primary" />
    }

    if(user) {
        return children;
    }

    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivateRoute;

/**
 * 1. check whether there is user or not
 * 2. if there is user, then allow the user to go to children component... 
 * 2. if there is no user then navigate the user to the login page...
 * */ 