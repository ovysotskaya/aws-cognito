import React from 'react';
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import {useAuth} from "../../hooks/useAuth";

const Dashboard = () => {
    const { firstName, lastName } = useAuth();

    return (
        <PrivateRoute>
            <h1>Hello, {firstName} {lastName}</h1>
        </PrivateRoute>
    )
}

export default Dashboard;
