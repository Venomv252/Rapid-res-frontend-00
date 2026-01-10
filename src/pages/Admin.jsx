import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleadminsignup = async (e) => {
    e.preventDefault();
    handleAdmin();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError("");
  };

  const handleAdmin = async () => {
    setIsLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        email: formData.email,
        password: formData.password,
      },{withCredentials: true});
      if (res.status === 200 || res.status === 201) {
        navigate("/admin/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 ">
      {/* Content */}
      <div className="flex items-center justify-center py-2 sm:py-4 px-3 sm:px-4 h-[calc(100vh-4rem)]">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl border border-gray-700/50 w-full">
            <div className="p-4 sm:p-6">
              <div className="text-center mb-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Admin Login
                </h2>
              </div>

              {error && (
                <div className="mb-3 p-3 bg-red-500/20 border border-red-500/50 text-red-300 rounded-lg text-xs sm:text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleadminsignup} className="space-y-3">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-white"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">
                    password
                  </label>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder={showPassword ? "••••••••" : "password"}
                      className="w-full px-3 py-1 pr-12 bg-gray-800/50 border border-gray-700 rounded-lg text-white"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs cursor-pointer"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2.5 bg-blue-600 rounded-lg text-white mt-2 hover:bg-blue-700"
                >
                  {isLoading ? "Signing in" : "Sign in"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
