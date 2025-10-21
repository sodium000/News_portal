import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <div className='mt-5'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;