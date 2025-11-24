import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Line from "../components/line";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError("");
  };

  const validateForm = () => {
    const { name, email, password, confirmPassword } = formData;
    
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return false;
    }
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    
    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setError("");
    
    try {
      const res = await fetch("https://rapid-resq-backend.onrender.com/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || "Signup failed");
      }
      
      navigate("/login");
      
    } catch (err) {
      setError(err.message || "An error occurred during signup");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden">

      {/* Navbar */}
      <nav className="w-full border-b border-gray-800/50 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-white" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116A31.365 31.365 0 008.84 7.5a2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-lg font-bold text-white md:text-xl">RapidResq</span>
              </Link>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-4">
              <span className="hidden text-xs sm:text-sm text-gray-400 sm:inline-block">
                Have an account?
              </span>
              <Link 
                to="/login" 
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-3 py-1.5 text-xs sm:text-sm font-medium text-white transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:px-4 sm:py-2"
              >
                Sign In
              </Link>
            </div>

          </div>
        </div>
      </nav>

      
      

      {/* Content */}
      <div className="flex items-center justify-center py-2 sm:py-4 px-3 sm:px-4 h-[calc(100vh-4rem)]">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl border border-gray-700/50 w-full">
            <div className="p-4 sm:p-6">

              <div className="text-center mb-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white">Create Account</h2>
              </div>

              {error && (
                <div className="mb-3 p-3 bg-red-500/20 border border-red-500/50 text-red-300 rounded-lg text-xs sm:text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSignup} className="space-y-3">

                {/* Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-white"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email */}
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

                {/* Password */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-white pr-10"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 text-gray-400"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-white pr-10"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3 text-gray-400"
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2.5 bg-blue-600 rounded-lg text-white mt-2 hover:bg-blue-700"
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </button>

              </form>

              <div className="mt-3 text-center">
                <p className="text-xs sm:text-sm text-gray-400">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-400 hover:text-blue-300">
                    Sign in
                  </Link>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Signup;
