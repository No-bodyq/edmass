'use client';

export default function TeachersPage() {
  const teachers = [
    { id: 1, name: 'Mr. John Smith', subject: 'Mathematics', school: 'Primary School A', email: 'john@school.com' },
    { id: 2, name: 'Mrs. Sarah Johnson', subject: 'English', school: 'Primary School A', email: 'sarah@school.com' },
    { id: 3, name: 'Mr. David Brown', subject: 'Science', school: 'Secondary School X', email: 'david@school.com' },
    { id: 4, name: 'Ms. Emily Davis', subject: 'History', school: 'Secondary School Y', email: 'emily@school.com' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Teachers</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
          Add Teacher
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Name</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Subject</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">School</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Email</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900 font-medium">{teacher.name}</td>
                <td className="px-6 py-4 text-gray-600">{teacher.subject}</td>
                <td className="px-6 py-4 text-gray-600">{teacher.school}</td>
                <td className="px-6 py-4 text-gray-600">{teacher.email}</td>
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
