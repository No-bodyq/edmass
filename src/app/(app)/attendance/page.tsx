'use client';

export default function AttendancePage() {
  const attendance = [
    { id: 1, student: 'Alice Johnson', date: '2026-02-17', status: 'Present', class: '10A' },
    { id: 2, student: 'Bob Smith', date: '2026-02-17', status: 'Present', class: '10B' },
    { id: 3, student: 'Carol White', date: '2026-02-17', status: 'Absent', class: '9A' },
    { id: 4, student: 'David Lee', date: '2026-02-17', status: 'Late', class: '11A' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Attendance</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
          Mark Attendance
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Student</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Class</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Date</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Status</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((record) => (
              <tr key={record.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900 font-medium">{record.student}</td>
                <td className="px-6 py-4 text-gray-600">{record.class}</td>
                <td className="px-6 py-4 text-gray-600">{record.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    record.status === 'Present' ? 'bg-green-100 text-green-800' :
                    record.status === 'Absent' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {record.status}
                  </span>
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
