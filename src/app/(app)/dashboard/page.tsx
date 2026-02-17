"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Students from "../../../../public/dashboard-students.svg";
import Teachers from "../../../../public/dashboard-teachers.svg";
import Classrooms from "../../../../public/dashboard-classrooms.svg";
import Subjects from "../../../../public/dashboard-subjects.svg";
import Image from "next/image";

export default function DashboardPage() {
  const stats = [
    {
      title: "Students",
      value: "1,200",
      icon: Students,
      iconBg: "#FFF0B3",
    },
    { title: "Teachers", value: "1,200", icon: Teachers, iconBg: "#FFEBE6" },
    {
      title: "Classrooms",
      value: "1,200",
      icon: Classrooms,
      iconBg: "#E3FCEF",
    },
    {
      title: "Total Number Subjects",
      value: "24",
      icon: Subjects,
      iconBg: "#EAE6FF",
    },
  ];

  const chartData = [
    // First Term (January - April)
    { name: "Jan", paid: 35, incomplete: 15, unpaid: 8 },
    { name: "Feb", paid: 38, incomplete: 18, unpaid: 9 },
    { name: "Mar", paid: 40, incomplete: 20, unpaid: 10 },
    { name: "Apr", paid: 42, incomplete: 22, unpaid: 11 },
    // Second Term (May - August)
    { name: "May", paid: 40, incomplete: 18, unpaid: 9 },
    { name: "Jun", paid: 42, incomplete: 16, unpaid: 7 },
    { name: "Jul", paid: 39, incomplete: 14, unpaid: 6 },
    { name: "Aug", paid: 40, incomplete: 15, unpaid: 5 },
    // Third Term (September - December)
    { name: "Sep", paid: 30, incomplete: 12, unpaid: 8 },
    { name: "Oct", paid: 32, incomplete: 10, unpaid: 8 },
    { name: "Nov", paid: 31, incomplete: 9, unpaid: 8 },
    { name: "Dec", paid: 28, incomplete: 8, unpaid: 7 },
  ];

  // Calculate average percentages for gradient stops
  const avgTotals = chartData.reduce(
    (acc, item) => ({
      paid: acc.paid + item.paid,
      incomplete: acc.incomplete + item.incomplete,
      unpaid: acc.unpaid + item.unpaid,
    }),
    { paid: 0, incomplete: 0, unpaid: 0 },
  );
  const total = avgTotals.paid + avgTotals.incomplete + avgTotals.unpaid;
  const unpaidPercent = (avgTotals.unpaid / total) * 100;
  const incompletePercent = (avgTotals.incomplete / total) * 100;
  const incompleteEnd = unpaidPercent + incompletePercent;

  return (
    <div>
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <span>Home</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-900 font-medium">Dashboard</span>
      </nav>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded p-6"
            style={{ boxShadow: "0px 0px 1px rgba(9, 30, 66, 0.31)" }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold mt-2 text-gray-900">
                  {stat.value}
                </p>
                <p className="text-gray-600 text-sm font-medium">
                  {stat.title}
                </p>
              </div>
              <div
                className="flex items-center justify-center rounded-full w-15 h-15"
                style={{ backgroundColor: stat.iconBg }}
              >
                <Image
                  src={stat.icon}
                  alt={stat.title}
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Earnings Section */}
      <h2 className="text-lg font-bold text-gray-900 mt-20 mb-4">Earnings</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side - Chart */}
        <div
          className="lg:col-span-2 bg-white rounded p-6"
          style={{ boxShadow: "0px 0px 1px rgba(9, 30, 66, 0.31)" }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-6">
              {/* Legend */}
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-600">Paid</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-sm text-gray-600">Incomplete</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-sm text-gray-600">Unpaid</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="period"
                    defaultChecked
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-600">Monthly</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="period" className="w-4 h-4" />
                  <span className="text-sm text-gray-600">Termly</span>
                </label>
              </div>
              <select className="text-sm text-gray-700 bg-white border border-gray-300 px-4 py-2 rounded cursor-pointer hover:bg-gray-50">
                <option>Primary One</option>
                <option>Primary Two</option>
                <option>Primary Three</option>
                <option>Primary Four</option>
                <option selected>Primary Five</option>
                <option>Primary Six</option>
                <option>JSS One</option>
                <option>JSS Two</option>
                <option>JSS Three</option>
                <option>SSS One</option>
                <option>SSS Two</option>
                <option>SSS Three</option>
              </select>
            </div>
          </div>

          {/* Chart Container */}
          <div className="h-96 w-full mt-20">
            <ResponsiveContainer width="100%" height="100%">
              <svg width="100%" height="100%">
                <defs>
                  <linearGradient
                    id="paidGradient"
                    x1="0%"
                    y1="100%"
                    x2="0%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#72FFBB" />
                    <stop offset="100%" stopColor="#3CFE38" />
                  </linearGradient>
                </defs>
              </svg>
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "8px",
                  }}
                  formatter={(value) => value}
                  labelFormatter={(label) => `${label}`}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-white p-2 border border-gray-300 rounded text-sm">
                          <p className="font-medium">{data.name}</p>
                          <p className="text-green-600">Paid: {data.paid}</p>
                          <p className="text-yellow-600">
                            Incomplete: {data.incomplete}
                          </p>
                          <p className="text-red-600">Unpaid: {data.unpaid}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar
                  dataKey="unpaid"
                  stackId="status"
                  fill="#FF5630"
                  radius={[0, 0, 8, 8]}
                />
                <Bar
                  dataKey="incomplete"
                  stackId="status"
                  fill="#FFC702"
                  radius={[0, 0, 0, 0]}
                />
                <Bar
                  dataKey="paid"
                  stackId="status"
                  fill="url(#paidGradient)"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-4">
          <div
            className="bg-green-50 rounded p-6"
            style={{ boxShadow: "0px 0px 1px rgba(9, 30, 66, 0.31)" }}
          >
            <div className="flex items-center justify-center">
              <div className="w-32 h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[{ value: 70 }, { value: 30 }]}
                      cx="50%"
                      cy="50%"
                      innerRadius={20}
                      outerRadius={50}
                      dataKey="value"
                      startAngle={90}
                      endAngle={-270}
                    >
                      <Cell fill="#72FFBB" />
                      <Cell fill="#D4F8E8" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Paid</p>
                <p className="text-2xl font-bold text-gray-900">₦56,000,000</p>
              </div>
            </div>
          </div>

          <div
            className="bg-red-50 rounded p-6"
            style={{ boxShadow: "0px 0px 1px rgba(9, 30, 66, 0.31)" }}
          >
            <div className="flex items-center justify-center">
              <div className="w-32 h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[{ value: 45 }, { value: 55 }]}
                      cx="50%"
                      cy="50%"
                      innerRadius={20}
                      outerRadius={50}
                      dataKey="value"
                      startAngle={90}
                      endAngle={-270}
                    >
                      <Cell fill="#FF5630" />
                      <Cell fill="#FFD4CC" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div>
                <p className="text-sm text-red-600 mb-1">Unpaid</p>
                <p className="text-2xl font-bold text-gray-900">₦12,000,000</p>
              </div>
            </div>
          </div>

          {/* Incomplete Card */}
          <div
            className="bg-yellow-50 rounded p-6"
            style={{ boxShadow: "0px 0px 1px rgba(9, 30, 66, 0.31)" }}
          >
            <div className="flex items-center justify-center">
              <div className="w-32 h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[{ value: 60 }, { value: 40 }]}
                      cx="50%"
                      cy="50%"
                      innerRadius={20}
                      outerRadius={50}
                      dataKey="value"
                      startAngle={90}
                      endAngle={-270}
                    >
                      <Cell fill="#FFC702" />
                      <Cell fill="#FFE680" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div>
                <p className="text-sm text-yellow-600 mb-1">Incomplete</p>
                <p className="text-2xl font-bold text-gray-900">₦52,000,000</p>
              </div>
            </div>
          </div>

          {/* Add New Button */}
          <button className="w-full bg-purple-100 rounded p-6 flex items-center justify-center gap-2 text-purple-700 font-medium hover:bg-purple-200">
            <span className="text-2xl">+</span> Add new
          </button>
        </div>
      </div>
    </div>
  );
}
