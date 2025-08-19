'use client';

import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import {
  XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell,
} from 'recharts';

const cardStats = [
  {
    title: 'Clients Added',
    value: 197,
    change: '+2.5%',
    status: 'up',
    color: 'text-white bg-green-600',
    progress: 60,
  },
  {
    title: 'Contracts Signed',
    value: 745,
    change: '-1.5%',
    status: 'down',
    color: 'text-white bg-red-600',
    progress: 25,
  },
  {
    title: 'Invoice Sent',
    value: 512,
    change: '+0.5%',
    status: 'up',
    color: 'text-white bg-green-600',
    progress: 80,
  },
];

const paymentsData = [
  { month: 'Jan', received: 10, due: 8 },
  { month: 'Feb', received: 20, due: 15 },
  { month: 'Mar', received: 35, due: 18 },
  { month: 'Apr', received: 45, due: 25 },
  { month: 'May', received: 60, due: 35 },
  { month: 'Jun', received: 70, due: 40 },
  { month: 'Jul', received: 80, due: 50 },
  { month: 'Aug', received: 85, due: 55 },
  { month: 'Sep', received: 78, due: 60 },
  { month: 'Oct', received: 70, due: 65 },
  { month: 'Nov', received: 60, due: 70 },
  { month: 'Dec', received: 68, due: 75 },
];

const deviceData = [
  { name: 'Desktop', value: 60 },
  { name: 'Mobile', value: 20 },
  { name: 'Tablet', value: 10 },
  { name: 'Unknown', value: 5 },
];

const COLORS = ['#4F46E5', '#60A5FA', '#818CF8', '#CBD5E1'];

export default function DashboardOverview() {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">This Week’s Overview</h2>
        <div className="text-sm text-gray-500 dark:text-white">
          SORT BY: <span className="font-medium text-black dark:text-white"> Current Week</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 dark:bg-gray-900 gap-4 mb-6">
        {cardStats.map((item, i) => (
          <div key={i} className="bg-white rounded-xl p-7 shadow-sm dark:bg-gray-800 flex justify-between items-center">
            <div>
              <h3 className="text-3xl dark:text-white text-black font-semibold pb-6">{item.value}</h3>
              <div className="text-base text-gray-500">{item.title}</div>
              <div className={`inline-flex items-center mt-2 px-2 py-1 rounded text-xs font-medium ${item.color}`}>
                {item.status === 'up' ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                {item.change} 
              </div>
                <span className="text-sm text-gray-500 ml-2">Since last week</span>
            </div>
            <div className="w-14 h-14 relative">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path className="text-gray-200" strokeWidth="3" stroke="currentColor" fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-indigo-500" strokeWidth="3" stroke="currentColor" fill="none"
                  strokeDasharray={`${item.progress}, 100`}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
            </div>
          </div>
        ))}
      </div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {/* Payments Overview */}
  <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Payments Overview</h3>
      <select className="text-sm bg-gray-100 dark:bg-gray-700 dark:text-white px-2 py-1 rounded">
        <option>Monthly</option>
      </select>
    </div>
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={paymentsData}>
        <XAxis dataKey="month" tick={{ fill: 'currentColor' }} />
        <YAxis/>
        <Tooltip
          contentStyle={{
            backgroundColor: '#1F2937',
            border: 'none',
            borderRadius: '0.375rem',
            color: 'white',
          }}
          labelStyle={{ color: 'white' }}
        />
        <Area type="monotone" dataKey="received" stroke="#4F46E5" fill="#EEF2FF" />
        <Area type="monotone" dataKey="due" stroke="#818CF8" fill="#E0E7FF" />
      </AreaChart>
    </ResponsiveContainer>
    <div className="mt-4 flex justify-center text-sm font-medium text-gray-800 dark:text-white">
      <span >Received Amount <span className="block text-xl font-bold">$580.00</span></span>
      <span className='border-r mx-20 border-gray-200'></span>
      <span>Due Amount <span className="block text-xl font-bold">$628.00</span></span>
    </div>
  </div>

  {/* Used Devices */}
  <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Used Devices</h3>
      <select className="text-sm bg-gray-100 dark:bg-gray-700 dark:text-white px-2 py-1 rounded">
        <option>Monthly</option>
      </select>
    </div>
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={deviceData}
          cx="50%"
          cy="50%"
          innerRadius={45}
          outerRadius={65}
          paddingAngle={2}
          dataKey="value"
        >
          {deviceData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    <div className="text-center text-sm mt-2">
      <p className="font-bold text-lg text-gray-800 dark:text-white">Visitors<br />2500</p>
      <div className="text-xs text-gray-500 dark:text-gray-300 mt-2">
        Desktop 60% · Mobile 20% · Tablet 10% · Unknown 5%
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
