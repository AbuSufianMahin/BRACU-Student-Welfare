import React from 'react';

const ShowCourseMaterials = () => {
    return (
        
        // bg-gradient-to-b from-[#5168A5] to-[#90A9F0]
        <section className='min-h-screen bg-radial from-[#5168A5] from-10% to-[#90A9F0]'>

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


                



                <div className=''>
                    <div className="overflow-x-auto rounded-box border border-base-content/5 ">
                        <table className="table">
                            {/* head */}
                            <thead className='text-2xl text-center'>
                                <tr>
                                    <th colSpan={2}>Course Name</th>
                                    <th>Faculty Name</th>
                                    <th>Notes Link</th>
                                    <th>Note Rating</th>
                                </tr>
                            </thead>


                            <tbody>
                                {/* row 1 */}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowCourseMaterials;