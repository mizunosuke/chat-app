import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import Line from './Line';
import { Navigate } from "react-router-dom";


export const PrivateRoute = () => {
    const { currentUser } = useContext(AuthContext);
    return currentUser ? (
        <Line/>
    ) : (
        <Navigate to="/signin"/>
    )
}

