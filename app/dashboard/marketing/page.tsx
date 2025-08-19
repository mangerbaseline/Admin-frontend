'use client';

const campaignData = [
  { name: 'Jan', FacebookAds: 40, GoogleAds: 60 },
  { name: 'Feb', FacebookAds: 80, GoogleAds: 90 },
  { name: 'Mar', FacebookAds: 50, GoogleAds: 140 },
  { name: 'Apr', FacebookAds: 120, GoogleAds: 100 },
  { name: 'May', FacebookAds: 240, GoogleAds: 200 },
  { name: 'Jun', FacebookAds: 190, GoogleAds: 240 },
  { name: 'Jul', FacebookAds: 130, GoogleAds: 240 },
  { name: 'Aug', FacebookAds: 90, GoogleAds: 230 },
  { name: 'Sep', FacebookAds: 20, GoogleAds: 70 },
  { name: 'Oct', FacebookAds: 60, GoogleAds: 100 },
  { name: 'Nov', FacebookAds: 130, GoogleAds: 80 },
  { name: 'Dec', FacebookAds: 110, GoogleAds: 120 },
];

const campaigns = [
  { title: 'Best Headsets Giveaway', status: 'In Queue', color: 'bg-yellow-100 text-yellow-600', conversion: '0%(0)' },
  { title: 'iPhone 14 Plus Giveaway', status: 'Sent', color: 'bg-green-100 text-green-600', conversion: '37%(247)' },
  { title: 'Macbook Pro M1 Giveaway', status: 'Sent', color: 'bg-green-100 text-green-600', conversion: '18%(6.4k)' },
  { title: 'Affiliation Program', status: 'Sent', color: 'bg-green-100 text-green-600', conversion: '12%(2.6k)' },
  { title: 'Google AdSense', status: 'In Draft', color: 'bg-indigo-100 text-indigo-600', conversion: '0.01%(1)' },
];

import Image from 'next/image';

import {
  BarChart3,
  Users,
  DollarSign,
  MoreVertical,
  Edit,
  Trash2,
  ExternalLink,
  ChevronDown,
  MoreHorizontal,
} from 'lucide-react';

import { useState, useRef, useEffect } from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
    LineChart,
  Line,
  Area,
  CartesianGrid,
} from 'recharts';

const topChannels = [
  {
    source: 'Google',
    icon: '/icons/google.png',
    FacebookAds: '3.5K',
    revenue: '$4,220.00',
    sales: '3456',
    conversion: '2.59%',
  },
  {
    source: 'X.com',
    icon: '/icons/x.png',
    FacebookAds: '3.5K',
    revenue: '$4,220.00',
    sales: '3456',
    conversion: '2.59%',
  },
  {
    source: 'Github',
    icon: '/icons/github.png',
    FacebookAds: '3.5K',
    revenue: '$4,220.00',
    sales: '3456',
    conversion: '2.59%',
  },
  {
    source: 'Vimeo',
    icon: '/icons/vimeo.png',
    FacebookAds: '3.5K',
    revenue: '$4,220.00',
    sales: '3456',
    conversion: '2.59%',
  },
  {
    source: 'Facebook',
    icon: '/icons/facebook.png',
    FacebookAds: '3.5K',
    revenue: '$4,220.00',
    sales: '3456',
    conversion: '2.59%',
  },
];

const stats = [
  {
    label: 'Avg. Client Rating',
    value: '7.8/10',
    icon: <BarChart3 className="text-indigo-600 w-6 h-6" />,
    trend: '+2.5%',
    trendColor: 'text-green-500',
    description: 'than last Week',
  },
  {
    label: 'Instagram Followers',
    value: '522K',
    icon: <Users className="text-sky-500 w-6 h-6" />,

    trend: '-1.5%',
    trendColor: 'text-red-500',
    description: 'than last Week',
  },
  {
    label: 'Google Ads CPC',
    value: '5.03',
    icon: <DollarSign className="text-orange-500 w-6 h-6" />,
    trend: '+2.6%',
    trendColor: 'text-green-500',
    description: 'than last Week',
    hasMenu: true,
  },
];

const links = [
  { name: 'Google Analytics', icon: '/icons/google-analytics.png' },
  { name: 'FacebookAds', icon: '/icons/facebook.png' },
  { name: 'Seranking', icon: '/icons/seranking.png' },
  { name: 'Instagram Ads', icon: '/icons/instagram.png' },
];

const chartData_1 = [
  { name: 'S', FacebookAds: 160 },
  { name: 'S', FacebookAds: 380 },
  { name: 'M', FacebookAds: 200 },
  { name: 'T', FacebookAds: 300 },
  { name: 'W', FacebookAds: 180 },
  { name: 'T', FacebookAds: 190 },
  { name: 'F', FacebookAds: 290 },
];

export default function DashboardPage() {
  const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        const handleClickOutside =(event: MouseEvent) => {
            if(menuRef.current && !menuRef.current.contains(event.target as Node)){
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    },[menuOpen]);
  return (
    <div className="p-3 dark:bg-gray-900 min-h-screen space-y-6">
{/* Highlights Section */}
<div className=" dark:bg-gray-900 rounded-xl">
  <div className="flex justify-between items-center mb-6">
    <div className=''>
      <h2 className="text-2xl mb-2 font-bold text-gray-900 dark:text-white">Highlights</h2>
      <p className="text-base text-gray-500 dark:text-gray-400">Latest social statistics</p>
    </div>
    
    {/* Global Edit/Delete Menu Button */}
    <div className="relative" ref={menuRef}>
      <button
        className="text-gray-400 w-9 h-8 hover:text-gray-600 dark:hover:text-gray-300"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <MoreHorizontal className="w-full h-full rounded bg-white" />
      </button>

      {menuOpen && (
        <div className="absolute right-0 mt-2 w-28 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg z-10">
          <button className="flex items-center w-full px-3 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
            <Edit className="w-4 h-4 mr-2" /> Edit
          </button>
          <button className="flex items-center w-full px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600">
            <Trash2 className="w-4 h-4 mr-2" /> Delete
          </button>
        </div>
      )}
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {stats.map((stat, idx) => (
      <div key={idx} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm">
        <div className="flex items-center w-8  gap-3 mb-4">{stat.icon}</div>
        <h4 className="text-gray-600 mt-5 mb-2 dark:text-gray-300 text-xl font-medium">
          {stat.label}
        </h4>
        <p className="text-2xl font-bold text-gray-900 mb-3 dark:text-white">{stat.value}</p>
        <p className={`text-sm mt-1 ${stat.trendColor}`}>
          {stat.trend}{' '}
          <span className="text-gray-500 dark:text-gray-400 ml-1">
            {stat.description}
          </span>
        </p>
      </div>
    ))}
  </div>
</div>


      {/* External Links + Campaign FacebookAds */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
        {/* External Links */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <div className="flex border-b border-gray-200 dark:border-gray-700 justify-between items-center p-6 ">
            <div className=''>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                External Links
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Most used resources</p>
            </div>
            <button>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <div className="py-5 px-3">
            {links.map((link, idx) => (
              <div key={idx} className="flex justify-between items-center p-5">
                <div className="flex items-center gap-3">
                  <img src={link.icon} alt={link.name} className="w-6 h-6 rounded" />
                  <span className="font-medium text-gray-800 dark:text-gray-200">{link.name}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Campaign FacebookAds */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm ">
            <div className='pt-8 py-6'>
          <div className="flex justify-between px-6 py-5 items-start mb-4 border-b border-gray-200 dark:border-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Campaign FacebookAds
              </h2>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Last Campaign Performance</p>
            </div>
            <div className="text-right ">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">784K</p>
              <p className="text-sm text-red-500">-1.5%</p>
            </div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={180} className={'my-6'}>
            <BarChart data={chartData_1}>
              <XAxis dataKey="name" axisLine={true} tickLine={true} />
              <YAxis ticks={[0, 100, 200, 300, 400, 500]} domain={[0, 400]}  tickLine={true} axisLine={true} allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="FacebookAds" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={14} />
            </BarChart>
          </ResponsiveContainer>


        </div>
      </div>
     <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between dark:text-white items-center mb-4">
        <h2 className="text-lg font-semibold dark:text-white text-gray-900">Top Channels</h2>
        <MoreHorizontal className="text-gray-400 w-5 h-5 cursor-pointer" />
      </div>

      <div className="overflow-x-auto dark:text-white">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-gray-500 dark:text-white border-b">
              <th className="py-3">SOURCE</th>
              <th className="py-3">FacebookAds</th>
              <th className="py-3">REVENUES</th>
              <th className="py-3">SALES</th>
              <th className="py-3">CONVERSION</th>
            </tr>
          </thead>
          <tbody>
            {topChannels.map((channel, index) => (
              <tr
                key={index}
                className="border-b last:border-0  transition"
              >
<td className="py-4 font-medium dark:text-white text-gray-800">
  <div className="flex items-center gap-3">
    <Image
      src={channel.icon}
      alt={channel.source}
      width={20}
      height={20}
      className="rounded-full"
    />
    {channel.source}
  </div>
</td>

                <td className="py-4 dark:text-white text-gray-700">{channel.FacebookAds}</td>
                <td className="py-4 text-emerald-600 font-semibold">
                  {channel.revenue}
                </td>
                <td className="py-4 dark:text-white text-gray-700">{channel.sales}</td>
                <td className="py-4 dark:text-white text-gray-700">{channel.conversion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Campaign FacebookAds */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="mb-4">
        <h2 className="text-xl font-bold dark:text-white text-gray-900">Campaign FacebookAds</h2>
        <p className="text-2xl font-bold dark:text-white text-gray-900">$560.93 <span className="text-green-500 text-sm">+2.5%</span></p>
        <p className="text-sm text-gray-500">Average cost per interaction</p>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={campaignData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="FacebookAds"
            stroke="#6366f1"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="GoogleAds"
            stroke="#8b5cf6"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
      </div>

      {/* Featured Campaigns */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-lg font-semibold dark:text-white text-gray-900">Featured Campaigns</h2>
            <p className="text-sm text-gray-500">75% activity growth</p>
          </div>
          <div className="text-gray-400">...</div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <button className="border px-3 py-1 rounded-lg text-sm text-indigo-600 border-indigo-500 bg-indigo-50">Google</button>
          <button className="border px-3 py-1 rounded-lg text-sm text-gray-600">Facebook</button>
          <button className="border px-3 py-1 rounded-lg text-sm text-red-500">Instagram</button>
          <button className="border px-3 py-1 rounded-lg text-sm text-blue-600">Seranking</button>
        </div>

        <div className="grid grid-cols-3 dark:text-white text-xs text-gray-500 font-medium py-2 border-b">
          <span>EMAIL TITLE</span>
          <span>STATUS</span>
          <span>CONVERSION</span>
        </div>
        <div>
          {campaigns.map((item, i) => (
            <div key={i} className="grid grid-cols-3 py-3 items-center text-sm border-b dark:text-white text-gray-700">
              <span>{item.title}</span>
              <span>
                <span className={`px-2 py-1 rounded-md text-xs font-medium ${item.color}`}>{item.status}</span>
              </span>
              <span>{item.conversion}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>
  );
}