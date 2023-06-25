import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../SharePage/NavBar/NavBar';
import Footer from '../SharePage/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;