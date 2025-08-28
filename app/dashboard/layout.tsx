"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/app/components/Sidebar";
import Header from "@/app/components/Header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setIsClient(true); // ✅ only true after hydration
  }, []);

  useEffect(() => {
    if (isClient) {
      const token = localStorage.getItem("token");
      console.log("🔍 DashboardLayout - token:", token);

      if (!token) {
        router.replace("/Authentication/signin");
      } else {
        setAuthenticated(true);
      }
    }
  }, [isClient, router]);

  if (!isClient) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!authenticated) {
    return <div className="flex items-center justify-center h-screen">Redirecting...</div>;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 bg-gray-100 dark:bg-gray-900 p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
