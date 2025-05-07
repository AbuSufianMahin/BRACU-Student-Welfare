import React from 'react';
import LoadingIcon from '../LoadingIcon/LoadingIcon';

const ProfileDetails = ({isLoading, userDetails}) => {
    return (
        <div>
            <h1 className='text-2xl md:text-4xl font-extrabold text-white pt-10 pb-5'>Your Information</h1>
            {
                isLoading ?
                    <LoadingIcon></LoadingIcon>
                    :
                    <div className="space-y-3 bg-base-300 p-10 rounded-2xl">
                        <p><span className="font-semibold text-lg">Student ID:</span> {userDetails.student_id}</p>
                        <p><span className="font-semibold text-lg">Name:</span> {userDetails.student_name}</p>
                        <p><span className="font-semibold text-lg">Email:</span> {userDetails.gsuite}</p>
                        <p><span className="font-semibold text-lg">Department:</span> {userDetails.dept}</p>
                    </div>

            }
        </div>
    );
};

export default ProfileDetails;