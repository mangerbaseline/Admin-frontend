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

    try {
      setLoading(true);
      setError("");

      const data = await signin(email, password);

      if (data && data.token) {
        console.log("✅ Login successful, token received:", data.token);

        // Save token FIRST
        localStorage.setItem("token", data.token);

        // Force a re-check after storage is updated
        setTimeout(() => {
          console.log("➡️ Redirecting to /dashboard ...");
          router.replace("/dashboard");
        }, 200);
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
      <form onSubmit={handleSubmit} className="p-6 border rounded shadow-md w-80">
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
      </form>
    </div>
  );
}
