import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Line from "../components/line";
import Signup_navbar from "../components/Signup_Navbar";
import { validation, handleSignupservice } from "../SignupFunction/HandleChange";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",   // ✅ FIXED
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

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!validation(formData, setError)) return;
    setIsLoading(true);
    setError("");

    await handleSignupservice(formData, setError, setIsLoading, navigate);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      <Signup_navbar />
      <Line margin="m-0.5" />

      <div className="flex items-center justify-center py-2 px-3 h-[calc(100vh-4rem)]">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-gray-900/80 rounded-xl shadow-xl border border-gray-700/50">
            <div className="p-4 sm:p-6">

              <div className="text-center mb-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Create Account
                </h2>
              </div>

              {error && (
                <div className="mb-3 p-3 bg-red-500/20 border border-red-500/50 text-red-300 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSignup} className="space-y-3">

                {/* Name */}
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  required
                />

                {/* Email */}
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  required
                />

                {/* Phone Number */}
                <input
                  name="phoneNumber"          // ✅ FIXED
                  type="number"
                  value={formData.phoneNumber} // ✅ FIXED
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  required
                />

                {/* Password */}
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  required
                />

                {/* Confirm Password */}
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  required
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700"
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </button>
              </form>

              <div className="mt-3 text-center text-gray-400">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-400">Sign in</Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
