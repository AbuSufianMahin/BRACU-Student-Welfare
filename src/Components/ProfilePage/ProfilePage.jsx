import React, { useContext, useEffect, useState } from 'react';

import UpdateProfileInfo from '../UpdateProfileInfo/UpdateProfileInfo';
import { AuthContext } from '../AuthProvider/AuthContext';
import LoadingIcon from '../LoadingIcon/LoadingIcon';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import StudentContribution from '../StudentContribution/StudentContribution';

const ProfilePage = () => {
    // getting student_ID
    const { user } = useContext(AuthContext);
    const [userDetails, setUserDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        fetch(`http://localhost:8081/student-info?student_id=${user}`)
            .then(res => res.json())
            .then(data => {
                setUserDetails(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching student info:', error);
            });

    }, [user]);


    return (
        <section className="min-h-screen bg-[#5168A5] py-10">
            <div className='w-11/12 md:w-10/12 mx-auto md:flex md:gap-20 lg:gap-50'>
                <div className='flex-1'>
                    <ProfileDetails isLoading={isLoading} userDetails={userDetails}></ProfileDetails>
                </div>

                <div className='flex-1'>
                    <UpdateProfileInfo></UpdateProfileInfo>
                </div>
            </div>

            <div className='w-11/12 md:w-10/12 mx-auto mt-20'>
                <StudentContribution></StudentContribution>
            </div>
        </section>
    );
};

export default ProfilePage;