import  '../AllcssFolder/HeaderCSS/Header.css'



import React from 'react';
import logo from '../assets/logo.png'
import { format,  } from 'date-fns';


const header = () => {
    return (
        <div className='mt-10 flex flex-col items-center justify-center gap-5'>
            <img className='w-[350px]' src={logo} alt="" />
            <p className='text-accent poppins-medium'>Journalism Without Fear or Favour</p>
            <p className='text-accent text-[20px]'><span className='text-black'>{format(new Date(),"EEEE")}, </span>{format(new Date(),"MMMM dd, yyyy")}</p>
        </div>
    );
};

export default header;