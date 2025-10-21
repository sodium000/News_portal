import React from 'react';
import { Outlet } from 'react-router';
import Header from '../component/header';
import LeatestNews from '../component/LeatestNews';
import Navbar from '../component/Navbar';
import LeftHome from '../component/Home/LeftHome';
import RightHome from '../component/Home/RightHome';

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
                <main className='container mx-auto my-5 grid grid-cols-12 '>
                    <aside className='col-span-3 sticky top-0 h-0' >
                        <LeftHome></LeftHome>
                    </aside>
                    <section className='main col-span-6'>
                        <Outlet></Outlet>
                    </section>
                    <aside className='col-span-3 sticky top-0 h-0'>
                        <RightHome></RightHome>
                    </aside>
                </main>
            
        </div>
    );
};

export default HomeLayout;