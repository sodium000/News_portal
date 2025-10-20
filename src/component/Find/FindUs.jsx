import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h1 className='font-bold pl-3 mb-5 text-2xl'>Find Us</h1>
            <div>
                <div className="join join-vertical w-full gap-6">
                    <button className="btn bg-base-200 justify-start join-item border-0"> <FaFacebook></FaFacebook> Facebook</button>
                    <button className="btn bg-base-200 justify-start join-item border-0"> <FaInstagram></FaInstagram> Instagram</button>
                    <button className="btn bg-base-200 justify-start join-item border-0"> <FaTwitter></FaTwitter> Twitter</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;