import React from 'react';
import { Outlet } from 'react-router';
import Header from '../component/header';
import LeatestNews from '../component/LeatestNews';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='container mx-auto my-3'>
                    <LeatestNews></LeatestNews>
                </section>
            </header>
                <main>
                    <section className='left-nav'></section>
                    <section className='main'>
                        <Outlet></Outlet>
                    </section>
                    <section className='right-nav'></section>
                </main>
            
        </div>
    );
};

export default HomeLayout;