import React from 'react';
import { use } from 'react';
import AuthContext from '../AuthProvider/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateLayout = ({children}) => {
    
    const loaction = useLocation();
    const {user,loading}=use(AuthContext);

    if (loading) {
        return (<div className='h-[100vh] flex justify-center items-center'>
            <span className="loading loading-spinner text-success"></span>
        </div>)
    }

    if (user && user?.email) {
        return children;
    }
     return <Navigate state={loaction.pathname} to='/auth/login'></Navigate>
};

export default PrivateLayout;