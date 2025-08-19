'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, LogOut, User, Settings } from 'lucide-react';
import { login, logout } from '../lib/auth';

// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
// 
export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !(dropdownRef.current as any).contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

    
        const router = useRouter();
    
        const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            login('demo-token'); // Store dummy token
            router.push('/dashboard'); // Redirect
        };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-gray-700 dark:text-white text-base sm:text-lg font-medium px-4 py-2 rounded hover:text-indigo-500 focus:outline-none"
      >
        <User />
        <span className="hidden sm:inline text-nowrap">My Profile</span>
        <ChevronDown
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 sm:w-72 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-xl z-50">
          <ul className="text-sm sm:text-base">
            {/* Profile Summary */}
            <li className="border-b border-gray-200 dark:border-gray-700">
              <span className="flex px-5 py-3.5 items-center gap-3">
                <User size={44} />
                <div>
                  <span className="block font-medium text-gray-800 dark:text-white">My Profile</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">test@example.com</span>
                </div>
              </span>
            </li>

            {/* View Profile */}
            <li className="pt-2 px-2">
              <Link
                href="/dashboard/profile"
                className="block px-2.5 py-2 flex gap-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                <User /> <span>View Profile</span>
              </Link>
            </li>

            {/* Settings */}
            <li className="py-2 px-2">
              <Link
                href="#"
                className="block px-2.5 py-2 flex gap-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                <Settings /> <span>Settings</span>
              </Link>
            </li>

            <hr className="my-1 border-gray-200 dark:border-gray-700" />

            {/* Logout */}
            <li className="p-2">
      <button
        onClick={() => {
          logout();
          router.push('/Authentication/signin');
        }}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
