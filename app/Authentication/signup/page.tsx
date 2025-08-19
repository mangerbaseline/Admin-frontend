'use client';

import { Mail, Lock, User } from 'lucide-react';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className=" dark:bg-[#0F172A] min-h-screen flex flex-col items-center justify-center px-8 py-6 text-gray-900 dark:text-white">
      
      {/* Header & Breadcrumb */}
      <div className="flex items-center justify-between flex-wrap gap-2 mb-6 w-full max-w-6xl">
        <h2 className="text-3xl font-semibold dark:text-white text-gray-900">Sign Up</h2>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <Link href="/">
          <span className="hover:underline cursor-pointer">Dashboard</span>
          </Link>
          <span className="mx-1">/</span>
          <span className="text-indigo-600 dark:text-indigo-400 font-medium">Sign Up</span>
        </div>
      </div>

      {/* Card */}
      <div className=" dark:bg-[#1E293B] bg-white rounded-xl w-full shadow p-6 md:p-8 flex flex-col md:flex-row gap-8">
        
        {/* Left Side: Form */}
        <div className='w-full max-w[390px] sm:p-12 xl:w-1/2'>
        <div className="flex-1 space-y-6   xl:px-15 xl:pt-15   w-full">
         <Link href="#" className=''> <button  className="w-full bg-gray-100 dark:bg-gray-800 text-gray-500 font-medium  flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition py-4">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Sign up with Google
          </button></Link>

          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-semibold text-sm">
            <div className="flex-1 border-t  border-gray-300 dark:border-gray-600 " />
            Or sign up with email
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600" />
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Name */}
            <div className=''>
              <label className="text-sm mb-1 block black dark:text-gray-300">Name</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-4 pr-10 rounded-md text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <User className="absolute right-3 top-5 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm mb-1 block black dark:text-gray-300">Email</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-4 pr-10 rounded-md text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Mail className="absolute right-3 top-5 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm mb-1 block black dark:text-gray-300">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-4 pr-10 rounded-md text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Lock className="absolute right-3 top-5 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm mb-1 block black dark:text-gray-300">Re-type Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-4 pr-10 rounded-md text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Lock className="absolute right-3 top-5 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#635BFF] hover:bg-[#4f47e4] text-white py-4 rounded-md text-base font-semibold transition"
            >
              Create account
            </button>
          </form>

          <p className="mt-4 text-base text-center text-gray-500 dark:text-gray-400">
            Already have an account?{' '}
            <Link href="/Authentication/signin" className="text-indigo-600 dark:text-indigo-400 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
        </div>  
        {/* Right Side: Info */}
        <div className="flex-1 w-1/2  bg-gray-50 dark:bg-[#0F172A] border lg:block hidden border-gray-200 dark:border-gray-700 rounded-lg px-12 pt-12 flex flex-col justify-center text-left">
          <h2 className=" font-semibold text-3xl pb-7 mb-2">NextAdmin</h2>
          <p className="text-xl dark:text-gray-400 pb-3 mb-1">Get Started for Free</p>
          <h3 className="text-4xl font-semibold dark:text-white pb-3 mb-2">Welcome Back!</h3>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-xs">
            For create your account please fill up the necessary fields below
          </p>
          <img src="https://demo.nextadmin.co/images/grids/grid-02.svg" alt="" className="mt-4" />
        </div>
      </div>
    </div>
  );
}
