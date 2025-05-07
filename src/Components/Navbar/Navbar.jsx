import React, { useContext } from 'react';
import studenWelfareLogo from '../../assets/bracu-student-welfare-logo.png'
import { Link, NavLink } from 'react-router';
import NavbarLinks from '../NavbarLinks/NavbarLinks';

import ProfilePicAndCart from '../ProfilePicAndCart/ProfilePicAndCart';
import { AuthContext } from '../AuthProvider/AuthContext';



const Navbar = () => {

    const { user } = useContext(AuthContext);

    return (
        <nav className='bg-[#90A9F090]'>
            <div className="navbar px-0 w-11/12 md:w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="0"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavbarLinks></NavbarLinks>
                        </ul>

                    </div>

                    <div className='flex items-center'>
                        <NavLink to='/'><img src={studenWelfareLogo} alt="" className='rounded-full' /></NavLink>
                        <NavLink to='/'>
                            <h1 className='btn btn-ghost px-2 text-xl hidden lg:flex  text-center font-bold'>Bracu Student Welfare</h1>
                        </NavLink>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-4">
                        <NavbarLinks></NavbarLinks>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {
                        user ?
                            <ProfilePicAndCart></ProfilePicAndCart>
                            :
                            <div className='space-x-2'>
                                <Link to='/login'><button className='bg-[#46598E] border border-[#46598E]  btn px-5 md:px-10 h-12 md:h-10 rounded-xl text-white text-xl md:text-xl'>Login</button></Link>
                                <Link to='/register'><button className='bg-[#46598E] border border-[#46598E]  btn px-5 md:px-10 h-12 md:h-10 rounded-xl text-white text-xl md:text-xl'>Register</button></Link>
                            </div>
                    }

                </div>

            </div>
        </nav>
    );
};

export default Navbar;