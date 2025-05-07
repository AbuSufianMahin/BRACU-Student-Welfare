import React from 'react';

interface CourseCardProps {
  title: string;
  code: string;
  section: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, code, section }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow">
      <div className="p-4 bg-blue-50">
        <div className="h-32 flex items-center justify-center bg-blue-100 rounded">
          <div className="text-center text-blue-800">
            <div className="text-opacity-25 text-xs font-medium">
              {/* Simulating the word cloud effect */}
              <div className="opacity-50">English Notes Research</div>
              <div className="opacity-70">Literature Grammar</div>
              <div className="opacity-90 font-bold">English</div>
              <div className="opacity-70">Writing Speaking</div>
              <div className="opacity-50">Academic Language</div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-xs text-gray-600">{code}</p>
        <p className="text-xs text-gray-600">{section}</p>
      </div>
    </div>
  );
};

export default CourseCard;