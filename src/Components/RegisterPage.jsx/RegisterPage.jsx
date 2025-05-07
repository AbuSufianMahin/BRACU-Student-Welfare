import axios from 'axios';
import React, { useContext, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Navigate, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContext';
// import { FaBeer } from "react-icons/fa";


const RegisterPage = () => {

    const {setUser} = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    // const [disableSubmit, setDisableSubmit] = useState(true);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const navigate = useNavigate()
    const handleRegister = async (e) => {
        e.preventDefault();

        const target = e.target;

        const studentName = target.studentName.value;
        const studentID = target.studentID.value;
        const department = target.department.value;
        const gsuite = target.gsuite.value;
        const password = target.password.value;

        const studentInfo = {
            studentName,
            studentID,
            department,
            gsuite,
            password

        }
        // console.log(studentInfo)


        try {
            await axios.post('http://localhost:8081/student', studentInfo);
            alert('Succesfully registered!');
            navigate('/');
            setUser(studentID);

        } catch (error) {
            console.error('Error inserting data:', error);
            alert('User with same Student ID already exists!');
        }
        

    }


    return (
        <div className='min-h-[60vh] flex items-center bg-[#5168A5]'>
            <div className="card bg-base-100 w-full max-w-11/12 md:max-w-xl shadow-2xl mx-auto my-20">
                <div className="card-body">
                    <h1 className='text-2xl font-bold text-center'>Register Now</h1>
                    <form onSubmit={handleRegister}>

                        {/* student name */}
                        <label className="label">Your name</label>
                        <input name="studentName" type="text" className="input w-full" placeholder="Your name" required />

                        {/* student id */}
                        <label className="label">Student ID</label>
                        <input name="studentID" type="text" className="input w-full" placeholder="Student ID" required />

                        {/* department*/}
                        <label className="label">Department</label>
                        <input name="department" type="text" className="input w-full" placeholder="Department" required />

                        {/* gsuite */}
                        <label className="label">Gsuite</label>
                        <input name="gsuite" type="email" className="input w-full" placeholder="Gsuite" required />

                        {/* password */}
                        <label className="label">Password</label>
                        <label className="input validator w-full">
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
                                minLength="8"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                            />
                            <button type="button" className='btn btn-circle btn-sm' onClick={handleShowPassword}>{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}</button>
                        </label>

                        <p className="validator-hint hidden">
                            Must be more than 8 characters, including
                            <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                        </p>

                        {/* confirm password
                        <label className="label">Confirm Password</label>
                        <input name='confirmPassword' type="password" className="input w-full" placeholder="Password" onChange={handleConfirmPassword}/> */}

                        <button className="btn bg-[#46598E] border border-[#46598E] text-white  mt-4" >Register</button>

                        <p>Already have an account? <NavLink to='/login' className='text-blue-500 underline'>Login</NavLink> Now</p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;