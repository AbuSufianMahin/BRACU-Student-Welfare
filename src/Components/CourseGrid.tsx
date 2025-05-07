import React from 'react';
import CourseCard from './CourseCard';

const CourseGrid = () => {
  // Course data
  const courses = [
    { id: 1, title: 'English Fundamentals', code: 'ENG 101', section: 'SECT 01' },
    { id: 2, title: 'English Fundamentals', code: 'ENG 101', section: 'SECT 02' },
    { id: 3, title: 'English Fundamentals', code: 'ENG 101', section: 'SECT 03' },
    { id: 4, title: 'English Fundamentals', code: 'ENG 101', section: 'SECT 04' },
    { id: 5, title: 'English Fundamentals', code: 'ENG 101', section: 'SECT 05' },
    { id: 6, title: 'English Fundamentals', code: 'ENG 101', section: 'SECT 06' },
    { id: 7, title: 'English Fundamentals', code: 'ENG 101', section: 'SECT 07' },
    { id: 8, title: 'English Fundamentals', code: 'ENG 101', section: 'SECT 08' },
  ];

  return (
    <section className='px-4 py-20 bg-[#5168A5]'>
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              code={course.code}
              section={course.section}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
