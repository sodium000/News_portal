import React from 'react';
import { Navigate } from 'react-router';

const home = () => {
    return (
        <div>
            <Navigate to="/category/0"></Navigate>
        </div>
    );
};

export default home;