'use client';

export default function SchoolCalendarPage() {
  const events = [
    { id: 1, title: 'School Opening', date: '2026-02-20', type: 'holiday' },
    { id: 2, title: 'Term 1 Begins', date: '2026-02-20', type: 'event' },
    { id: 3, title: 'Sports Day', date: '2026-03-15', type: 'event' },
    { id: 4, title: 'Mid-term Break', date: '2026-04-01', type: 'holiday' },
    { id: 5, title: 'Parent-Teacher Conference', date: '2026-04-20', type: 'event' },
    { id: 6, title: 'End of Term 1', date: '2026-06-30', type: 'event' },
  ];

  const getTypeColor = (type: string) => {
    return type === 'holiday' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800';
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">School Calendar</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
          Add Event
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Calendar</h2>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 text-center">
            <p className="text-gray-600">Interactive calendar view coming soon</p>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <div className="space-y-3">
            {events.slice(0, 5).map((event) => (
              <div key={event.id} className="border-l-4 border-blue-500 pl-4">
                <p className="font-medium text-gray-900">{event.title}</p>
                <p className="text-sm text-gray-500">{event.date}</p>
                <span className={`inline-block mt-1 text-xs px-2 py-1 rounded ${getTypeColor(event.type)}`}>
                  {event.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Events Table */}
      <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Event</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Date</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Type</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900 font-medium">{event.title}</td>
                <td className="px-6 py-4 text-gray-600">{event.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(event.type)}`}>
                    {event.type}
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
