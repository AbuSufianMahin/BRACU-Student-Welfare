import React, { useContext, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthContext';
import { useLocation, useNavigate } from 'react-router';

const LoginPage = () => {

    const {setUser} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const location = useLocation();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }


    const handleLogin = async (e) => {
        e.preventDefault();

        const gsuite = e.target.gsuite.value;
        const password = e.target.password.value;

        setError('');

        try {
            const response = await fetch("http://localhost:8081/student/login", {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ gsuite, password }) 
            });

            const data = await response.json();

            if (response.ok) {
                
                setUser(data.student.student_id);
                navigate(location.state? location.state : '/');

                console.log(data.student.student_id)
                // or setUser(data.student); whole obj

            } else {
                setError(data.error);
            }
        } catch (err) {
            console.error("Error during login:", err);
        }

    }


    return (
        <div className='min-h-[60vh] flex items-center bg-[#5168A5]'>
            <div className="card bg-base-100 w-full max-w-11/12 md:max-w-lg shadow-2xl mx-auto my-20">
                <div className="card-body">
                    <h1 className='text-2xl font-bold text-center'>Login Now</h1>
                    <form className="fieldset" onSubmit={handleLogin}>
                        <label className="label">Gsuite</label>
                        <input name='gsuite' type="email" className="input w-full" placeholder="Gsuite" required />


                        <label className="label">Password</label>
                        <label className="input w-full">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                    ></path>
                                    <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                </g>
                            </svg>
                            <input
                                name='password'
                                type={showPassword ? 'text' : 'password'}
                                required
                                placeholder="Password"
                            />
                            <button type="button" className='btn btn-circle btn-sm' onClick={handleShowPassword}>{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}</button>
                        </label>

                        {/* <div><a className="link link-hover">Forgot password? Contact us :v</a></div> */}
                        <button type='submit' className="btn bg-[#46598E] border border-[#46598E] text-white  mt-4">Login</button>
                        {
                            error && <p className='text-red-500'>{error}</p>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;