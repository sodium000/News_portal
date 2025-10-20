import React from 'react';
import swimming from '../../assets/swimming.png'
import Class from "../../assets/class.png"
import ground from '../../assets/playground.png'


const Qzone = () => {
    return (
        <div className='pl-3 bg-base-200'>
            <h2 className='text-2xl font-bold mb-5'>Q<span className='text-orange-600'>zone</span></h2>
            <div className='p-5'>
                <img src={swimming} alt="" />
                <img src={Class} alt="" />
                <img src={ground} alt="" />
            </div>
        </div>
    );
};

export default Qzone;