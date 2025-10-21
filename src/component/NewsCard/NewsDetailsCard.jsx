import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    return (
        <div>
            <h1 className='text-xl font-semibold my-10'>Dragon News</h1>
            <div className='px-4'>
            <img className='w-full h-[350px] object-cover mb-7' src={news.image_url} alt="" />
            <h1 className='text-3xl font-semibold mb-7'>{news.title}</h1>
            <p className='text-accent mb-10'>{news.details}</p>
            <Link className='btn btn-secondary' to={`/category/${news.category_id}`}>Back to category</Link>
            </div>

        </div>
    );
};

export default NewsDetailsCard;