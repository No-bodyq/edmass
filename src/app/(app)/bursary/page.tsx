'use client';

export default function BursaryPage() {
  const payments = [
    { id: 1, student: 'Alice Johnson', amount: 5000, status: 'Paid', date: '2026-02-01', term: 'Term 1' },
    { id: 2, student: 'Bob Smith', amount: 5000, status: 'Pending', date: '2026-02-15', term: 'Term 1' },
    { id: 3, student: 'Carol White', amount: 5000, status: 'Paid', date: '2026-02-01', term: 'Term 1' },
    { id: 4, student: 'David Lee', amount: 5000, status: 'Overdue', date: '2026-01-31', term: 'Term 1' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const totalRevenue = payments.filter(p => p.status === 'Paid').reduce((sum, p) => sum + p.amount, 0);
  const pendingPayments = payments.filter(p => p.status === 'Pending').reduce((sum, p) => sum + p.amount, 0);
  const overduePayments = payments.filter(p => p.status === 'Overdue').reduce((sum, p) => sum + p.amount, 0);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Bursary</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
          Record Payment
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-green-500 rounded-lg shadow-lg p-6 text-white">
          <div>
            <p className="text-green-100 text-sm font-medium">Total Revenue</p>
            <p className="text-3xl font-bold mt-2">KES {totalRevenue.toLocaleString()}</p>
          </div>
        </div>
        <div className="bg-yellow-500 rounded-lg shadow-lg p-6 text-white">
          <div>
            <p className="text-yellow-100 text-sm font-medium">Pending Payments</p>
            <p className="text-3xl font-bold mt-2">KES {pendingPayments.toLocaleString()}</p>
          </div>
        </div>
        <div className="bg-red-500 rounded-lg shadow-lg p-6 text-white">
          <div>
            <p className="text-red-100 text-sm font-medium">Overdue Amount</p>
            <p className="text-3xl font-bold mt-2">KES {overduePayments.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Student</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Amount</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Term</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Date</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Status</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900 font-medium">{payment.student}</td>
                <td className="px-6 py-4 text-gray-600">KES {payment.amount.toLocaleString()}</td>
                <td className="px-6 py-4 text-gray-600">{payment.term}</td>
                <td className="px-6 py-4 text-gray-600">{payment.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(payment.status)}`}>
                    {payment.status}
                  </span>
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">View</button>
                  <button className="text-green-600 hover:text-green-800 font-medium">Pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
