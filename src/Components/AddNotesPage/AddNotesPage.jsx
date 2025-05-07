import React, { useContext } from 'react';
import bgImage from '../../assets/background-notepad-image.png'
import axios from 'axios';
import { AuthContext } from '../AuthProvider/AuthContext';

const AddNotesPage = () => {
    const {user} = useContext(AuthContext)
    // console.log(user);

    const handleAddCourseMaterials = async (e) => {
        e.preventDefault();

        const target = e.target;
        const studentID = user;
        const courseCode = target.courseCode.value;
        const facultyIni = target.facultyIni.value;
        const noteLink = target.noteLink.value;

        const today = new Date().toISOString().split('T')[0];
        const dateUpdated = null;

        const values = {
            studentID,
            courseCode,
            facultyIni,
            noteLink,
            today,
            dateUpdated
        }
        try {
            await axios.post('http://localhost:8081/course-materials/add', values);
            alert('Succesfully added');

        } catch (error) {
            console.error('Error inserting data:', error);
            alert('User with same Student ID already exists!');
        }
        

    } 


    return (
        <section className={`min-h-screen bg-no-repeat bg-size-[200px] md:bg-size-[300px] lg:bg-size-[400px] bg-position-[center_bottom] md:bg-position-[center_right]  lg:bg-position-[center_right_5rem] bg-[#5168A5]`}
            style={
                { backgroundImage: `url(${bgImage})` }}
        >


            <div className='w-11/12 md:w-10/12 mx-auto'>
                <div className='pt-10 pb-56 md:py-40 space-y-5'>
                    <div className='space-y-2 w-full md:w-7/10'>
                        <h1 className='text-4xl md:text-6xl font-extrabold text-white'>SHARE YOUR NOTES</h1>
                        <p className='text-white text-xl md:text-3xl'>Share your valuable notes and help others with the resources </p>

                    </div>

                    <div className='pt-5'>
                        <form onSubmit={handleAddCourseMaterials} className='space-y-5 md:space-y-10'>
                            <label className="input h-16 md:h-18 w-full md:w-2/3 rounded-2xl bg-white gap-2 md:gap-5 px-5 md:px-7">
                                <input type="text" name='courseCode' placeholder="Enter Course Code" className='text-lg md:text-xl ' />
                            </label>
                            <label className="input h-16 md:h-18 w-full md:w-2/3 rounded-2xl bg-white gap-2 md:gap-5 px-5 md:px-7">
                                <input type="text" name='facultyIni' placeholder="Enter Faculty Initial" className='text-lg md:text-xl ' />
                            </label>
                            <label className="input h-16 md:h-18 w-full md:w-2/3 rounded-2xl bg-white gap-2 md:gap-5 px-5 md:px-7">
                                <input type="text" name='noteLink' placeholder="Notes link" className='text-lg md:text-xl ' />
                            </label>

                            <br />

                            <div className='text-center md:text-left'>
                                <input type="submit" value="Upload now" className='bg-[#46598E] btn px-10 md:px-15 h-12 md:h-16 rounded-full text-white text-xl md:text-2xl' />
                            </div>
                        </form>

                    </div>


                </div>


            </div>

        </section>
    );
};

export default AddNotesPage;