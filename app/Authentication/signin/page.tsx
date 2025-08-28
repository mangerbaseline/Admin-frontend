"use client";

import { useState, useEffect, startTransition } from "react";
import { signin } from "../../lib/api";
import { useRouter } from "next/navigation";

export default function SigninPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // clear old token from localStorage (cleanup, no longer needed)
    localStorage.removeItem("token");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);
      setError("");

      console.log("📤 Sending signin request with:", { email, password });
      const data = await signin(email, password); // backend sets cookie

      if (data && data.message === "Login successful") {
        console.log("✅ Login successful, cookies set by backend");

        // 🚀 redirect to dashboard
        startTransition(() => {
          router.push("/dashboard");
        });
      } else {
        setError("Invalid login response");
      }
    } catch (err: any) {
      console.error("❌ Signin error:", err);
      setError(err.message || "Signin failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="p-6 border rounded shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4">Sign In</h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 mb-2 rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-red-500 hover:bg-red-600 text-white p-2 rounded transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

        <p className="mt-4 text-sm text-center text-gray-500">
          Don&apos;t have an account?{" "}
          <a href="/Authentication/signup" className="text-red-500 hover:underline">
            Sign Up
          </a>
        </p>

        <button
          type="button"
          onClick={async () => {
            await fetch("http://localhost:5000/api/auth/logout", {
              method: "POST",
              credentials: "include",
            });
            window.location.reload();
          }}
          className="mt-2 w-full bg-gray-500 hover:bg-gray-600 text-white p-2 rounded transition"
        >
          Clear Session
        </button>
      </form>
    </div>
  );
}
