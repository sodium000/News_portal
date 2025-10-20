import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams()
    const data = useLoaderData()
    const [news,setnews] = useState([]);

    useEffect(()=>{
        if (id=='0') {
            setnews(data);

        }else if (id=='1') {
            const FilterNews = data.filter((news)=>news.others.is_today_pick === true)
        setnews(FilterNews);

        }else{
        const FilterNews = data.filter((news)=>news.category_id == id)
        setnews(FilterNews);
        }

    },[data,id])

    return (
        <div>
             news found {news.length}
        </div>
    );
};

export default CategoryNews;