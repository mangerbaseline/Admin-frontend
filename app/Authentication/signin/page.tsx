"use client";

import { useState } from "react";
import { signin } from "../../lib/api";
import { useRouter } from "next/navigation";

export default function SigninPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("🚀 handleSubmit fired", { email, password });

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
      const data = await signin(email, password);

      if (data && data.token) {
        console.log("✅ Login successful, token received:", data.token);

        // Save token first
        localStorage.setItem("token", data.token);

        // ✅ Redirect AFTER ensuring token is set
        setTimeout(() => {
          router.replace("/dashboard");
        }, 150);
      } else {
        console.warn("⚠️ Login failed, no token returned:", data);
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
          onClick={() =>
            console.log("🔘 Button clicked, email:", email, "password:", password)
          }
          className={`w-full bg-red-500 hover:bg-red-600 text-white p-2 rounded transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

        <p className="mt-4 text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <a
            href="/Authentication/signup"
            className="text-red-500 hover:underline"
          >
            Sign Up
          </a>
        </p>

        {/* Debug/Logout button */}
        <button
          type="button"
          onClick={() => {
            localStorage.removeItem("token");
            fetch("http://localhost:5000/api/auth/logout", {
              method: "POST",
              credentials: "include",
            }).then(() => {
              window.location.reload();
            });
          }}
          className="mt-2 w-full bg-gray-500 hover:bg-gray-600 text-white p-2 rounded transition"
        >
          Clear Session
        </button>
      </form>
    </div>
  );
}
