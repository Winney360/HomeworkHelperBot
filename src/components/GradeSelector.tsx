import React from 'react';
import { X, BookOpen, Users, Star } from 'lucide-react';

interface GradeSelectorProps {
  onSelectGrade: (grade: number) => void;
  onClose: () => void;
}

const GradeSelector: React.FC<GradeSelectorProps> = ({ onSelectGrade, onClose }) => {
  const grades = [
    { number: 1, description: 'Foundation skills, basic reading and counting' },
    { number: 2, description: 'Building literacy and numeracy skills' },
    { number: 3, description: 'Developing problem-solving abilities' },
    { number: 4, description: 'Advanced reading and basic mathematics' },
    { number: 5, description: 'Critical thinking and analysis' },
    { number: 6, description: 'Preparation for intermediate level' },
    { number: 7, description: 'Advanced topics and concepts' },
    { number: 8, description: 'Pre-secondary preparation' },
    { number: 9, description: 'Complex problem solving and analysis' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-6 w-6 text-green-600" />
              <h2 className="text-xl font-semibold text-gray-900">
                Select Your Child's Grade
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          <p className="text-gray-600 mt-2">
            Choose the grade level to get tailored homework assistance based on Kenya's CBC curriculum
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {grades.map((grade) => (
              <button
                key={grade.number}
                onClick={() => onSelectGrade(grade.number)}
                className="p-4 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all duration-200 text-left group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="bg-green-100 p-2 rounded-full group-hover:bg-green-200 transition-colors">
                      <Star className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                      Grade {grade.number}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {grade.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Users className="h-4 w-4" />
            <span>
              Don't worry - you can change the grade level anytime during your session
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradeSelector;