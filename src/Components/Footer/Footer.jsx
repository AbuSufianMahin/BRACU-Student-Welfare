import React from 'react';
import 'boxicons';
import NavbarLinks from '../NavbarLinks/NavbarLinks';
import { NavLink } from 'react-router';
import studenWelfareLogo from '../../assets/bracu-student-welfare-logo.png'
const Footer = () => {
    return (
        <footer className='bg-[#7F93CD90] pt-20 pb-24'>
            <div className='w-10/12 mx-auto flex justify-around flex-wrap gap-10'>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-2xl font-bold px-5'>Features</h1>

                    <ul className='menu gap-2'>
                        <NavbarLinks></NavbarLinks>
                    </ul>
                </div>

                <div className='flex flex-col gap-6'>
                    <h1 className='text-2xl font-bold px-2'>Contact Us</h1>
                    <ul className='flex flex-col gap-2 p-2'>
                        <NavLink to='' >
                            <li className='flex items-center gap-1 py-3'>
                                <box-icon name='envelope'></box-icon>
                                <p className='text-lg'>Email</p>
                            </li>
                        </NavLink>

                        <NavLink to=''>
                            <li className='flex items-center gap-1'>
                                <box-icon type='logo' name='facebook-circle'></box-icon>
                                <p className='text-lg'>Facebook</p>
                            </li>
                        </NavLink>

                    </ul>
                </div>

                <div className='flex flex-col items-center'>
                    <NavLink to='/'><img src={studenWelfareLogo} alt="" className='rounded-full' /></NavLink>
                    <NavLink to='/'>
                        <h1 className='text-3xl text-center font-bold'>BRACU Student <br /> Welfare</h1>
                    </NavLink>
                </div>
            </div>
        </footer>
    );
};

export default Footer;