import React from 'react';
import { Outlet } from 'react-router';
import Header from '../component/header';
import LeatestNews from '../component/LeatestNews';
import Navbar from '../component/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='container mx-auto my-3'>
                    <LeatestNews></LeatestNews>
                </section>
            </header>
            <nav className='container mx-auto'>
                <Navbar></Navbar>
            </nav>
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