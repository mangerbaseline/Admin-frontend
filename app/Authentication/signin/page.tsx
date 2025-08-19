'use client';

import { login } from '../../lib/auth';
import { Mail, Lock } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SigninPage() {

    const router = useRouter();

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        login('demo-token'); // Store dummy token
        router.push('/dashboard'); // Redirect
    };
  return (
    <div className="bg-gray-100 dark:bg-[#0F172A] min-h-screen flex flex-col items-center justify-center px-4 py-8 text-gray-900 dark:text-white">
      
      {/* Header + Breadcrumb */}
      <div className="flex items-center justify-between flex-wrap gap-2 mb-6 w-full max-w-6xl">
        <h2 className="text-xl font-bold">Sign In</h2>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <Link href="/">
          <span className="hover:underline cursor-pointer">Dashboard</span>
          </Link>
          <span className="mx-1">/</span>
          <span className="text-indigo-600 dark:text-indigo-400 font-medium">Sign In</span>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-white dark:bg-[#1E293B] rounded-xl shadow p-6 md:p-8 w-full max-w-6xl flex flex-col md:flex-row gap-8">
        
        {/* Left: Form */}
        <div className='w-full max-w[390px] sm:p-12 xl:w-1/2'>
        <div className="flex-1 space-y-6   xl:px-15 xl:pt-15   w-full">
          <button className="w-full flex items-center font-medium justify-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-500 rounded-md py-4 text-sm bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>

          <div className="flex items-center gap-2 text-gray-500 font-medium  dark:text-gray-400 text-base">
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600" />
            Or sign in with email
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600" />
          </div>

          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="text-base mb-1 block  dark:text-gray-300">Email</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-4 pr-10 rounded-md text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Mail className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-base mb-1 block  dark:text-gray-300">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-4 pr-10 rounded-md text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Lock className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-indigo-500" />
                Remember me
              </label>
              <Link href="/Authentication/forgetpassword" className=" dark:text-indigo-400 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              onClick={handleLogin}
              className="w-full bg-[#635BFF] hover:bg-[#4f47e4] text-white py-4 rounded-md text-sm font-semibold transition"
            >
              Sign In
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
            Don’t have any account?{' '}
            <Link href="/Authentication/signup" className="text-indigo-600 dark:text-indigo-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
        </div>
        {/* Right: Welcome Card */}
        <div className="flex-1 bg-gray-100 dark:bg-[#0F172A] border border-gray-200 dark:border-gray-700 rounded-lg px-12 pt-12 flex flex-col justify-center text-left">
          <h2 className=" dark:text-white font-semibold pb-7 text-3xl mb-2">NextAdmin</h2>
          <p className="text-xl text-gray-500 pb-3 dark:text-gray-400 mb-1">Sign in to your account</p>
          <h3 className="text-4xl font-semibold  dark:text-white pb-3 mb-2">Welcome Back!</h3>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-xs">
            Please sign in to your account by completing the necessary fields below
          </p>
          <img src="https://demo.nextadmin.co/images/grids/grid-02.svg" alt="" className="mt-4" />
        </div>
      </div>
    </div>
  );
}
