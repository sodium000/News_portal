import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../component/NewsCard/NewsCard';

const CategoryNews = () => {
    const { id } = useParams()
    const data = useLoaderData()
    const [news, setnews] = useState([]);

    useEffect(() => {
        if (id == '0') {
            setnews(data);

        } else if (id == '1') {
            const FilterNews = data.filter((news) => news.others.is_today_pick === true)
            setnews(FilterNews);

        } else {
            const FilterNews = data.filter((news) => news.category_id == id)
            setnews(FilterNews);
        }

    }, [data, id])

    return (
        <div>
            <div className='font-bold pl-3 text-[22px] mt-4 mb-6'>
                Dragon News Home
            </div>
            <div className='grid grid-cols-1 gap-10 p-5'>
                {
                    news.map(ShowNews => <NewsCard key={ShowNews.id} ShowNews={ShowNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;