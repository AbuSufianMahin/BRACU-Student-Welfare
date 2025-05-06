import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Home = () => {
    const navigate = useNavigation();
    const isNavigating = Boolean(navigate.location);
    return (
        <div>
            <Navbar></Navbar>
            {
                isNavigating ?
                    <span className="loading loading-spinner loading-xl"></span>
                    :
                    <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;