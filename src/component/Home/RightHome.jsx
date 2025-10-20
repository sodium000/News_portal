import React from 'react';
import LoginButton from '../LoginButton/LoginButton';
import FindUs from '../Find/FindUs';
import Qzone from '../Qzone/Qzone';

const RightHome = () => {
    return (
        <div className='space-y-8'>
            <h1 className='font-bold my-3 pl-3 text-[22px]'>Login with</h1>
            <LoginButton></LoginButton>
            <FindUs></FindUs>
            <Qzone></Qzone>
        </div>
    );
};

export default RightHome;