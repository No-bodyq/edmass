'use client';

export default function StudentsPage() {
  const students = [
    { id: 1, name: 'Alice Johnson', grade: '10A', school: 'Secondary School X', email: 'alice@student.com' },
    { id: 2, name: 'Bob Smith', grade: '10B', school: 'Secondary School Y', email: 'bob@student.com' },
    { id: 3, name: 'Carol White', grade: '9A', school: 'Secondary School X', email: 'carol@student.com' },
    { id: 4, name: 'David Lee', grade: '11A', school: 'Secondary School Y', email: 'david@student.com' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Students</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
          Add Student
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Name</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Grade</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">School</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Email</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900 font-medium">{student.name}</td>
                <td className="px-6 py-4 text-gray-600">{student.grade}</td>
                <td className="px-6 py-4 text-gray-600">{student.school}</td>
                <td className="px-6 py-4 text-gray-600">{student.email}</td>
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
