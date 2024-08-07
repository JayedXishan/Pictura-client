import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Parent = () => {
    return (
        <div className='bg-base'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Parent;