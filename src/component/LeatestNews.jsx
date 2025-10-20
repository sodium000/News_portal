import React from 'react';
import Marquee from 'react-fast-marquee';

const LeatestNews = () => {
    return (
        <div className='flex items-center  bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>letest</p>
            <Marquee>
            <p className='font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, incidunt temporibus? Enim, earum voluptate! Nam praesentium ex ipsa minima incidunt esse. Placeat, nam deleniti?</p>
            </Marquee>
        </div>
    );
};

export default LeatestNews;