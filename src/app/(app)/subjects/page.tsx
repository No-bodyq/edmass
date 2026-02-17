'use client';

export default function SubjectsPage() {
  const subjects = [
    { id: 1, name: 'Mathematics', code: 'MATH101', teacher: 'Mr. John Smith', students: 45 },
    { id: 2, name: 'English', code: 'ENG101', teacher: 'Mrs. Sarah Johnson', students: 48 },
    { id: 3, name: 'Science', code: 'SCI101', teacher: 'Mr. David Brown', students: 42 },
    { id: 4, name: 'History', code: 'HIST101', teacher: 'Ms. Emily Davis', students: 50 },
    { id: 5, name: 'Physical Education', code: 'PE101', teacher: 'Mr. Mike Wilson', students: 55 },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Subjects</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
          Add Subject
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Subject</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Code</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Teacher</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Students</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => (
              <tr key={subject.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900 font-medium">{subject.name}</td>
                <td className="px-6 py-4 text-gray-600">{subject.code}</td>
                <td className="px-6 py-4 text-gray-600">{subject.teacher}</td>
                <td className="px-6 py-4 text-gray-600">{subject.students}</td>
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
