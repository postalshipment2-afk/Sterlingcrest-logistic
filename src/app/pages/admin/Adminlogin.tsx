import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { Lock, User, ArrowRight } from "lucide-react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Your hardcoded credentials
  const USER_NAME = "Admin123";
  const PASS = "Kingso2026@";

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === USER_NAME && password === PASS) {
      toast.success("Login Successful! Redirecting...");

      // Navigate to /Admin after a short delay to let the user see the toast
      setTimeout(() => {
        navigate("/Admin_Dashboard");
      }, 1500);
    } else {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Toaster position="top-center" expand={false} richColors />

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-orange-500 mb-2">
            Admin Login
          </h1>
          <p className="text-zinc-400">Please enter your details to sign in</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Username Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300 ml-1">
              Username :
            </label>
            <div className="relative group">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within:text-orange-500 transition-colors" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg py-3 pl-10 pr-4 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                placeholder="Enter username"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300 ml-1">
              Password :
            </label>
            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within:text-orange-500 transition-colors" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg py-3 pl-10 pr-4 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
          >
            Sign In
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-zinc-500 text-sm">
            Admin Access Only.
            <span className="text-orange-500/50 block mt-1 text-xs italic">
              System v2026.4
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
