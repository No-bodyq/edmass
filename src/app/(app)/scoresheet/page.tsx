'use client';

export default function ScoresheetPage() {
  const scores = [
    { id: 1, student: 'Alice Johnson', subject: 'Mathematics', score: 92, grade: 'A' },
    { id: 2, student: 'Alice Johnson', subject: 'English', score: 88, grade: 'A' },
    { id: 3, student: 'Bob Smith', subject: 'Mathematics', score: 75, grade: 'B' },
    { id: 4, student: 'Bob Smith', subject: 'English', score: 82, grade: 'B' },
    { id: 5, student: 'Carol White', subject: 'Mathematics', score: 95, grade: 'A' },
    { id: 6, student: 'Carol White', subject: 'Science', score: 90, grade: 'A' },
  ];

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A':
        return 'bg-green-100 text-green-800';
      case 'B':
        return 'bg-blue-100 text-blue-800';
      case 'C':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Scoresheet</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
          Add Score
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Student</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Subject</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Score</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Grade</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((record) => (
              <tr key={record.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900 font-medium">{record.student}</td>
                <td className="px-6 py-4 text-gray-600">{record.subject}</td>
                <td className="px-6 py-4 text-gray-600 font-semibold">{record.score}/100</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(record.grade)}`}>
                    {record.grade}
                  </span>
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">Edit</button>
                  <button className="text-red-600 hover:text-red-800 font-medium">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
