import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import SingleContribution from '../SingleContribution/SingleContribution';

const StudentContribution = () => {
    const { user } = useContext(AuthContext)

    const [addedNotes, setAddedNotes] = useState([])
    // const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:8081/student-contribution?student_id=${user}`)
            .then(res => res.json())
            .then(data => {
                if (data.error){
                    setAddedNotes([]);    
                }
                else{
                    console.log(data.error);
                    setAddedNotes(data);
                }
                // console.log(data);

            })
    }, [user])

    console.log(addedNotes);

    return (
        <div>
            <h1 className='text-2xl md:text-4xl font-extrabold text-white pt-10 pb-5'>Your Contribution</h1>


            <div className='pb-20'>

                {
                    addedNotes.length == 0 ?
                        <div>
                            <h1 className='text-xl md:text-2xl font-bold text-red-400'>You have no Contribution :(</h1>
                        </div>
                        :
                        <div className="border border-base-content/5 ">
                            <table className="table bg-white rounded-none">
                                {/* head */}
                                <thead className='text-2xl text-center border'>
                                    <tr>
                                        <th className='border-b'></th>
                                        <th className='border-b' colSpan={2}>Course Code</th>
                                        <th className='border-b'>Faculty Name</th>
                                        <th className='border-b'>Notes Link</th>
                                        <th className='border-b'>Date Created</th>
                                        <th className='border-b'>delete</th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        addedNotes.map((singleNote, index) => <SingleContribution key={index} index={index} singleNote={singleNote} addedNotes={addedNotes} setAddedNotes={setAddedNotes}></SingleContribution>)
                                    }

                                </tbody>
                            </table>
                        </div>
                }

            </div>



        </div>
    );
};

export default StudentContribution;