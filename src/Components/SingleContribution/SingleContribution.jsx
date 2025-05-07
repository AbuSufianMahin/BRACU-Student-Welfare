import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import axios from 'axios';

const SingleContribution = ({ index, singleNote, addedNotes, setAddedNotes }) => {
    const { user } = useContext(AuthContext);

    const { course_code, faculty_initial, note_link, date_created } = singleNote;

    const date = new Date(date_created);
    const formatted_date = date.toLocaleString().split(',')[0];


    const handleNoteDelete = async () => {

        try {
            await axios.delete('http://localhost:8081/api/study-material', {
                data: {
                    student_id: user, 
                    course_code,
                    faculty_initial
                }
            });
            alert("Note deleted successfully.");
            setAddedNotes(addedNotes.filter(note => !(note.student_id === user && note.course_code === course_code && note.faculty_initial === faculty_initial)))

        } catch (error) {
            console.error("Delete error:", error);
            alert("Failed to delete the note.");
        }
    }

    return (
        <tr className='text-center text-lg border'>
            <td className='border-b'>{index + 1}</td>
            <td colSpan={2} className='border-b'>{course_code}</td>
            <td className='font-bold text-base-content opacity-70 border-b'>{faculty_initial}</td>
            <td className='border-b underline'><a href={note_link} target='_blank' className='hover:text-red-200'>{note_link}</a></td>
            <td className='border-b'>{formatted_date}</td>
            <td className='border-b'>
                <button className='btn bg-[#46598E] text-white' onClick={handleNoteDelete}>Delete</button>
            </td>
        </tr>

    );
};

export default SingleContribution;