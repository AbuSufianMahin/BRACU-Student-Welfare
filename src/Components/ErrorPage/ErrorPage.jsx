import React from 'react';
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <section>
            <div className='w-10/12 mx-auto p-25'>
            {/* <img className="mx-auto rounded-4xl" src="https://i.ibb.co.com/27wWzTsx/istockphoto-1404059706-612x612.jpg" alt="" /> */}
            <img className="mx-auto rounded-4xl" src="https://i.ibb.co.com/Xrt7vBYG/robot-404-image-small-size.png" alt="error 404" />

            <div className='text-center my-5'>
                <p className=' text-red-400 text-3xl font-extrabold'>404 - Page Not Found</p>
                <p className='text-xl'>Oops! The page you are looking for does not exist.</p>
            </div>

            <div className='text-center'>
                <NavLink to='/'>
                    <button className='btn btn-ghost hover:opacity-90 bg-[#176AE5] text-white px-6 py-5 md:px-8 md:py-6 text-lg rounded-4xl'>Go Back Home</button>
                </NavLink>
            </div>
        </div>
        </section>
    );
};

export default ErrorPage;