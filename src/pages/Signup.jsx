import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Line from "../components/line";
import Signup_navbar from "../components/Signup_Navbar";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Phone_number: "",
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
    if(Phone_number.length !=10){
      setError("Phone number must be 10 digits long");
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
          Phone_number: formData.Phone_number,
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 ">

      <Signup_navbar />
      <Line margin="m-0.5" />

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
                {/*Phone Number*/}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    name="Phone_number"
                    type="number"
                    value={formData.Phone_number}
                    onChange={handleChange}
                    className="w-full px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-white"
                    placeholder="9876543210"
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
