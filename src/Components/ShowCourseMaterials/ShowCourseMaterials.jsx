import React, { useEffect, useState } from 'react';

import SingleMaterial from '../SingleMaterial/SingleMaterial';


const ShowCourseMaterials = () => {
    const [courseMaterials, setCourseMaterials] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8081/course-materials")
            .then(res => res.json())
            .then(data => {
                setCourseMaterials(data);
                setIsLoading(false)
            })
    }, [])

    return (
        <section className='min-h-screen bg-radial from-[#5168A5] from-40% to-[#90A9F0]'>

            <div className='w-11/12 md:w-10/12 mx-auto text-center'>
                <div className='w-10/12 md:w-9/12 lg:w-8/12 mx-auto py-20 md:pt-25 space-y-2 md:space-y-5'>
                    <h1 className='font-extrabold text-3xl md:text-5xl text-white'>LOOKING FOR SOMETHING?</h1>
                    <p className='text-lg md:text-2xl text-white'>Search your prefered course materials here</p>


                    <form action="">
                        <label className="input h-15 w-full md:w-2/3 rounded-2xl bg-[#D9D9D9] gap-2 md:gap-5 px-5 md:px-7">
                            <svg className="h-[2em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" placeholder="Enter Course Code" className='text-lg md:text-xl ' />
                        </label>
                    </form>

                </div>






                <div className='pb-20'>

                    {
                        isLoading ?
                            <div className='text-center'>
                                <span className="loading loading-infinity w-20"></span>
                            </div>
                            :
                            <div className="border border-base-content/5 ">
                                <table className="table">
                                    {/* head */}
                                    <thead className='text-2xl text-center border'>
                                        <tr>
                                            <th className='border-b'></th>
                                            <th className='border-b' colSpan={2}>Course Code</th>
                                            <th className='border-b'>Faculty Name</th>
                                            <th className='border-b'>Notes Link</th>
                                            <th className='border-b'>Date Created</th>
                                        </tr>
                                    </thead>


                                    <tbody>
                                        {
                                            courseMaterials.map((material, index) => <SingleMaterial key={index} material={material} index={index}></SingleMaterial>)
                                        }

                                    </tbody>
                                </table>
                            </div>
                    }

                </div>
            </div>
        </section>
    );
};

export default ShowCourseMaterials;