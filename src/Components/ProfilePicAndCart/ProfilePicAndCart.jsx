import React, { useContext } from 'react';

import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContext';

const ProfilePicAndCart = () => {
    const { setUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogOut = () => {
        setUser(null);
        navigate('/login');
    }

    return (
        <>
            {/* <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>

                    </div>
                </div> 


                this has to be dynamic
                 Items cart
                <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">

                    <div className="card-body">
                        <span className="text-lg font-bold">8 Items</span>
                        <span className="text-info">Subtotal: $999</span>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-block">View cart</button>
                        </div>
                    </div>


                </div>
            </div> */}

            
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 border border-blue-950 rounded-full">
                        <img
                            className='w-full'
                            alt="Tailwind CSS Navbar component"
                            src="https://i.ibb.co.com/zLL7Vfy/siperman.webp" />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                        <NavLink to='/my-profile' className="justify-between">
                            Profile
                        </NavLink>
                    </li>
                    <li><button onClick={handleLogOut}>Logout</button></li>
                </ul>
            </div>
        </>
    );
};

export default ProfilePicAndCart;