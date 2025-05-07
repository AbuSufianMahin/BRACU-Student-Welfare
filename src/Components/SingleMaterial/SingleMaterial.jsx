import React from 'react';

const SingleMaterial = ({ material, index }) => {
    // console.log(material);
    const {student_name, course_code, faculty_initial, note_link, date_created} = material;

    const date = new Date(date_created);
    // console.log(date_created)
    const formatted_date = date.toLocaleString().split(',')[0];
    
    return (
        <tr className='text-center text-lg border'>
            <td className='border-b'>{index + 1}</td>
            <td colSpan={2} className='border-b'>{course_code}</td>
            <td className='font-bold text-base-content opacity-70 border-b'>{faculty_initial}</td>
            <td className='border-b underline'><a href={note_link} target='_blank' className='hover:text-red-200'>{note_link}</a></td>
            <td className='border-b'>{formatted_date}</td>
            <td className='border-b'>{student_name}</td>
        </tr>

    );
};

export default SingleMaterial;