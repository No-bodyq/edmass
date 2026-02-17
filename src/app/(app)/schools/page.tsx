'use client';

export default function SchoolsPage() {
  const schools = [
    { id: 1, name: 'Primary School A', location: 'District 1', students: 450 },
    { id: 2, name: 'Primary School B', location: 'District 2', students: 380 },
    { id: 3, name: 'Secondary School X', location: 'District 1', students: 320 },
    { id: 4, name: 'Secondary School Y', location: 'District 3', students: 410 },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Schools</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
          Add School
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">School Name</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Location</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Students</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {schools.map((school) => (
              <tr key={school.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900">{school.name}</td>
                <td className="px-6 py-4 text-gray-600">{school.location}</td>
                <td className="px-6 py-4 text-gray-600">{school.students}</td>
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
