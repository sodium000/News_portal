import React, { useEffect, useState } from 'react';
import Header from '../../component/header';
import RightHome from '../../component/Home/RightHome'
import NewsDetailsCard from '../../component/NewsCard/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';


const NewsPage = () => {
    const [news,setNews]= useState({});
    const data = useLoaderData();
    const {id} = useParams();

        useEffect(()=>{
            const newsDetails = data.find((singleNews)=>singleNews.id == id);
            setNews(newsDetails);
        },[data,id]);

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='container mx-auto grid grid-cols-12 mt-10'>
                <section className='col-span-9'>
                <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightHome></RightHome>
                </aside>
            </main>
        </div>
    );
};

export default NewsPage;