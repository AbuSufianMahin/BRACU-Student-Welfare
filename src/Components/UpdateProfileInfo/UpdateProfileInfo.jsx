import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const UpdateProfileInfo = () => {
  const { user } = useContext(AuthContext);


  const [showPassword, setShowPassword] = useState(false);
  // const [disableSubmit, setDisableSubmit] = useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleChangePassword = async (e) => {
    e.preventDefault();

    const newPassword = e.target.newPassword.value;

    // console.log(newPassword);
    const res = await fetch("http://localhost:8081/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user, newPassword })
    });

    const data = await res.json();
    if (data.success) {
      alert("Password changed successfully.");
    } else {
      alert("Failed to change password.");
    }
  };


  return (
    <div >
      <h1 className='text-2xl md:text-4xl font-extrabold text-white pt-10 pb-5'>Update Information</h1>
      <form className='space-y-5' onSubmit={handleChangePassword}>
        {/* <label className="input h-16 md:h-18 w-full rounded-2xl bg-base-300 gap-2 md:gap-5 px-5 md:px-7">
                    <input name="newPassword" placeholder="Change Password" class="text-lg md:text-xl " type="text" />
                </label> */}

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
            name='newPassword'
            type={showPassword ? 'text' : 'password'}
            required
            placeholder="Password"
            minLength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
          <button type="button" className='btn btn-circle btn-sm' onClick={handleShowPassword}>{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}</button>
        </label>
        <p className="validator-hint hidden text-white">
          Must be more than 8 characters, including
          <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
        </p>

        <input className="bg-[#46598E] btn px-10 md:px-12 h-14 rounded-full text-white text-xl" type="submit" value="Change" />
      </form>
    </div>
  );
};

export default UpdateProfileInfo;